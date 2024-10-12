# openapi_client.MetaPubApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_v2_metapub_program_information_batch_batch_id_get**](MetaPubApi.md#api_v2_metapub_program_information_batch_batch_id_get) | **GET** /api/v2/metapub/program-information/batch/{batch-id} | Get an EPG batch operation.
[**api_v2_metapub_program_information_batch_post**](MetaPubApi.md#api_v2_metapub_program_information_batch_post) | **POST** /api/v2/metapub/program-information/batch | Create a batch operation on EPG information.


# **api_v2_metapub_program_information_batch_batch_id_get**
> ProgramInformationBatch api_v2_metapub_program_information_batch_batch_id_get(batch_id)

Get an EPG batch operation.

Gets the batch information which can be used to check the status of the operation or retrieve more details if the batch fails.

### Example

* OAuth Authentication (cd_oauth2):

```python
import openapi_client
from openapi_client.models.program_information_batch import ProgramInformationBatch
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MetaPubApi(api_client)
    batch_id = 56 # int | 

    try:
        # Get an EPG batch operation.
        api_response = api_instance.api_v2_metapub_program_information_batch_batch_id_get(batch_id)
        print("The response of MetaPubApi->api_v2_metapub_program_information_batch_batch_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetaPubApi->api_v2_metapub_program_information_batch_batch_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **batch_id** | **int**|  | 

### Return type

[**ProgramInformationBatch**](ProgramInformationBatch.md)

### Authorization

[cd_oauth2](../README.md#cd_oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The batch information. |  -  |
**403** | Authorization failed, Username or password not found or incorrect. |  -  |
**404** | The batch is not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v2_metapub_program_information_batch_post**
> ProgramInformationBatch api_v2_metapub_program_information_batch_post(api_v2_metapub_program_information_batch_post_request=api_v2_metapub_program_information_batch_post_request)

Create a batch operation on EPG information.

Create a batch to process the metadata of one or more electronic program guide (EPG) programs using metadata that has been uploaded to the customer's CD Drive. If multiple EPG programs are present in the metadata, they will all be updated, however updates across programs are not atomic. Note that an EPG program maps to the ContentDepot concept of an episode which is also known as a \"program instance\".  A batch operation must be explicitly created rather than the server attempting to detect new metadata in order to allow for all the content to be uploaded including any supporting content like images. A batch operation is accepted and queued for asynchronous processing at a later time. A client can poll the batch periodically to determine when it completes and the resulting state. 

### Example

* OAuth Authentication (cd_oauth2):

```python
import openapi_client
from openapi_client.models.api_v2_metapub_program_information_batch_post_request import ApiV2MetapubProgramInformationBatchPostRequest
from openapi_client.models.program_information_batch import ProgramInformationBatch
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://localhost"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.MetaPubApi(api_client)
    api_v2_metapub_program_information_batch_post_request = openapi_client.ApiV2MetapubProgramInformationBatchPostRequest() # ApiV2MetapubProgramInformationBatchPostRequest |  (optional)

    try:
        # Create a batch operation on EPG information.
        api_response = api_instance.api_v2_metapub_program_information_batch_post(api_v2_metapub_program_information_batch_post_request=api_v2_metapub_program_information_batch_post_request)
        print("The response of MetaPubApi->api_v2_metapub_program_information_batch_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MetaPubApi->api_v2_metapub_program_information_batch_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_v2_metapub_program_information_batch_post_request** | [**ApiV2MetapubProgramInformationBatchPostRequest**](ApiV2MetapubProgramInformationBatchPostRequest.md)|  | [optional] 

### Return type

[**ProgramInformationBatch**](ProgramInformationBatch.md)

### Authorization

[cd_oauth2](../README.md#cd_oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | The accepted batch information that is queued for processing. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

