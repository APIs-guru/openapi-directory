# coding: utf-8

# flake8: noqa

"""
    API Reference - Ideal Postcodes

    # Getting Started  ## Overview  ### Access  All API methods are either a `GET`, `POST` or `OPTIONS` request.  The API communicates over both HTTPS and plain HTTP using IPv4 and IPv6.  We recommend using HTTPS only although HTTP is available.  We use appropriate HTTP status codes where possible to indicate the request status.  ### Rate Limiting  Each IP address is rate limited at 30 requests per second. Tripping the rate limit will result in a 503 response.  The autocomplete API also has an additional rate limit.  If you expect to breach the limit please contact us and we can move you to an endpoint with a higher limit.  ### JSONP  [JSONP](http://en.wikipedia.org/wiki/JSONP) requests are supported. Include a `callback=` in your request as a query parameter. Your results return wrapped in a function designated by your request.  ## Authentication  Most requests require an **API key** for authentication. Authenticate by passing an `api_key` as part of the query string. For example:  ``` api.ideal-postcodes.co.uk/v1/autocomplete/addresses?api_key=iddqd&q=parkside ```  Alternatively, authentication can be transmitted via the `Authorization` header using the following scheme:  ``` Authorization: api_key=\"iddqd\" [other_key=\"foo\"] ```  ## Versioning  This API is versioned with a simple prefix in the URL. The current version is `/v1/`. We will maintain backwards-compatibility by releasing breaking changes under a new version.  Please note that the following changes are backwards-compatible:  - Adding new properties to existing API responses - Adding new API endpoints - Adding new optional request parameters to existing API endpoints - Changing the order of properties in existing API responses - Changing the autocomplete address suggestion format  ## Error Handling  A successful lookup is accompanied with a HTTP status code of 200 and a response code of 2000 (found in the body).  An error has occurred if the HTTP status code is not 200. Errors can range from a benign 404 (resource not found) to more urgent errors (your API Key ran out of credit, failed authentication, etc).  ## Testing  Each new account comes with a free test balance. Contact us if you need more for testing and integration.  ### Community Key  Our documentation and demos make heavy use of our community key `iddqd`. This allows for convenient access for trialing the API.  Many restrictions on this key are relaxed to allow developers make test requests. This key has a limit of 15 lookups per IP address per day as well as a daily usage cap. If you hit any limit restrictions, you can continue testing the API by creating a key of your own and using our free test methods.  Please be kind with the community key. We're trusting everyone to use it responsibly so that other developers may trial the API. Thank you!  ## Metadata  Requests that affect your balance may be annotated with arbitrary metadata. This data is stored along with your lookup history and can be queried at a later date via the API or the dashboard. We call the ability to label your requests [tagging](https://docs.ideal-postcodes.co.uk/docs/guides/tags).  # Response Codes  The API returns two indicators to help you to determine the status of each HTTP request.  The first is the **HTTP Status**, which is found in the status-line of all HTTP requests. The API will return status codes that adhere to HTTP /1.1 Specifications wherever possible.  `2XX` status codes indicates success while `4XX` and `5XX` indicate client and server errors respectively.  The second is the **API response code**, which can be found in the `code` property of the response body. This code will provide a more specific reason if a failure has occurred and can point you in the right direction when debugging.  Please use the glossary of code numbers and HTTP status codes below when debugging your requests.  ## 200 Request Success  | HTTP Code | API Code | Description                                  | | --------- | -------- | -------------------------------------------- | | 200       | 2000     | Success. Request was completed successfully. |  ## 400 Bad Request  The request could not be understood due to some input error.  | HTTP Code | API Code | Description                                                                                                                           | | --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------- | | 400       | 4000     | Invalid syntax submitted. Some part of your request was malformed or did not match our specifications.                                | | 400       | 4001     | Validation failed on your submitted data. Some of the data you provided did not meet our validation requirements, e.g. string length. | | 400       | 4005     | Invalid start date. Please ensure start dates are provided as a UTC Timestamp in milliseconds.                                        | | 400       | 4006     | Invalid end date. Please ensure end dates are provided as a UTC Timestamp in milliseconds.                                            | | 400       | 4007     | Invalid date range. Check if your start and end dates are in the right order.                                                         | | 400       | 4008     | Invalid date range. Check that your date range is 90 days or less.                                                                    | | 400       | 4009     | Too many tags. Please specify no more than 3 tags to query.                                                                           |  ## 401 Unauthorised  Authorization credentials are not valid.  | HTTP Code | API Code | Description                                                                                                                                                        | | --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | | 401       | 4010     | Invalid Key. The `api_key` you provided is not valid.                                                                                                              | | 401       | 4011     | Requesting URL not on whitelist. The cross domain request is not coming from a whitelisted URL. You can update or disable your allowed URLs via your Key settings. | | 401       | 4012     | Failed user authentication. Invalid `user_token` presented.                                                                                                        | | 401       | 4013     | Licensee Key is required. Sublicensed keys require you need to present licensee credentials via the `licensee` parameter.                                          |  ## 402 Request Failed  Your request is well-formed but are not able to complete your request for another reason.  | HTTP Code | API Code | Description                                                                                                                                                                                                                                                        | | --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | | 402       | 4020     | Key balance depleted. You're out of lookups on your API Key.                                                                                                                                                                                                       | | 402       | 4021     | Limit reached. One of your lookup limits has been breached for today. This could either be your total daily limit on your key or the individual IP limit. You can either wait for for the limit to reset (after a day) or manually disable or increase your limit. |  ## 404 Resource Not Found  The resource you requested does not exist.  | HTTP Code | API Code | Description                                                                                   | | --------- | -------- | --------------------------------------------------------------------------------------------- | | 404       | 4040     | Postcode not found. The postcode you have submitted does not exist.                           | | 404       | 4041     | User not found. Your user could not be identified given the credentials you presented.        | | 404       | 4042     | Key not found. Your key could not be identified given the credentials you presented.          | | 404       | 4044     | No UDPRN found. No address is associated with the UDPRN queried                               | | 404       | 4045     | No licensee found. Your licensee could not be identified given the credentials you presented. | | 404       | 4046     | No UMPRN found. No Multiple Residence premise is associated with the UMPRN queried.           |  ## 500 Server Error  A error occurred on our server.  | HTTP Code | API Code | Description                                                                                                                                                        | | --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | | 500       | 5000     | An error occurred on our end. These errors are logged and queued so we can understand what went wrong. However, if you need speedy resolution please email support | | 500       | 5001     | Akin to 5000.                                                                                                                                                      | | 500       | 5002     | The server took too long to process on our end, so we aborted the request. You may retry the request.                                                              | 

    The version of the OpenAPI document: 3.7.0
    Contact: support@ideal-postcodes.co.uk
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


__version__ = "1.0.0"

# import apis into sdk package
from openapi_client.api.address_search_api import AddressSearchApi
from openapi_client.api.configs_api import ConfigsApi
from openapi_client.api.emails_api import EmailsApi
from openapi_client.api.keys_api import KeysApi
from openapi_client.api.licensees_api import LicenseesApi
from openapi_client.api.phone_numbers_api import PhoneNumbersApi
from openapi_client.api.place_search_api import PlaceSearchApi
from openapi_client.api.uk_api import UKApi

# import ApiClient
from openapi_client.api_response import ApiResponse
from openapi_client.api_client import ApiClient
from openapi_client.configuration import Configuration
from openapi_client.exceptions import OpenApiException
from openapi_client.exceptions import ApiTypeError
from openapi_client.exceptions import ApiValueError
from openapi_client.exceptions import ApiKeyError
from openapi_client.exceptions import ApiAttributeError
from openapi_client.exceptions import ApiException

# import models into sdk package
from openapi_client.models.ab_address import AbAddress
from openapi_client.models.address_base_core import AddressBaseCore
from openapi_client.models.address_cleanse_request import AddressCleanseRequest
from openapi_client.models.address_response import AddressResponse
from openapi_client.models.address_response_result import AddressResponseResult
from openapi_client.models.address_response_result_hits_inner import AddressResponseResultHitsInner
from openapi_client.models.address_suggestion import AddressSuggestion
from openapi_client.models.api_key import ApiKey
from openapi_client.models.api_key_automated_topup import ApiKeyAutomatedTopup
from openapi_client.models.api_key_context import ApiKeyContext
from openapi_client.models.api_key_current_purchase import ApiKeyCurrentPurchase
from openapi_client.models.api_key_daily_limit import ApiKeyDailyLimit
from openapi_client.models.api_key_datasets import ApiKeyDatasets
from openapi_client.models.api_key_details import ApiKeyDetails
from openapi_client.models.api_key_details_response import ApiKeyDetailsResponse
from openapi_client.models.api_key_individual_limit import ApiKeyIndividualLimit
from openapi_client.models.api_key_notifications import ApiKeyNotifications
from openapi_client.models.api_key_response import ApiKeyResponse
from openapi_client.models.api_key_usage_response import ApiKeyUsageResponse
from openapi_client.models.autocomplete_response import AutocompleteResponse
from openapi_client.models.autocomplete_response_result import AutocompleteResponseResult
from openapi_client.models.autocomplete_response_result_hits_inner import AutocompleteResponseResultHitsInner
from openapi_client.models.available_contexts_inner import AvailableContextsInner
from openapi_client.models.bad_request_response import BadRequestResponse
from openapi_client.models.bad_request_response_all_of_errors import BadRequestResponseAllOfErrors
from openapi_client.models.base_alternate_code import BaseAlternateCode
from openapi_client.models.bias_ip_param import BiasIpParam
from openapi_client.models.carrier import Carrier
from openapi_client.models.city_state_name_facility_code import CityStateNameFacilityCode
from openapi_client.models.cleanse_response import CleanseResponse
from openapi_client.models.cleanse_response_result import CleanseResponseResult
from openapi_client.models.config import Config
from openapi_client.models.config_delete_response import ConfigDeleteResponse
from openapi_client.models.config_delete_response_result import ConfigDeleteResponseResult
from openapi_client.models.config_new_param import ConfigNewParam
from openapi_client.models.config_response import ConfigResponse
from openapi_client.models.config_update_param import ConfigUpdateParam
from openapi_client.models.configs_response import ConfigsResponse
from openapi_client.models.configs_response_result import ConfigsResponseResult
from openapi_client.models.congressional_district_number import CongressionalDistrictNumber
from openapi_client.models.country import Country
from openapi_client.models.country_iso import CountryISO
from openapi_client.models.country_iso2 import CountryISO2
from openapi_client.models.county_number import CountyNumber
from openapi_client.models.dataset import Dataset
from openapi_client.models.eastings import Eastings
from openapi_client.models.ecad_address import EcadAddress
from openapi_client.models.ecaf_address import EcafAddress
from openapi_client.models.eirc_base import EircBase
from openapi_client.models.email import Email
from openapi_client.models.email_response import EmailResponse
from openapi_client.models.email_response_result import EmailResponseResult
from openapi_client.models.error_response import ErrorResponse
from openapi_client.models.finance_number import FinanceNumber
from openapi_client.models.gbr_cleanse_match import GbrCleanseMatch
from openapi_client.models.gbr_cleanse_match_match import GbrCleanseMatchMatch
from openapi_client.models.gbr_cleanse_no_match import GbrCleanseNoMatch
from openapi_client.models.gbr_global_address import GbrGlobalAddress
from openapi_client.models.gbr_global_address_native import GbrGlobalAddressNative
from openapi_client.models.gbr_resolve_address_response import GbrResolveAddressResponse
from openapi_client.models.gbr_resolve_address_response_result import GbrResolveAddressResponseResult
from openapi_client.models.geonames_place import GeonamesPlace
from openapi_client.models.geonames_place_all_of_alternatenames import GeonamesPlaceAllOfAlternatenames
from openapi_client.models.geonames_place_all_of_cc2 import GeonamesPlaceAllOfCc2
from openapi_client.models.government_building_indicator import GovernmentBuildingIndicator
from openapi_client.models.invalid_phone_number import InvalidPhoneNumber
from openapi_client.models.key_usage_result import KeyUsageResult
from openapi_client.models.key_usage_result_daily_count_inner import KeyUsageResultDailyCountInner
from openapi_client.models.lacs_status_indicator import LacsStatusIndicator
from openapi_client.models.language import Language
from openapi_client.models.latitude import Latitude
from openapi_client.models.licensee import Licensee
from openapi_client.models.licensee_all_of_daily import LicenseeAllOfDaily
from openapi_client.models.licensee_delete_response import LicenseeDeleteResponse
from openapi_client.models.licensee_editable import LicenseeEditable
from openapi_client.models.licensee_editable_daily import LicenseeEditableDaily
from openapi_client.models.licensee_response import LicenseeResponse
from openapi_client.models.licensees_response import LicenseesResponse
from openapi_client.models.licensees_response_result import LicenseesResponseResult
from openapi_client.models.longitude import Longitude
from openapi_client.models.mr_address import MrAddress
from openapi_client.models.no_context import NoContext
from openapi_client.models.northings import Northings
from openapi_client.models.not_found_response import NotFoundResponse
from openapi_client.models.nyb_address import NybAddress
from openapi_client.models.paf_address import PafAddress
from openapi_client.models.paf_alias_address import PafAliasAddress
from openapi_client.models.paf_base import PafBase
from openapi_client.models.paf_postcode_type import PafPostcodeType
from openapi_client.models.paf_umprn import PafUmprn
from openapi_client.models.phone_number import PhoneNumber
from openapi_client.models.phone_number_response import PhoneNumberResponse
from openapi_client.models.phone_number_response_result import PhoneNumberResponseResult
from openapi_client.models.place import Place
from openapi_client.models.place_native import PlaceNative
from openapi_client.models.place_response import PlaceResponse
from openapi_client.models.place_response_result import PlaceResponseResult
from openapi_client.models.place_response_result_hits_inner import PlaceResponseResultHitsInner
from openapi_client.models.place_suggestion import PlaceSuggestion
from openapi_client.models.postcode_not_found_response import PostcodeNotFoundResponse
from openapi_client.models.postcode_response import PostcodeResponse
from openapi_client.models.postcode_response_result_inner import PostcodeResponseResultInner
from openapi_client.models.rate_limited_response import RateLimitedResponse
from openapi_client.models.record_type_code import RecordTypeCode
from openapi_client.models.resolve_place_response import ResolvePlaceResponse
from openapi_client.models.resolve_place_response_result import ResolvePlaceResponseResult
from openapi_client.models.udprn_response import UDPRNResponse
from openapi_client.models.udprn_response_result import UDPRNResponseResult
from openapi_client.models.umprn_response import UMPRNResponse
from openapi_client.models.umprn_response_result import UMPRNResponseResult
from openapi_client.models.uk_address_suggestion import UkAddressSuggestion
from openapi_client.models.uk_address_suggestion_urls import UkAddressSuggestionUrls
from openapi_client.models.unauthorized_response import UnauthorizedResponse
from openapi_client.models.unknown_email import UnknownEmail
from openapi_client.models.usa_global_address import UsaGlobalAddress
from openapi_client.models.usa_global_address_native import UsaGlobalAddressNative
from openapi_client.models.usa_resolve_address_response import UsaResolveAddressResponse
from openapi_client.models.usa_resolve_address_response_result import UsaResolveAddressResponseResult
from openapi_client.models.usps_address import UspsAddress
from openapi_client.models.usps_country import UspsCountry
from openapi_client.models.usps_country_iso import UspsCountryIso
from openapi_client.models.usps_country_iso2 import UspsCountryIso2
from openapi_client.models.usps_dataset import UspsDataset
from openapi_client.models.usps_language import UspsLanguage
from openapi_client.models.welsh_paf_address import WelshPafAddress
from openapi_client.models.zip_classification_code import ZipClassificationCode
