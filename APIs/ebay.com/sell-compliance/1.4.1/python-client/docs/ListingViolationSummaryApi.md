# openapi_client.ListingViolationSummaryApi

All URIs are relative to *https://api.ebay.com/sell/compliance/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_listing_violations_summary**](ListingViolationSummaryApi.md#get_listing_violations_summary) | **GET** /listing_violation_summary | 


# **get_listing_violations_summary**
> ComplianceSummary get_listing_violations_summary(x_ebay_c_marketplace_id=x_ebay_c_marketplace_id, compliance_type=compliance_type)



This call returns listing violation counts for a seller. A user can pass in one or more compliance types through the compliance_type query parameter. See ComplianceTypeEnum for more information on the supported listing compliance types. Listing violations are returned for multiple marketplaces if the seller sells on multiple eBay marketplaces. Note: Only a canned response, with counts for all listing compliance types, is returned in the Sandbox environment. Due to this limitation, the compliance_type query parameter (if used) will not have an effect on the response.

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.compliance_summary import ComplianceSummary
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/compliance/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/compliance/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ListingViolationSummaryApi(api_client)
    x_ebay_c_marketplace_id = 'x_ebay_c_marketplace_id_example' # str | Use this header to specify the eBay marketplace identifier. Supported values for this header can be found in the MarketplaceIdEnum type definition. Note that Version 1.4.0 of the Compliance API is only supported on the US, UK, Australia, Canada {English), and Germany sites. (optional)
    compliance_type = 'compliance_type_example' # str | A user passes in one or more compliance type values through this query parameter. See ComplianceTypeEnum for more information on the supported compliance types that can be passed in here. If more than one compliance type value is used, delimit these values with a comma. If no compliance type values are passed in, the listing count for all compliance types will be returned. Note: Only a canned response, with counts for all listing compliance types, is returned in the Sandbox environment. Due to this limitation, the compliance_type query parameter (if used) will not have an effect on the response. (optional)

    try:
        api_response = api_instance.get_listing_violations_summary(x_ebay_c_marketplace_id=x_ebay_c_marketplace_id, compliance_type=compliance_type)
        print("The response of ListingViolationSummaryApi->get_listing_violations_summary:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ListingViolationSummaryApi->get_listing_violations_summary: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_ebay_c_marketplace_id** | **str**| Use this header to specify the eBay marketplace identifier. Supported values for this header can be found in the MarketplaceIdEnum type definition. Note that Version 1.4.0 of the Compliance API is only supported on the US, UK, Australia, Canada {English), and Germany sites. | [optional] 
 **compliance_type** | **str**| A user passes in one or more compliance type values through this query parameter. See ComplianceTypeEnum for more information on the supported compliance types that can be passed in here. If more than one compliance type value is used, delimit these values with a comma. If no compliance type values are passed in, the listing count for all compliance types will be returned. Note: Only a canned response, with counts for all listing compliance types, is returned in the Sandbox environment. Due to this limitation, the compliance_type query parameter (if used) will not have an effect on the response. | [optional] 

### Return type

[**ComplianceSummary**](ComplianceSummary.md)

### Authorization

[api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json;charset=UTF-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**204** | No Content |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

