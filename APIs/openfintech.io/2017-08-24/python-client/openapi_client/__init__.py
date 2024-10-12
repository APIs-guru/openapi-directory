# coding: utf-8

# flake8: noqa

"""
    OpenFinTech.io

    # Introduction [OpenFinTech.io](https://openfintech.io) is an open database that comprises of standardized primary data for FinTech industry.<br> It contains such information as geolocation data (countries, cities, regions), organizations, currencies (national, digital, virtual, crypto), banks, digital exchangers, payment providers (PSP), payment methods, etc.<br> It is created for communication of cross-integrated micro-services on \"one language\". This is achieved through standardization of entity identifiers that are used to exchange information among different services.<br>  ### UML UML Domain Model diagram you can find [here](https://api.openfintech.io/public_domain_model.png).<br>  ### Persistence Entities are updated not more than 1 time per day.<br>  ### Terms and Conditions This *OpenFinTech.io* is made available under the [Open Database License](http://opendatacommons.org/licenses/odbl/1.0/).<br> Any rights in individual contents of the database are licensed under the [Database Contents License](http://opendatacommons.org/licenses/dbcl/1.0/).<br>  ### Contacts For any questions, please email - info@openfintech.io<br> Or you can contact us at <a href=\"https://gitter.im/paymaxicom/openfintech.io\">Gitter</a><br>  Powered by [Paymaxi](https://www.paymaxi.com)  # Get Started  If you use [POSTMAN](https://www.getpostman.com) or similar program which can operate with swagger`s files - just [download](https://docs.openfintech.io) our spec and [import it](https://www.getpostman.com/docs/importing_swagger). Also you can try live [API demo](https://api.openfintech.io).  ## Overview  The OpenFinTech API is organized around [REST](https://en.wikipedia.org/wiki/Representational_state_transfer). Our API has predictable, resource-oriented URLs, and uses HTTP response codes to indicate API errors.<br> API is based on [JSON API](http://jsonapi.org) standard. JSON is returned by all API responses, including errors, although our API libraries convert responses to appropriate language-specific objects.<br> JSON API requires use of the JSON API media type (`application/vnd.api+json`) for exchanging data.<br> ### Additional Request Headers #### ACCEPT HEADER Your requests should always include the header: ```curl Accept: application/vnd.api+json ```  ## Authentication  To use OpenFinTech API no needed authorization.  ## Versioning  When we make changes to the API, we release new, dated versions. The current version is **2017-08-24**. Read our [API upgrades guide]() to see our API changelog and to learn more about backwards compatibility.  ## Pagination  OpenFinTech APIs to retrieve lists of banks, currencies and other resources - paginated to **100** items by default. The pagination information will be included in the list API response under the node name `meta` - contains information about listed objects [`total` - contains information about total count of listed objects, `pages` - count of pages], `links` - contain links to navigate between pages [`first` - link to first page, `prev` - link to previous page, `next` - link to next page, `last` - link to last page].<br> By default first page will be listed. For navigating through pages, use the page parameter (e.g. `page[number]`, `page[size]`).<br> The `page[size]` parameter can be used to set the number of records that you want to receive in the response.<br> The `page[number]` parameter can be used to set needed page number.<br> Example of response: ```json {   \"meta\": {     \"total\": 419,     \"pages\": 42   },   \"links\": {     \"first\": \"/v1/{path}?page[number]=1&page[size]=10\",     \"prev\": \"/v1/{path}?page[number]=39&page[size]=10\",     \"next\": \"/v1/{path}?page[number]=41&page[size]=10\",     \"last\": \"/v1/{path}?page[number]=42&page[size]=10\"   } ```  ### Sorting  OpenFinTech\\`s API supported query parameter to sort result collection [e.g. `?sort=code`]. Information about available parameters may be found in the endpoint description. Positive parameter [e.g. `?sort=code`] points to ascending sorting, negative  [e.g. `?sort=-code`] - to descending sorting. Also, supported multiple sorting parameters [e.g. `?sort=code, -name, id`, etc.] ```curl https://api.openfintech.io/v1/countries?sort=name,-area ```  ### Filtering  Filtering provided by unique query key `filter[*filtering_condition*]`. Information about available parameters may be found in the endpoint description. ```curl https://api.openfintech.io/v1/countries?filter[region]=europe ```  ## Images  OpenFinTech provides two types of images: icons and logos. To get one of those types you should to use next url pattern: ``` curl https://api.openfintech.io/v1/{path}/{id}/{icon/logo} ``` Also, images can be resized by adding next parameters: `h={height}&w={width}`. For example, you want to get organization icon with width equals to 20 pixels: ``` curl https://api.openfintech.io/v1/organizations/{id}/icon?w=20&h=20 ``` If argument height or width is missing API returns original image with real sizes.  ## Errors  API uses conventional HTTP response codes to indicate the success or failure of an API request. In general, codes in the `2xx` range indicate success, codes in the `4xx` range indicate an error that failed given the information provided (e.g., a required parameter was omitted, etc.), and codes in the `5xx` range indicate an error with OpenFinTech's servers (these are rare).  | Code | Description | |------|-------------| | 200 - OK | Everything worked as expected. | | 400 - Bad Request | The request was unacceptable, often due to missing a required parameter. | | 401 - Unauthorized | No valid API key provided. | | 402 - Request Failed | The parameters were valid but the request failed. | | 404 - Not Found | The requested resource doesn't exist. | | 409 - Conflict | The request conflicts with another request (perhaps due to using the same idempotent key). | | 429 - Too Many Requests | Too many requests hit the API too quickly. We recommend an exponential backoff of your requests. | | 500, 502, 503, 504 - Server Errors | Something went wrong on OpenFinTech's end. (These are rare.) | 

    The version of the OpenAPI document: 2017-08-24
    Generated by OpenAPI Generator (https://openapi-generator.tech)

    Do not edit the class manually.
"""  # noqa: E501


