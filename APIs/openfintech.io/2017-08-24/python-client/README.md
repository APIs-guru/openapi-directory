# openapi-client
# Introduction
[OpenFinTech.io](https://openfintech.io) is an open database that comprises of standardized primary data for FinTech industry.<br>
It contains such information as geolocation data (countries, cities, regions), organizations, currencies (national, digital, virtual, crypto), banks, digital exchangers, payment providers (PSP), payment methods, etc.<br>
It is created for communication of cross-integrated micro-services on \"one language\". This is achieved through standardization of entity identifiers that are used to exchange information among different services.<br>

### UML
UML Domain Model diagram you can find [here](https://api.openfintech.io/public_domain_model.png).<br>

### Persistence
Entities are updated not more than 1 time per day.<br>

### Terms and Conditions
This *OpenFinTech.io* is made available under the [Open Database License](http://opendatacommons.org/licenses/odbl/1.0/).<br>
Any rights in individual contents of the database are licensed under the [Database Contents License](http://opendatacommons.org/licenses/dbcl/1.0/).<br>

### Contacts
For any questions, please email - info@openfintech.io<br>
Or you can contact us at <a href=\"https://gitter.im/paymaxicom/openfintech.io\">Gitter</a><br>

Powered by [Paymaxi](https://www.paymaxi.com)

# Get Started

If you use [POSTMAN](https://www.getpostman.com) or similar program which can operate with swagger`s files - just [download](https://docs.openfintech.io) our spec and [import it](https://www.getpostman.com/docs/importing_swagger). Also you can try live [API demo](https://api.openfintech.io).

## Overview

The OpenFinTech API is organized around [REST](https://en.wikipedia.org/wiki/Representational_state_transfer). Our API has predictable, resource-oriented URLs, and uses HTTP response codes to indicate API errors.<br>
API is based on [JSON API](http://jsonapi.org) standard. JSON is returned by all API responses, including errors, although our API libraries convert responses to appropriate language-specific objects.<br>
JSON API requires use of the JSON API media type (`application/vnd.api+json`) for exchanging data.<br>
### Additional Request Headers
#### ACCEPT HEADER
Your requests should always include the header:
```curl
Accept: application/vnd.api+json
```

## Authentication

To use OpenFinTech API no needed authorization.

## Versioning

When we make changes to the API, we release new, dated versions. The current version is **2017-08-24**. Read our [API upgrades guide]() to see our API changelog and to learn more about backwards compatibility.

## Pagination

OpenFinTech APIs to retrieve lists of banks, currencies and other resources - paginated to **100** items by default. The pagination information will be included in the list API response under the node name `meta` - contains information about listed objects [`total` - contains information about total count of listed objects, `pages` - count of pages], `links` - contain links to navigate between pages [`first` - link to first page, `prev` - link to previous page, `next` - link to next page, `last` - link to last page].<br>
By default first page will be listed. For navigating through pages, use the page parameter (e.g. `page[number]`, `page[size]`).<br>
The `page[size]` parameter can be used to set the number of records that you want to receive in the response.<br>
The `page[number]` parameter can be used to set needed page number.<br>
Example of response:
```json
{
  \"meta\": {
    \"total\": 419,
    \"pages\": 42
  },
  \"links\": {
    \"first\": \"/v1/{path}?page[number]=1&page[size]=10\",
    \"prev\": \"/v1/{path}?page[number]=39&page[size]=10\",
    \"next\": \"/v1/{path}?page[number]=41&page[size]=10\",
    \"last\": \"/v1/{path}?page[number]=42&page[size]=10\"
  }
```

### Sorting

OpenFinTech\\`s API supported query parameter to sort result collection [e.g. `?sort=code`]. Information about available parameters may be found in the endpoint description. Positive parameter [e.g. `?sort=code`] points to ascending sorting, negative  [e.g. `?sort=-code`] - to descending sorting. Also, supported multiple sorting parameters [e.g. `?sort=code, -name, id`, etc.]
```curl
https://api.openfintech.io/v1/countries?sort=name,-area
```

### Filtering

Filtering provided by unique query key `filter[*filtering_condition*]`. Information about available parameters may be found in the endpoint description.
```curl
https://api.openfintech.io/v1/countries?filter[region]=europe
```

## Images

OpenFinTech provides two types of images: icons and logos. To get one of those types you should to use next url pattern:
``` curl
https://api.openfintech.io/v1/{path}/{id}/{icon/logo}
```
Also, images can be resized by adding next parameters: `h={height}&w={width}`. For example, you want to get organization icon with width equals to 20 pixels:
``` curl
https://api.openfintech.io/v1/organizations/{id}/icon?w=20&h=20
```
If argument height or width is missing API returns original image with real sizes.

## Errors

API uses conventional HTTP response codes to indicate the success or failure of an API request. In general, codes in the `2xx` range indicate success, codes in the `4xx` range indicate an error that failed given the information provided (e.g., a required parameter was omitted, etc.), and codes in the `5xx` range indicate an error with OpenFinTech's servers (these are rare).

| Code | Description |
|------|-------------|
| 200 - OK | Everything worked as expected. |
| 400 - Bad Request | The request was unacceptable, often due to missing a required parameter. |
| 401 - Unauthorized | No valid API key provided. |
| 402 - Request Failed | The parameters were valid but the request failed. |
| 404 - Not Found | The requested resource doesn't exist. |
| 409 - Conflict | The request conflicts with another request (perhaps due to using the same idempotent key). |
| 429 - Too Many Requests | Too many requests hit the API too quickly. We recommend an exponential backoff of your requests. |
| 500, 502, 503, 504 - Server Errors | Something went wrong on OpenFinTech's end. (These are rare.) |


This Python package is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 2017-08-24
- Package version: 1.0.0
- Generator version: 7.9.0
- Build package: org.openapitools.codegen.languages.PythonClientCodegen

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

# Defining the host is optional and defaults to https://api.openfintech.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.openfintech.io/v1"
)



# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BanksApi(api_client)
    page_number = 56 # int | Current page number. (optional)
    page_size = 56 # int | Page size.<br>*Default value: 100*  (optional)
    filter_sort_code = 'filter_sort_code_example' # str | Filtering by banks code. (optional)
    filter_code = 'filter_code_example' # str | Filtering by code. (optional)
    filter_status = ['filter_status_example'] # List[str] | Filtration by status. (optional)
    sort = ['sort_example'] # List[str] | Sort params:<br>  | ASC | DESC | |-----|------| | name | -name | | code | -code | | status | -status | | sort_code | -sort_code |  (optional)

    try:
        # List of banks
        api_response = api_instance.banks_get(page_number=page_number, page_size=page_size, filter_sort_code=filter_sort_code, filter_code=filter_code, filter_status=filter_status, sort=sort)
        print("The response of BanksApi->banks_get:\n")
        pprint(api_response)
    except ApiException as e:
        print("Exception when calling BanksApi->banks_get: %s\n" % e)

```

## Documentation for API Endpoints

All URIs are relative to *https://api.openfintech.io/v1*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*BanksApi* | [**banks_get**](docs/BanksApi.md#banks_get) | **GET** /banks | List of banks
*BanksApi* | [**banks_id_get**](docs/BanksApi.md#banks_id_get) | **GET** /banks/{id} | Bank by ID
*CountriesApi* | [**countries_get**](docs/CountriesApi.md#countries_get) | **GET** /countries | List of countries
*CountriesApi* | [**countries_id_get**](docs/CountriesApi.md#countries_id_get) | **GET** /countries/{id} | Country by ID
*CurrenciesApi* | [**currencies_get**](docs/CurrenciesApi.md#currencies_get) | **GET** /currencies | List of currencies
*CurrenciesApi* | [**currencies_id_get**](docs/CurrenciesApi.md#currencies_id_get) | **GET** /currencies/{id} | Currency by ID
*DepositMethodsApi* | [**deposit_methods_get**](docs/DepositMethodsApi.md#deposit_methods_get) | **GET** /deposit-methods | List of deposit methods
*DepositMethodsApi* | [**deposit_methods_id_get**](docs/DepositMethodsApi.md#deposit_methods_id_get) | **GET** /deposit-methods/{id} | Deposit method by ID
*ExchangersApi* | [**exchangers_get**](docs/ExchangersApi.md#exchangers_get) | **GET** /exchangers | List of exchangers
*ExchangersApi* | [**exchangers_id_get**](docs/ExchangersApi.md#exchangers_id_get) | **GET** /exchangers/{id} | Exchanger by ID
*MerchantIndustriesApi* | [**merchant_industries_get**](docs/MerchantIndustriesApi.md#merchant_industries_get) | **GET** /merchant-industries | List of merchant industries
*MerchantIndustriesApi* | [**merchant_industries_id_get**](docs/MerchantIndustriesApi.md#merchant_industries_id_get) | **GET** /merchant-industries/{id} | Merchant industry by ID
*OrganizationsApi* | [**organizations_get**](docs/OrganizationsApi.md#organizations_get) | **GET** /organizations | List of organizations
*OrganizationsApi* | [**organizations_id_get**](docs/OrganizationsApi.md#organizations_id_get) | **GET** /organizations/{id} | Organization by ID
*PaymentMethodsApi* | [**payment_methods_get**](docs/PaymentMethodsApi.md#payment_methods_get) | **GET** /payment-methods | List of payment methods
*PaymentMethodsApi* | [**payment_methods_id_get**](docs/PaymentMethodsApi.md#payment_methods_id_get) | **GET** /payment-methods/{id} | Payment method by ID
*PaymentProvidersApi* | [**payment_providers_get**](docs/PaymentProvidersApi.md#payment_providers_get) | **GET** /payment-providers | List of payment providers
*PaymentProvidersApi* | [**payment_providers_id_get**](docs/PaymentProvidersApi.md#payment_providers_id_get) | **GET** /payment-providers/{id} | Payment provider by ID


## Documentation For Models

 - [ActiveInCountriesRelationship](docs/ActiveInCountriesRelationship.md)
 - [ActiveInCountriesRelationshipDataInner](docs/ActiveInCountriesRelationshipDataInner.md)
 - [ActiveInCountriesRelationshipLinks](docs/ActiveInCountriesRelationshipLinks.md)
 - [Bank](docs/Bank.md)
 - [BankAttributes](docs/BankAttributes.md)
 - [BankOrganization](docs/BankOrganization.md)
 - [BankOrganizationData](docs/BankOrganizationData.md)
 - [BankOrganizationLinks](docs/BankOrganizationLinks.md)
 - [BankRelationships](docs/BankRelationships.md)
 - [BankResponse](docs/BankResponse.md)
 - [BanksResponse](docs/BanksResponse.md)
 - [CountriesResponse](docs/CountriesResponse.md)
 - [Country](docs/Country.md)
 - [CountryAttributes](docs/CountryAttributes.md)
 - [CountryRelationships](docs/CountryRelationships.md)
 - [CountryResponse](docs/CountryResponse.md)
 - [CountryTranslations](docs/CountryTranslations.md)
 - [CountryTranslationsLinks](docs/CountryTranslationsLinks.md)
 - [CurrenciesResponse](docs/CurrenciesResponse.md)
 - [Currency](docs/Currency.md)
 - [CurrencyAttributes](docs/CurrencyAttributes.md)
 - [CurrencyAttributesIcon](docs/CurrencyAttributesIcon.md)
 - [CurrencyCountries](docs/CurrencyCountries.md)
 - [CurrencyCountryLinks](docs/CurrencyCountryLinks.md)
 - [CurrencyIssuer](docs/CurrencyIssuer.md)
 - [CurrencyIssuerLinks](docs/CurrencyIssuerLinks.md)
 - [CurrencyIssuerOrganization](docs/CurrencyIssuerOrganization.md)
 - [CurrencyIssuerOrganizationData](docs/CurrencyIssuerOrganizationData.md)
 - [CurrencyIssuerOrganizationLinks](docs/CurrencyIssuerOrganizationLinks.md)
 - [CurrencyIssuertData](docs/CurrencyIssuertData.md)
 - [CurrencyParent](docs/CurrencyParent.md)
 - [CurrencyParentData](docs/CurrencyParentData.md)
 - [CurrencyParentLinks](docs/CurrencyParentLinks.md)
 - [CurrencyRelationships](docs/CurrencyRelationships.md)
 - [CurrencyResponse](docs/CurrencyResponse.md)
 - [DepositMethod](docs/DepositMethod.md)
 - [DepositMethodAttributes](docs/DepositMethodAttributes.md)
 - [DepositMethodProcessorData](docs/DepositMethodProcessorData.md)
 - [DepositMethodProcessorDataDataInner](docs/DepositMethodProcessorDataDataInner.md)
 - [DepositMethodProcessorDataLinks](docs/DepositMethodProcessorDataLinks.md)
 - [DepositMethodRelationships](docs/DepositMethodRelationships.md)
 - [DepositMethodResponse](docs/DepositMethodResponse.md)
 - [DepositMethodsResponse](docs/DepositMethodsResponse.md)
 - [Exchanger](docs/Exchanger.md)
 - [ExchangerAttributes](docs/ExchangerAttributes.md)
 - [ExchangerOrganization](docs/ExchangerOrganization.md)
 - [ExchangerOrganizationData](docs/ExchangerOrganizationData.md)
 - [ExchangerOrganizationLinks](docs/ExchangerOrganizationLinks.md)
 - [ExchangerRelationships](docs/ExchangerRelationships.md)
 - [ExchangerResponse](docs/ExchangerResponse.md)
 - [ExchangersResponse](docs/ExchangersResponse.md)
 - [MerchantIndustriesResponse](docs/MerchantIndustriesResponse.md)
 - [MerchantIndustry](docs/MerchantIndustry.md)
 - [MerchantIndustryAttributes](docs/MerchantIndustryAttributes.md)
 - [MerchantIndustryResponse](docs/MerchantIndustryResponse.md)
 - [Organization](docs/Organization.md)
 - [OrganizationActive](docs/OrganizationActive.md)
 - [OrganizationActiveLinks](docs/OrganizationActiveLinks.md)
 - [OrganizationAddress](docs/OrganizationAddress.md)
 - [OrganizationAttributes](docs/OrganizationAttributes.md)
 - [OrganizationAttributesIcon](docs/OrganizationAttributesIcon.md)
 - [OrganizationAttributesLogo](docs/OrganizationAttributesLogo.md)
 - [OrganizationContacts](docs/OrganizationContacts.md)
 - [OrganizationHq](docs/OrganizationHq.md)
 - [OrganizationHqData](docs/OrganizationHqData.md)
 - [OrganizationHqLinks](docs/OrganizationHqLinks.md)
 - [OrganizationRelationships](docs/OrganizationRelationships.md)
 - [OrganizationResponse](docs/OrganizationResponse.md)
 - [OrganizationSocial](docs/OrganizationSocial.md)
 - [OrganizationSource](docs/OrganizationSource.md)
 - [OrganizationSourceData](docs/OrganizationSourceData.md)
 - [OrganizationSourceLinks](docs/OrganizationSourceLinks.md)
 - [OrganizationsResponse](docs/OrganizationsResponse.md)
 - [PaymentMethod](docs/PaymentMethod.md)
 - [PaymentMethodAttributes](docs/PaymentMethodAttributes.md)
 - [PaymentMethodCurrencies](docs/PaymentMethodCurrencies.md)
 - [PaymentMethodCurrenciesLinks](docs/PaymentMethodCurrenciesLinks.md)
 - [PaymentMethodProcessor](docs/PaymentMethodProcessor.md)
 - [PaymentMethodProcessorData](docs/PaymentMethodProcessorData.md)
 - [PaymentMethodProcessorLinks](docs/PaymentMethodProcessorLinks.md)
 - [PaymentMethodRelationships](docs/PaymentMethodRelationships.md)
 - [PaymentMethodResponse](docs/PaymentMethodResponse.md)
 - [PaymentMethodsResponse](docs/PaymentMethodsResponse.md)
 - [PaymentProvider](docs/PaymentProvider.md)
 - [PaymentProviderAttributes](docs/PaymentProviderAttributes.md)
 - [PaymentProviderOrganization](docs/PaymentProviderOrganization.md)
 - [PaymentProviderOrganizationData](docs/PaymentProviderOrganizationData.md)
 - [PaymentProviderOrganizationLinks](docs/PaymentProviderOrganizationLinks.md)
 - [PaymentProviderPaymentMethods](docs/PaymentProviderPaymentMethods.md)
 - [PaymentProviderPaymentMethodsLinks](docs/PaymentProviderPaymentMethodsLinks.md)
 - [PaymentProviderRelationships](docs/PaymentProviderRelationships.md)
 - [PaymentProviderResponse](docs/PaymentProviderResponse.md)
 - [PaymentProvidersResponse](docs/PaymentProvidersResponse.md)
 - [ResponseLinks](docs/ResponseLinks.md)
 - [ResponseMeta](docs/ResponseMeta.md)
 - [SelfLinks](docs/SelfLinks.md)
 - [SupportedPspsRelationship](docs/SupportedPspsRelationship.md)
 - [SupportedPspsRelationshipDataInner](docs/SupportedPspsRelationshipDataInner.md)
 - [SupportedPspsRelationshipLinks](docs/SupportedPspsRelationshipLinks.md)


<a id="documentation-for-authorization"></a>
## Documentation For Authorization

Endpoints do not require authorization.


## Author




