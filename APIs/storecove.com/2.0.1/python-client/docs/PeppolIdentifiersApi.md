# openapi_client.PeppolIdentifiersApi

All URIs are relative to *https://api.storecove.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_peppol_identifier**](PeppolIdentifiersApi.md#create_peppol_identifier) | **POST** /legal_entities/{legal_entity_id}/peppol_identifiers | Create a new PeppolIdentifier
[**delete_peppol_identifier**](PeppolIdentifiersApi.md#delete_peppol_identifier) | **DELETE** /legal_entities/{legal_entity_id}/peppol_identifiers/{superscheme}/{scheme}/{identifier} | Delete PeppolIdentifier


# **create_peppol_identifier**
> PeppolIdentifier create_peppol_identifier(legal_entity_id, peppol_identifier_create)

Create a new PeppolIdentifier

Create a brand new new PeppolIdentifier. For <<_sg_singapore>>, special rules apply.

### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.peppol_identifier import PeppolIdentifier
from openapi_client.models.peppol_identifier_create import PeppolIdentifierCreate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.storecove.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.storecove.com/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PeppolIdentifiersApi(api_client)
    legal_entity_id = 56 # int | The id of the LegalEntity for which to create the PeppolIdentifier
    peppol_identifier_create = openapi_client.PeppolIdentifierCreate() # PeppolIdentifierCreate | PeppolIdentifier to create

    try:
        # Create a new PeppolIdentifier
        api_response = api_instance.create_peppol_identifier(legal_entity_id, peppol_identifier_create)
        print("The response of PeppolIdentifiersApi->create_peppol_identifier:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PeppolIdentifiersApi->create_peppol_identifier: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **legal_entity_id** | **int**| The id of the LegalEntity for which to create the PeppolIdentifier | 
 **peppol_identifier_create** | [**PeppolIdentifierCreate**](PeppolIdentifierCreate.md)| PeppolIdentifier to create | 

### Return type

[**PeppolIdentifier**](PeppolIdentifier.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_peppol_identifier**
> delete_peppol_identifier(legal_entity_id, superscheme, scheme, identifier)

Delete PeppolIdentifier

Delete a PeppolIdentifier.

### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.storecove.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.storecove.com/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PeppolIdentifiersApi(api_client)
    legal_entity_id = 56 # int | The id of the LegalEntity this PeppolIdentifier belongs to
    superscheme = 'superscheme_example' # str | The superscheme of the identifier. Should always be \"iso6523-actorid-upis\".
    scheme = 'scheme_example' # str | PEPPOL identifier scheme id, e.g. \"DE:VAT\". For a full list see <<_receiver_identifiers_list>>.
    identifier = 'identifier_example' # str | PEPPOL identifier

    try:
        # Delete PeppolIdentifier
        api_instance.delete_peppol_identifier(legal_entity_id, superscheme, scheme, identifier)
    except Exception as e:
        print("Exception when calling PeppolIdentifiersApi->delete_peppol_identifier: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **legal_entity_id** | **int**| The id of the LegalEntity this PeppolIdentifier belongs to | 
 **superscheme** | **str**| The superscheme of the identifier. Should always be \&quot;iso6523-actorid-upis\&quot;. | 
 **scheme** | **str**| PEPPOL identifier scheme id, e.g. \&quot;DE:VAT\&quot;. For a full list see &lt;&lt;_receiver_identifiers_list&gt;&gt;. | 
 **identifier** | **str**| PEPPOL identifier | 

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

