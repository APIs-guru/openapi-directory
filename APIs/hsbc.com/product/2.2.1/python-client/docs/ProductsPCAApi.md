# openapi_client.ProductsPCAApi

All URIs are relative to *https://dikpeqbnwi3kx.cloudfront.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**open_banking_v22_personal_current_accounts_get**](ProductsPCAApi.md#open_banking_v22_personal_current_accounts_get) | **GET** /open-banking/v2.2/personal-current-accounts | 
[**x_open_banking_v22_personal_current_accounts_segment_segment_get**](ProductsPCAApi.md#x_open_banking_v22_personal_current_accounts_segment_segment_get) | **GET** /x-open-banking/v2.2/personal-current-accounts/segment/{segment} | 


# **open_banking_v22_personal_current_accounts_get**
> PCADefinitionMeta open_banking_v22_personal_current_accounts_get()



This API will return data about all PCA products and is prepared to the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 2.2. It is regulated by the UK Competition and Markets Authority (CMA). Data is only available for the United Kingdom.

### Example


```python
import openapi_client
from openapi_client.models.pca_definition_meta import PCADefinitionMeta
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dikpeqbnwi3kx.cloudfront.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dikpeqbnwi3kx.cloudfront.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductsPCAApi(api_client)

    try:
        api_response = api_instance.open_banking_v22_personal_current_accounts_get()
        print("The response of ProductsPCAApi->open_banking_v22_personal_current_accounts_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsPCAApi->open_banking_v22_personal_current_accounts_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**PCADefinitionMeta**](PCADefinitionMeta.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/prs.openbanking.opendata.v2.2+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad request |  -  |
**408** | Bad request |  -  |
**429** | Bad request |  -  |
**500** | System error |  -  |
**503** | System error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **x_open_banking_v22_personal_current_accounts_segment_segment_get**
> PCADefinitionMeta x_open_banking_v22_personal_current_accounts_segment_segment_get(segment)



This extended API will return data about all PCA products for the specified segment. It is based-on the Open Banking standards as defined by the Open Banking Implementation Entity (OBIE) in data dictionary version 2.2. The extended functionality may not fully adhere to the non-functional requirements of the regulator. Data is only available for the United Kingdom.

### Example


```python
import openapi_client
from openapi_client.models.pca_definition_meta import PCADefinitionMeta
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://dikpeqbnwi3kx.cloudfront.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://dikpeqbnwi3kx.cloudfront.net"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductsPCAApi(api_client)
    segment = 'segment_example' # str | Segment name from this list&#58; &quot;Basic&quot;, &quot;General&quot;, &quot;Graduate&quot;, &quot;Packaged&quot;, &quot;Premium&quot;, &quot;Reward&quot;, &quot;Student&quot;, &quot;YoungAdult&quot;, &quot;Youth&quot;.

    try:
        api_response = api_instance.x_open_banking_v22_personal_current_accounts_segment_segment_get(segment)
        print("The response of ProductsPCAApi->x_open_banking_v22_personal_current_accounts_segment_segment_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsPCAApi->x_open_banking_v22_personal_current_accounts_segment_segment_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **segment** | **str**| Segment name from this list&amp;#58; &amp;quot;Basic&amp;quot;, &amp;quot;General&amp;quot;, &amp;quot;Graduate&amp;quot;, &amp;quot;Packaged&amp;quot;, &amp;quot;Premium&amp;quot;, &amp;quot;Reward&amp;quot;, &amp;quot;Student&amp;quot;, &amp;quot;YoungAdult&amp;quot;, &amp;quot;Youth&amp;quot;. | 

### Return type

[**PCADefinitionMeta**](PCADefinitionMeta.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/prs.openbanking.opendata.v2.2+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad request |  -  |
**408** | Bad request |  -  |
**429** | Bad request |  -  |
**500** | System error |  -  |
**503** | System error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

