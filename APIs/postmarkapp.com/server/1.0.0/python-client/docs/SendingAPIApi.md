# openapi_client.SendingAPIApi

All URIs are relative to *http://api.postmarkapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**send_email**](SendingAPIApi.md#send_email) | **POST** /email | Send a single email
[**send_email_batch**](SendingAPIApi.md#send_email_batch) | **POST** /email/batch | Send a batch of emails
[**send_email_batch_with_templates**](SendingAPIApi.md#send_email_batch_with_templates) | **POST** /email/batchWithTemplates | Send a batch of email using templates.
[**send_email_with_template**](SendingAPIApi.md#send_email_with_template) | **POST** /email/withTemplate | Send an email using a Template


# **send_email**
> SendEmailResponse send_email(x_postmark_server_token, body=body)

Send a single email

### Example


```python
import openapi_client
from openapi_client.models.send_email_request import SendEmailRequest
from openapi_client.models.send_email_response import SendEmailResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SendingAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.
    body = openapi_client.SendEmailRequest() # SendEmailRequest |  (optional)

    try:
        # Send a single email
        api_response = api_instance.send_email(x_postmark_server_token, body=body)
        print("The response of SendingAPIApi->send_email:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SendingAPIApi->send_email: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 
 **body** | [**SendEmailRequest**](SendEmailRequest.md)|  | [optional] 

### Return type

[**SendEmailResponse**](SendEmailResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_email_batch**
> List[SendEmailResponse] send_email_batch(x_postmark_server_token, body=body)

Send a batch of emails

### Example


```python
import openapi_client
from openapi_client.models.send_email_request import SendEmailRequest
from openapi_client.models.send_email_response import SendEmailResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SendingAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.
    body = [openapi_client.SendEmailRequest()] # List[SendEmailRequest] |  (optional)

    try:
        # Send a batch of emails
        api_response = api_instance.send_email_batch(x_postmark_server_token, body=body)
        print("The response of SendingAPIApi->send_email_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SendingAPIApi->send_email_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 
 **body** | [**List[SendEmailRequest]**](SendEmailRequest.md)|  | [optional] 

### Return type

[**List[SendEmailResponse]**](SendEmailResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_email_batch_with_templates**
> List[SendEmailResponse] send_email_batch_with_templates(x_postmark_server_token, body)

Send a batch of email using templates.

### Example


```python
import openapi_client
from openapi_client.models.send_email_response import SendEmailResponse
from openapi_client.models.send_email_templated_batch_request import SendEmailTemplatedBatchRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SendingAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.
    body = openapi_client.SendEmailTemplatedBatchRequest() # SendEmailTemplatedBatchRequest | 

    try:
        # Send a batch of email using templates.
        api_response = api_instance.send_email_batch_with_templates(x_postmark_server_token, body)
        print("The response of SendingAPIApi->send_email_batch_with_templates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SendingAPIApi->send_email_batch_with_templates: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 
 **body** | [**SendEmailTemplatedBatchRequest**](SendEmailTemplatedBatchRequest.md)|  | 

### Return type

[**List[SendEmailResponse]**](SendEmailResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **send_email_with_template**
> SendEmailResponse send_email_with_template(x_postmark_server_token, body)

Send an email using a Template

### Example


```python
import openapi_client
from openapi_client.models.email_with_template_request import EmailWithTemplateRequest
from openapi_client.models.send_email_response import SendEmailResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.postmarkapp.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.postmarkapp.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SendingAPIApi(api_client)
    x_postmark_server_token = 'x_postmark_server_token_example' # str | The token associated with the Server on which this request will operate.
    body = openapi_client.EmailWithTemplateRequest() # EmailWithTemplateRequest | 

    try:
        # Send an email using a Template
        api_response = api_instance.send_email_with_template(x_postmark_server_token, body)
        print("The response of SendingAPIApi->send_email_with_template:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SendingAPIApi->send_email_with_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_postmark_server_token** | **str**| The token associated with the Server on which this request will operate. | 
 **body** | [**EmailWithTemplateRequest**](EmailWithTemplateRequest.md)|  | 

### Return type

[**SendEmailResponse**](SendEmailResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**422** | An error was generated due to incorrect use of the API. See the Message associated with this response for more information. |  -  |
**500** | Indicates an internal server error occurred. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

