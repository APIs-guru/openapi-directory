# openapi-client
# Getting Started

## Overview

### Access

All API methods are either a `GET`, `POST` or `OPTIONS` request.

The API communicates over both HTTPS and plain HTTP using IPv4 and IPv6.

We recommend using HTTPS only although HTTP is available.

We use appropriate HTTP status codes where possible to indicate the request status.

### Rate Limiting

Each IP address is rate limited at 30 requests per second. Tripping the rate limit will result in a 503 response.

The autocomplete API also has an additional rate limit.

If you expect to breach the limit please contact us and we can move you to an endpoint with a higher limit.

### JSONP

[JSONP](http://en.wikipedia.org/wiki/JSONP) requests are supported. Include a `callback=` in your request as a query parameter. Your results return wrapped in a function designated by your request.

## Authentication

Most requests require an **API key** for authentication. Authenticate by passing an `api_key` as part of the query string. For example:

```
api.ideal-postcodes.co.uk/v1/autocomplete/addresses?api_key=iddqd&q=parkside
```

Alternatively, authentication can be transmitted via the `Authorization` header using the following scheme:

```
Authorization: api_key=\"iddqd\" [other_key=\"foo\"]
```

## Versioning

This API is versioned with a simple prefix in the URL. The current version is `/v1/`. We will maintain backwards-compatibility by releasing breaking changes under a new version.

Please note that the following changes are backwards-compatible:

- Adding new properties to existing API responses
- Adding new API endpoints
- Adding new optional request parameters to existing API endpoints
- Changing the order of properties in existing API responses
- Changing the autocomplete address suggestion format

## Error Handling

A successful lookup is accompanied with a HTTP status code of 200 and a response code of 2000 (found in the body).

An error has occurred if the HTTP status code is not 200. Errors can range from a benign 404 (resource not found) to more urgent errors (your API Key ran out of credit, failed authentication, etc).

## Testing

Each new account comes with a free test balance. Contact us if you need more for testing and integration.

### Community Key

Our documentation and demos make heavy use of our community key `iddqd`. This allows for convenient access for trialing the API.

Many restrictions on this key are relaxed to allow developers make test requests. This key has a limit of 15 lookups per IP address per day as well as a daily usage cap. If you hit any limit restrictions, you can continue testing the API by creating a key of your own and using our free test methods.

Please be kind with the community key. We're trusting everyone to use it responsibly so that other developers may trial the API. Thank you!

## Metadata

Requests that affect your balance may be annotated with arbitrary metadata. This data is stored along with your lookup history and can be queried at a later date via the API or the dashboard. We call the ability to label your requests [tagging](https://docs.ideal-postcodes.co.uk/docs/guides/tags).

# Response Codes

The API returns two indicators to help you to determine the status of each HTTP request.

The first is the **HTTP Status**, which is found in the status-line of all HTTP requests. The API will return status codes that adhere to HTTP /1.1 Specifications wherever possible.

`2XX` status codes indicates success while `4XX` and `5XX` indicate client and server errors respectively.

The second is the **API response code**, which can be found in the `code` property of the response body. This code will provide a more specific reason if a failure has occurred and can point you in the right direction when debugging.

Please use the glossary of code numbers and HTTP status codes below when debugging your requests.

## 200 Request Success

| HTTP Code | API Code | Description                                  |
| --------- | -------- | -------------------------------------------- |
| 200       | 2000     | Success. Request was completed successfully. |

## 400 Bad Request

The request could not be understood due to some input error.

| HTTP Code | API Code | Description                                                                                                                           |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| 400       | 4000     | Invalid syntax submitted. Some part of your request was malformed or did not match our specifications.                                |
| 400       | 4001     | Validation failed on your submitted data. Some of the data you provided did not meet our validation requirements, e.g. string length. |
| 400       | 4005     | Invalid start date. Please ensure start dates are provided as a UTC Timestamp in milliseconds.                                        |
| 400       | 4006     | Invalid end date. Please ensure end dates are provided as a UTC Timestamp in milliseconds.                                            |
| 400       | 4007     | Invalid date range. Check if your start and end dates are in the right order.                                                         |
| 400       | 4008     | Invalid date range. Check that your date range is 90 days or less.                                                                    |
| 400       | 4009     | Too many tags. Please specify no more than 3 tags to query.                                                                           |

## 401 Unauthorised

Authorization credentials are not valid.

| HTTP Code | API Code | Description                                                                                                                                                        |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 401       | 4010     | Invalid Key. The `api_key` you provided is not valid.                                                                                                              |
| 401       | 4011     | Requesting URL not on whitelist. The cross domain request is not coming from a whitelisted URL. You can update or disable your allowed URLs via your Key settings. |
| 401       | 4012     | Failed user authentication. Invalid `user_token` presented.                                                                                                        |
| 401       | 4013     | Licensee Key is required. Sublicensed keys require you need to present licensee credentials via the `licensee` parameter.                                          |

## 402 Request Failed

Your request is well-formed but are not able to complete your request for another reason.

| HTTP Code | API Code | Description                                                                                                                                                                                                                                                        |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 402       | 4020     | Key balance depleted. You're out of lookups on your API Key.                                                                                                                                                                                                       |
| 402       | 4021     | Limit reached. One of your lookup limits has been breached for today. This could either be your total daily limit on your key or the individual IP limit. You can either wait for for the limit to reset (after a day) or manually disable or increase your limit. |

## 404 Resource Not Found

The resource you requested does not exist.

| HTTP Code | API Code | Description                                                                                   |
| --------- | -------- | --------------------------------------------------------------------------------------------- |
| 404       | 4040     | Postcode not found. The postcode you have submitted does not exist.                           |
| 404       | 4041     | User not found. Your user could not be identified given the credentials you presented.        |
| 404       | 4042     | Key not found. Your key could not be identified given the credentials you presented.          |
| 404       | 4044     | No UDPRN found. No address is associated with the UDPRN queried                               |
| 404       | 4045     | No licensee found. Your licensee could not be identified given the credentials you presented. |
| 404       | 4046     | No UMPRN found. No Multiple Residence premise is associated with the UMPRN queried.           |

## 500 Server Error

A error occurred on our server.

| HTTP Code | API Code | Description                                                                                                                                                        |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 500       | 5000     | An error occurred on our end. These errors are logged and queued so we can understand what went wrong. However, if you need speedy resolution please email support |
| 500       | 5001     | Akin to 5000.                                                                                                                                                      |
| 500       | 5002     | The server took too long to process on our end, so we aborted the request. You may retry the request.                                                              |


This Python package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 3.7.0
- Package version: 1.0.0
- Generator version: 7.9.0
- Build package: org.openapitools.codegen.languages.PythonClientCodegen
For more information, please visit [https://ideal-postcodes.co.uk/support](https://ideal-postcodes.co.uk/support)

## Requirements.

Python 3.7+

## Installation & Usage
### pip install

If the python package is hosted on a repository, you can install directly using:

```sh
pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git
```
(you may need to run `pip` with root permission: `sudo pip install git+https://github.com/GIT_USER_ID/GIT_REPO_ID.git`)

Then import the package:
```python
import openapi_client
```

### Setuptools

Install via [Setuptools](http://pypi.python.org/pypi/setuptools).

```sh
python setup.py install --user
```
(or `sudo python setup.py install` to install the package for all users)

Then import the package:
```python
import openapi_client
```

### Tests

Execute `pytest` to run the tests.

## Getting Started

Please follow the [installation procedure](#installation--usage) and then run the following:

```python

import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ideal-postcodes.co.uk/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ideal-postcodes.co.uk/v1"
)



# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddressSearchApi(api_client)
    api_key = 'api_key_example' # str |  (optional)
    query = 'query_example' # str | Specifies the address you wish to query. Query can be shortened to `q=` (optional)
    context = 'context_example' # str |  (optional)
    limit = 10 # int | Limits number of address suggestions unless a postcode is detected. In this instance entire list of addreses for that postcode is returned.  (optional) (default to 10)
    postcode_outward = 'postcode_outward_example' # str |  (optional)
    postcode = 'postcode_example' # str |  (optional)
    postcode_area = 'postcode_area_example' # str |  (optional)
    postcode_sector = 'postcode_sector_example' # str |  (optional)
    post_town = 'post_town_example' # str |  (optional)
    uprn = 56 # int |  (optional)
    country = 'country_example' # str |  (optional)
    postcode_type = 'postcode_type_example' # str |  (optional)
    su_organisation_indicator = 'su_organisation_indicator_example' # str |  (optional)
    box = 'box_example' # str |  (optional)
    bias_postcode_outward = 'bias_postcode_outward_example' # str |  (optional)
    bias_postcode = 'bias_postcode_example' # str |  (optional)
    bias_postcode_area = 'bias_postcode_area_example' # str |  (optional)
    bias_postcode_sector = 'bias_postcode_sector_example' # str |  (optional)
    bias_post_town = 'bias_post_town_example' # str |  (optional)
    bias_thoroughfare = 'bias_thoroughfare_example' # str |  (optional)
    bias_country = 'bias_country_example' # str |  (optional)
    bias_lonlat = 'bias_lonlat_example' # str |  (optional)
    bias_ip = openapi_client.BiasIpParam() # BiasIpParam |  (optional)

    try:
        # Find Address
        api_response = api_instance.address_autocomplete(api_key=api_key, query=query, context=context, limit=limit, postcode_outward=postcode_outward, postcode=postcode, postcode_area=postcode_area, postcode_sector=postcode_sector, post_town=post_town, uprn=uprn, country=country, postcode_type=postcode_type, su_organisation_indicator=su_organisation_indicator, box=box, bias_postcode_outward=bias_postcode_outward, bias_postcode=bias_postcode, bias_postcode_area=bias_postcode_area, bias_postcode_sector=bias_postcode_sector, bias_post_town=bias_post_town, bias_thoroughfare=bias_thoroughfare, bias_country=bias_country, bias_lonlat=bias_lonlat, bias_ip=bias_ip)
        print("The response of AddressSearchApi->address_autocomplete:\n")
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling AddressSearchApi->address_autocomplete: %s\n" % e)

```

## Documentation for API Endpoints

All URIs are relative to *https://api.ideal-postcodes.co.uk/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AddressSearchApi* | [**address_autocomplete**](docs/AddressSearchApi.md#address_autocomplete) | **GET** /autocomplete/addresses | Find Address
*AddressSearchApi* | [**resolve**](docs/AddressSearchApi.md#resolve) | **GET** /autocomplete/addresses/{address}/gbr | Resolve Address (GBR)
*AddressSearchApi* | [**resolve_usa**](docs/AddressSearchApi.md#resolve_usa) | **GET** /autocomplete/addresses/{address}/usa | Resolve Address (USA)
*ConfigsApi* | [**create_config**](docs/ConfigsApi.md#create_config) | **POST** /keys/{key}/configs | Create
*ConfigsApi* | [**delete_config**](docs/ConfigsApi.md#delete_config) | **DELETE** /keys/{key}/configs/{config} | Delete
*ConfigsApi* | [**list_configs**](docs/ConfigsApi.md#list_configs) | **GET** /keys/{key}/configs | List
*ConfigsApi* | [**retrieve_config**](docs/ConfigsApi.md#retrieve_config) | **GET** /keys/{key}/configs/{config} | Retrieve
*ConfigsApi* | [**update_config**](docs/ConfigsApi.md#update_config) | **POST** /keys/{key}/configs/{config} | Update
*EmailsApi* | [**email_validation**](docs/EmailsApi.md#email_validation) | **GET** /emails | Email Validation
*KeysApi* | [**key_availability**](docs/KeysApi.md#key_availability) | **GET** /keys/{key} | Availability
*KeysApi* | [**key_details**](docs/KeysApi.md#key_details) | **GET** /keys/{key}/details | Details
*KeysApi* | [**key_logs**](docs/KeysApi.md#key_logs) | **GET** /keys/{key}/lookups | Logs (CSV)
*KeysApi* | [**key_usage**](docs/KeysApi.md#key_usage) | **GET** /keys/{key}/usage | Usage Stats
*LicenseesApi* | [**create_licensee**](docs/LicenseesApi.md#create_licensee) | **POST** /keys/{key}/licensees | Create
*LicenseesApi* | [**delete_licensee**](docs/LicenseesApi.md#delete_licensee) | **DELETE** /keys/{key}/licensees/{licensee} | Cancel
*LicenseesApi* | [**list_licensees**](docs/LicenseesApi.md#list_licensees) | **GET** /keys/{key}/licensees | List
*LicenseesApi* | [**retrieve_licensee**](docs/LicenseesApi.md#retrieve_licensee) | **GET** /keys/{key}/licensees/{licensee} | Retrieve
*LicenseesApi* | [**update_licensee**](docs/LicenseesApi.md#update_licensee) | **PUT** /keys/{key}/licensees/{licensee} | Update
*PhoneNumbersApi* | [**phone_number_validation**](docs/PhoneNumbersApi.md#phone_number_validation) | **GET** /phone_numbers | Phone Number Validation
*PlaceSearchApi* | [**find_place**](docs/PlaceSearchApi.md#find_place) | **GET** /places | Find Place
*PlaceSearchApi* | [**resolve_place**](docs/PlaceSearchApi.md#resolve_place) | **GET** /places/${place} | Resolve Place
*UKApi* | [**address_cleanse**](docs/UKApi.md#address_cleanse) | **POST** /cleanse/addresses | Cleanse
*UKApi* | [**addresses**](docs/UKApi.md#addresses) | **GET** /addresses | Extract Addresses
*UKApi* | [**postcodes**](docs/UKApi.md#postcodes) | **GET** /postcodes/{postcode} | Lookup Postcode
*UKApi* | [**u_dprn**](docs/UKApi.md#u_dprn) | **GET** /udprn/{udprn} | Retrieve by UDPRN
*UKApi* | [**u_mprn**](docs/UKApi.md#u_mprn) | **GET** /umprn/{umprn} | Retrieve by UMPRN


## Documentation For Models

 - [AbAddress](docs/AbAddress.md)
 - [AddressBaseCore](docs/AddressBaseCore.md)
 - [AddressCleanseRequest](docs/AddressCleanseRequest.md)
 - [AddressResponse](docs/AddressResponse.md)
 - [AddressResponseResult](docs/AddressResponseResult.md)
 - [AddressResponseResultHitsInner](docs/AddressResponseResultHitsInner.md)
 - [AddressSuggestion](docs/AddressSuggestion.md)
 - [ApiKey](docs/ApiKey.md)
 - [ApiKeyAutomatedTopup](docs/ApiKeyAutomatedTopup.md)
 - [ApiKeyContext](docs/ApiKeyContext.md)
 - [ApiKeyCurrentPurchase](docs/ApiKeyCurrentPurchase.md)
 - [ApiKeyDailyLimit](docs/ApiKeyDailyLimit.md)
 - [ApiKeyDatasets](docs/ApiKeyDatasets.md)
 - [ApiKeyDetails](docs/ApiKeyDetails.md)
 - [ApiKeyDetailsResponse](docs/ApiKeyDetailsResponse.md)
 - [ApiKeyIndividualLimit](docs/ApiKeyIndividualLimit.md)
 - [ApiKeyNotifications](docs/ApiKeyNotifications.md)
 - [ApiKeyResponse](docs/ApiKeyResponse.md)
 - [ApiKeyUsageResponse](docs/ApiKeyUsageResponse.md)
 - [AutocompleteResponse](docs/AutocompleteResponse.md)
 - [AutocompleteResponseResult](docs/AutocompleteResponseResult.md)
 - [AutocompleteResponseResultHitsInner](docs/AutocompleteResponseResultHitsInner.md)
 - [AvailableContextsInner](docs/AvailableContextsInner.md)
 - [BadRequestResponse](docs/BadRequestResponse.md)
 - [BadRequestResponseAllOfErrors](docs/BadRequestResponseAllOfErrors.md)
 - [BaseAlternateCode](docs/BaseAlternateCode.md)
 - [BiasIpParam](docs/BiasIpParam.md)
 - [Carrier](docs/Carrier.md)
 - [CityStateNameFacilityCode](docs/CityStateNameFacilityCode.md)
 - [CleanseResponse](docs/CleanseResponse.md)
 - [CleanseResponseResult](docs/CleanseResponseResult.md)
 - [Config](docs/Config.md)
 - [ConfigDeleteResponse](docs/ConfigDeleteResponse.md)
 - [ConfigDeleteResponseResult](docs/ConfigDeleteResponseResult.md)
 - [ConfigNewParam](docs/ConfigNewParam.md)
 - [ConfigResponse](docs/ConfigResponse.md)
 - [ConfigUpdateParam](docs/ConfigUpdateParam.md)
 - [ConfigsResponse](docs/ConfigsResponse.md)
 - [ConfigsResponseResult](docs/ConfigsResponseResult.md)
 - [CongressionalDistrictNumber](docs/CongressionalDistrictNumber.md)
 - [Country](docs/Country.md)
 - [CountryISO](docs/CountryISO.md)
 - [CountryISO2](docs/CountryISO2.md)
 - [CountyNumber](docs/CountyNumber.md)
 - [Dataset](docs/Dataset.md)
 - [Eastings](docs/Eastings.md)
 - [EcadAddress](docs/EcadAddress.md)
 - [EcafAddress](docs/EcafAddress.md)
 - [EircBase](docs/EircBase.md)
 - [Email](docs/Email.md)
 - [EmailResponse](docs/EmailResponse.md)
 - [EmailResponseResult](docs/EmailResponseResult.md)
 - [ErrorResponse](docs/ErrorResponse.md)
 - [FinanceNumber](docs/FinanceNumber.md)
 - [GbrCleanseMatch](docs/GbrCleanseMatch.md)
 - [GbrCleanseMatchMatch](docs/GbrCleanseMatchMatch.md)
 - [GbrCleanseNoMatch](docs/GbrCleanseNoMatch.md)
 - [GbrGlobalAddress](docs/GbrGlobalAddress.md)
 - [GbrGlobalAddressNative](docs/GbrGlobalAddressNative.md)
 - [GbrResolveAddressResponse](docs/GbrResolveAddressResponse.md)
 - [GbrResolveAddressResponseResult](docs/GbrResolveAddressResponseResult.md)
 - [GeonamesPlace](docs/GeonamesPlace.md)
 - [GeonamesPlaceAllOfAlternatenames](docs/GeonamesPlaceAllOfAlternatenames.md)
 - [GeonamesPlaceAllOfCc2](docs/GeonamesPlaceAllOfCc2.md)
 - [GovernmentBuildingIndicator](docs/GovernmentBuildingIndicator.md)
 - [InvalidPhoneNumber](docs/InvalidPhoneNumber.md)
 - [KeyUsageResult](docs/KeyUsageResult.md)
 - [KeyUsageResultDailyCountInner](docs/KeyUsageResultDailyCountInner.md)
 - [LacsStatusIndicator](docs/LacsStatusIndicator.md)
 - [Language](docs/Language.md)
 - [Latitude](docs/Latitude.md)
 - [Licensee](docs/Licensee.md)
 - [LicenseeAllOfDaily](docs/LicenseeAllOfDaily.md)
 - [LicenseeDeleteResponse](docs/LicenseeDeleteResponse.md)
 - [LicenseeEditable](docs/LicenseeEditable.md)
 - [LicenseeEditableDaily](docs/LicenseeEditableDaily.md)
 - [LicenseeResponse](docs/LicenseeResponse.md)
 - [LicenseesResponse](docs/LicenseesResponse.md)
 - [LicenseesResponseResult](docs/LicenseesResponseResult.md)
 - [Longitude](docs/Longitude.md)
 - [MrAddress](docs/MrAddress.md)
 - [NoContext](docs/NoContext.md)
 - [Northings](docs/Northings.md)
 - [NotFoundResponse](docs/NotFoundResponse.md)
 - [NybAddress](docs/NybAddress.md)
 - [PafAddress](docs/PafAddress.md)
 - [PafAliasAddress](docs/PafAliasAddress.md)
 - [PafBase](docs/PafBase.md)
 - [PafPostcodeType](docs/PafPostcodeType.md)
 - [PafUmprn](docs/PafUmprn.md)
 - [PhoneNumber](docs/PhoneNumber.md)
 - [PhoneNumberResponse](docs/PhoneNumberResponse.md)
 - [PhoneNumberResponseResult](docs/PhoneNumberResponseResult.md)
 - [Place](docs/Place.md)
 - [PlaceNative](docs/PlaceNative.md)
 - [PlaceResponse](docs/PlaceResponse.md)
 - [PlaceResponseResult](docs/PlaceResponseResult.md)
 - [PlaceResponseResultHitsInner](docs/PlaceResponseResultHitsInner.md)
 - [PlaceSuggestion](docs/PlaceSuggestion.md)
 - [PostcodeNotFoundResponse](docs/PostcodeNotFoundResponse.md)
 - [PostcodeResponse](docs/PostcodeResponse.md)
 - [PostcodeResponseResultInner](docs/PostcodeResponseResultInner.md)
 - [RateLimitedResponse](docs/RateLimitedResponse.md)
 - [RecordTypeCode](docs/RecordTypeCode.md)
 - [ResolvePlaceResponse](docs/ResolvePlaceResponse.md)
 - [ResolvePlaceResponseResult](docs/ResolvePlaceResponseResult.md)
 - [UDPRNResponse](docs/UDPRNResponse.md)
 - [UDPRNResponseResult](docs/UDPRNResponseResult.md)
 - [UMPRNResponse](docs/UMPRNResponse.md)
 - [UMPRNResponseResult](docs/UMPRNResponseResult.md)
 - [UkAddressSuggestion](docs/UkAddressSuggestion.md)
 - [UkAddressSuggestionUrls](docs/UkAddressSuggestionUrls.md)
 - [UnauthorizedResponse](docs/UnauthorizedResponse.md)
 - [UnknownEmail](docs/UnknownEmail.md)
 - [UsaGlobalAddress](docs/UsaGlobalAddress.md)
 - [UsaGlobalAddressNative](docs/UsaGlobalAddressNative.md)
 - [UsaResolveAddressResponse](docs/UsaResolveAddressResponse.md)
 - [UsaResolveAddressResponseResult](docs/UsaResolveAddressResponseResult.md)
 - [UspsAddress](docs/UspsAddress.md)
 - [UspsCountry](docs/UspsCountry.md)
 - [UspsCountryIso](docs/UspsCountryIso.md)
 - [UspsCountryIso2](docs/UspsCountryIso2.md)
 - [UspsDataset](docs/UspsDataset.md)
 - [UspsLanguage](docs/UspsLanguage.md)
 - [WelshPafAddress](docs/WelshPafAddress.md)
 - [ZipClassificationCode](docs/ZipClassificationCode.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization

Endpoints do not require authorization.


## Author

support@ideal-postcodes.co.uk