__version__ = "1.0.0"

# import apis into sdk package
from openapi_client.api.banks_api import BanksApi
from openapi_client.api.countries_api import CountriesApi
from openapi_client.api.currencies_api import CurrenciesApi
from openapi_client.api.deposit_methods_api import DepositMethodsApi
from openapi_client.api.exchangers_api import ExchangersApi
from openapi_client.api.merchant_industries_api import MerchantIndustriesApi
from openapi_client.api.organizations_api import OrganizationsApi
from openapi_client.api.payment_methods_api import PaymentMethodsApi
from openapi_client.api.payment_providers_api import PaymentProvidersApi

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
from openapi_client.models.active_in_countries_relationship import ActiveInCountriesRelationship
from openapi_client.models.active_in_countries_relationship_data_inner import ActiveInCountriesRelationshipDataInner
from openapi_client.models.active_in_countries_relationship_links import ActiveInCountriesRelationshipLinks
from openapi_client.models.bank import Bank
from openapi_client.models.bank_attributes import BankAttributes
from openapi_client.models.bank_organization import BankOrganization
from openapi_client.models.bank_organization_data import BankOrganizationData
from openapi_client.models.bank_organization_links import BankOrganizationLinks
from openapi_client.models.bank_relationships import BankRelationships
from openapi_client.models.bank_response import BankResponse
from openapi_client.models.banks_response import BanksResponse
from openapi_client.models.countries_response import CountriesResponse
from openapi_client.models.country import Country
from openapi_client.models.country_attributes import CountryAttributes
from openapi_client.models.country_relationships import CountryRelationships
from openapi_client.models.country_response import CountryResponse
from openapi_client.models.country_translations import CountryTranslations
from openapi_client.models.country_translations_links import CountryTranslationsLinks
from openapi_client.models.currencies_response import CurrenciesResponse
from openapi_client.models.currency import Currency
from openapi_client.models.currency_attributes import CurrencyAttributes
from openapi_client.models.currency_attributes_icon import CurrencyAttributesIcon
from openapi_client.models.currency_countries import CurrencyCountries
from openapi_client.models.currency_country_links import CurrencyCountryLinks
from openapi_client.models.currency_issuer import CurrencyIssuer
from openapi_client.models.currency_issuer_links import CurrencyIssuerLinks
from openapi_client.models.currency_issuer_organization import CurrencyIssuerOrganization
from openapi_client.models.currency_issuer_organization_data import CurrencyIssuerOrganizationData
from openapi_client.models.currency_issuer_organization_links import CurrencyIssuerOrganizationLinks
from openapi_client.models.currency_issuert_data import CurrencyIssuertData
from openapi_client.models.currency_parent import CurrencyParent
from openapi_client.models.currency_parent_data import CurrencyParentData
from openapi_client.models.currency_parent_links import CurrencyParentLinks
from openapi_client.models.currency_relationships import CurrencyRelationships
from openapi_client.models.currency_response import CurrencyResponse
from openapi_client.models.deposit_method import DepositMethod
from openapi_client.models.deposit_method_attributes import DepositMethodAttributes
from openapi_client.models.deposit_method_processor_data import DepositMethodProcessorData
from openapi_client.models.deposit_method_processor_data_data_inner import DepositMethodProcessorDataDataInner
from openapi_client.models.deposit_method_processor_data_links import DepositMethodProcessorDataLinks
from openapi_client.models.deposit_method_relationships import DepositMethodRelationships
from openapi_client.models.deposit_method_response import DepositMethodResponse
from openapi_client.models.deposit_methods_response import DepositMethodsResponse
from openapi_client.models.exchanger import Exchanger
from openapi_client.models.exchanger_attributes import ExchangerAttributes
from openapi_client.models.exchanger_organization import ExchangerOrganization
from openapi_client.models.exchanger_organization_data import ExchangerOrganizationData
from openapi_client.models.exchanger_organization_links import ExchangerOrganizationLinks
from openapi_client.models.exchanger_relationships import ExchangerRelationships
from openapi_client.models.exchanger_response import ExchangerResponse
from openapi_client.models.exchangers_response import ExchangersResponse
from openapi_client.models.merchant_industries_response import MerchantIndustriesResponse
from openapi_client.models.merchant_industry import MerchantIndustry
from openapi_client.models.merchant_industry_attributes import MerchantIndustryAttributes
from openapi_client.models.merchant_industry_response import MerchantIndustryResponse
from openapi_client.models.organization import Organization
from openapi_client.models.organization_active import OrganizationActive
from openapi_client.models.organization_active_links import OrganizationActiveLinks
from openapi_client.models.organization_address import OrganizationAddress
from openapi_client.models.organization_attributes import OrganizationAttributes
from openapi_client.models.organization_attributes_icon import OrganizationAttributesIcon
from openapi_client.models.organization_attributes_logo import OrganizationAttributesLogo
from openapi_client.models.organization_contacts import OrganizationContacts
from openapi_client.models.organization_hq import OrganizationHq
from openapi_client.models.organization_hq_data import OrganizationHqData
from openapi_client.models.organization_hq_links import OrganizationHqLinks
from openapi_client.models.organization_relationships import OrganizationRelationships
from openapi_client.models.organization_response import OrganizationResponse
from openapi_client.models.organization_social import OrganizationSocial
from openapi_client.models.organization_source import OrganizationSource
from openapi_client.models.organization_source_data import OrganizationSourceData
from openapi_client.models.organization_source_links import OrganizationSourceLinks
from openapi_client.models.organizations_response import OrganizationsResponse
from openapi_client.models.payment_method import PaymentMethod
from openapi_client.models.payment_method_attributes import PaymentMethodAttributes
from openapi_client.models.payment_method_currencies import PaymentMethodCurrencies
from openapi_client.models.payment_method_currencies_links import PaymentMethodCurrenciesLinks
from openapi_client.models.payment_method_processor import PaymentMethodProcessor
from openapi_client.models.payment_method_processor_data import PaymentMethodProcessorData
from openapi_client.models.payment_method_processor_links import PaymentMethodProcessorLinks
from openapi_client.models.payment_method_relationships import PaymentMethodRelationships
from openapi_client.models.payment_method_response import PaymentMethodResponse
from openapi_client.models.payment_methods_response import PaymentMethodsResponse
from openapi_client.models.payment_provider import PaymentProvider
from openapi_client.models.payment_provider_attributes import PaymentProviderAttributes
from openapi_client.models.payment_provider_organization import PaymentProviderOrganization
from openapi_client.models.payment_provider_organization_data import PaymentProviderOrganizationData
from openapi_client.models.payment_provider_organization_links import PaymentProviderOrganizationLinks
from openapi_client.models.payment_provider_payment_methods import PaymentProviderPaymentMethods
from openapi_client.models.payment_provider_payment_methods_links import PaymentProviderPaymentMethodsLinks
from openapi_client.models.payment_provider_relationships import PaymentProviderRelationships
from openapi_client.models.payment_provider_response import PaymentProviderResponse
from openapi_client.models.payment_providers_response import PaymentProvidersResponse
from openapi_client.models.response_links import ResponseLinks
from openapi_client.models.response_meta import ResponseMeta
from openapi_client.models.self_links import SelfLinks
from openapi_client.models.supported_psps_relationship import SupportedPspsRelationship
from openapi_client.models.supported_psps_relationship_data_inner import SupportedPspsRelationshipDataInner
from openapi_client.models.supported_psps_relationship_links import SupportedPspsRelationshipLinks
