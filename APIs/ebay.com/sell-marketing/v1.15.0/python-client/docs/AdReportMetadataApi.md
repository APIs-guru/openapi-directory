# openapi_client.AdReportMetadataApi

All URIs are relative to *https://api.ebay.com/sell/marketing/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_report_metadata**](AdReportMetadataApi.md#get_report_metadata) | **GET** /ad_report_metadata | 
[**get_report_metadata_for_report_type**](AdReportMetadataApi.md#get_report_metadata_for_report_type) | **GET** /ad_report_metadata/{report_type} | 


# **get_report_metadata**
> ReportMetadatas get_report_metadata()



This call retrieves information that details the fields used in each of the Promoted Listings reports. Use the returned information to configure the different types of Promoted Listings reports.</br></br>The request for this method does not use a payload or any URI parameters.<br/><br/><span class=\"tablenote\"><b>Note:</b> The reporting of some data related to sales and ad-fees may require a 72-hour (<b>maximum</b>) adjustment period which is often referred to as the <i>Reconciliation Period</i>. Such adjustment periods should, on average, be minimal. However, at any given time, the <b>payments</b> tab may be used to view those amounts that have actually been charged.</span>

### Example

* OAuth Authentication (api_auth):
* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.report_metadatas import ReportMetadatas
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/marketing/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/marketing/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdReportMetadataApi(api_client)

    try:
        api_response = api_instance.get_report_metadata()
        print("The response of AdReportMetadataApi->get_report_metadata:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdReportMetadataApi->get_report_metadata: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ReportMetadatas**](ReportMetadatas.md)

### Authorization

[api_auth](../README.md#api_auth), [api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_report_metadata_for_report_type**
> ReportMetadata get_report_metadata_for_report_type(report_type)



This call retrieves metadata that details the fields used by a specific Promoted Listings report type. Use the <b>report_type</b> path parameter to indicate metadata to retrieve.<br/><br/>This method does not use a request payload.<br/><br/><span class=\"tablenote\"><b>Note:</b> The reporting of some data related to sales and ad-fees may require a 72-hour (<b>maximum</b>) adjustment period which is often referred to as the <i>Reconciliation Period</i>. Such adjustment periods should, on average, be minimal. However, at any given time, the <b>payments</b> tab may be used to view those amounts that have actually been charged.</span>

### Example

* OAuth Authentication (api_auth):
* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.report_metadata import ReportMetadata
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/marketing/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/marketing/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdReportMetadataApi(api_client)
    report_type = 'report_type_example' # str | The name of the report type whose metadata you want to retrieve.<br /><br /><span class=\"tablenote\"><b>Tip:</b> For details about available report types and their descriptions, refer to the <a href=\"/api-docs/sell/marketing/types/plr:ReportTypeEnum\">ReportTypeEnum</a>.</span>

    try:
        api_response = api_instance.get_report_metadata_for_report_type(report_type)
        print("The response of AdReportMetadataApi->get_report_metadata_for_report_type:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdReportMetadataApi->get_report_metadata_for_report_type: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **report_type** | **str**| The name of the report type whose metadata you want to retrieve.&lt;br /&gt;&lt;br /&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Tip:&lt;/b&gt; For details about available report types and their descriptions, refer to the &lt;a href&#x3D;\&quot;/api-docs/sell/marketing/types/plr:ReportTypeEnum\&quot;&gt;ReportTypeEnum&lt;/a&gt;.&lt;/span&gt; | 

### Return type

[**ReportMetadata**](ReportMetadata.md)

### Authorization

[api_auth](../README.md#api_auth), [api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

