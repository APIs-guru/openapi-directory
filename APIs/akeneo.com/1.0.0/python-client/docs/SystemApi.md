# openapi_client.SystemApi

All URIs are relative to *http://demo.akeneo.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_system_information**](SystemApi.md#get_system_information) | **GET** /api/rest/v1/system-information | Get system information


# **get_system_information**
> GetSystemInformation200Response get_system_information()

Get system information

This endpoint allows you to get the version and the edition of the PIM. Example of what you can get <table class=\"description-table\"> <thead> <tr> <th align=\"center\">Environment</th> <th align=\"center\">Edition</th> <th align=\"center\">Version</th> </tr> </thead> <tbody> <tr> <td align=\"center\">SaaS EE</td> <td align=\"center\">Serenity</td> <td align=\"center\">v20230112013744</td> </tr> <tr> <td align=\"center\">SaaS CE</td> <td align=\"center\">GE</td> <td align=\"center\">v20210526040645</td> </tr> <tr> <td align=\"center\">PaaS or onPrem EE</td> <td align=\"center\">EE</td> <td align=\"center\">5.0.28</td> </tr> <tr> <td align=\"center\">PaaS or onPrem CE</td> <td align=\"center\">CE</td> <td align=\"center\">5.0.28</td> </tr> </tbody> </table>

### Example


```python
import openapi_client
from openapi_client.models.get_system_information200_response import GetSystemInformation200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://demo.akeneo.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://demo.akeneo.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SystemApi(api_client)

    try:
        # Get system information
        api_response = api_instance.get_system_information()
        print("The response of SystemApi->get_system_information:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SystemApi->get_system_information: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GetSystemInformation200Response**](GetSystemInformation200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, edition, version, code, message

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Return the version and the edition of the PIM. |  -  |
**406** | Not Acceptable |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

