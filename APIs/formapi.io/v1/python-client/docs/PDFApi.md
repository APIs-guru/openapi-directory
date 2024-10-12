# openapi_client.PDFApi

All URIs are relative to *https://api.docspring.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_fields_to_template**](PDFApi.md#add_fields_to_template) | **PUT** /templates/{template_id}/add_fields | Add new fields to a Template
[**batch_generate_pdf_v1**](PDFApi.md#batch_generate_pdf_v1) | **POST** /templates/{template_id}/submissions/batch | Generates multiple PDFs
[**batch_generate_pdfs**](PDFApi.md#batch_generate_pdfs) | **POST** /submissions/batches | Generates multiple PDFs
[**combine_pdfs**](PDFApi.md#combine_pdfs) | **POST** /combined_submissions?v&#x3D;2 | Merge submission PDFs, template PDFs, or custom files
[**combine_submissions**](PDFApi.md#combine_submissions) | **POST** /combined_submissions | Merge generated PDFs together
[**copy_template**](PDFApi.md#copy_template) | **POST** /templates/{template_id}/copy | Copy a Template
[**create_custom_file_from_upload**](PDFApi.md#create_custom_file_from_upload) | **POST** /custom_files | Create a new custom file from a cached presign upload
[**create_data_request_token**](PDFApi.md#create_data_request_token) | **POST** /data_requests/{data_request_id}/tokens | Creates a new data request token for form authentication
[**create_folder**](PDFApi.md#create_folder) | **POST** /folders/ | Create a folder
[**create_html_template**](PDFApi.md#create_html_template) | **POST** /templates?desc&#x3D;html | Create a new HTML template
[**create_pdf_template**](PDFApi.md#create_pdf_template) | **POST** /templates | Create a new PDF template with a form POST file upload
[**create_pdf_template_from_upload**](PDFApi.md#create_pdf_template_from_upload) | **POST** /templates?desc&#x3D;cached_upload | Create a new PDF template from a cached presign upload
[**delete_folder**](PDFApi.md#delete_folder) | **DELETE** /folders/{folder_id} | Delete a folder
[**expire_combined_submission**](PDFApi.md#expire_combined_submission) | **DELETE** /combined_submissions/{combined_submission_id} | Expire a combined submission
[**expire_submission**](PDFApi.md#expire_submission) | **DELETE** /submissions/{submission_id} | Expire a PDF submission
[**generate_pdf**](PDFApi.md#generate_pdf) | **POST** /templates/{template_id}/submissions | Generates a new PDF
[**get_combined_submission**](PDFApi.md#get_combined_submission) | **GET** /combined_submissions/{combined_submission_id} | Check the status of a combined submission (merged PDFs)
[**get_data_request**](PDFApi.md#get_data_request) | **GET** /data_requests/{data_request_id} | Look up a submission data request
[**get_full_template**](PDFApi.md#get_full_template) | **GET** /templates/{template_id}?full&#x3D;true | Fetch the full template attributes
[**get_presign_url**](PDFApi.md#get_presign_url) | **GET** /uploads/presign | Get a presigned URL so that you can upload a file to our AWS S3 bucket
[**get_submission**](PDFApi.md#get_submission) | **GET** /submissions/{submission_id} | Check the status of a PDF
[**get_submission_batch**](PDFApi.md#get_submission_batch) | **GET** /submissions/batches/{submission_batch_id} | Check the status of a submission batch job
[**get_template**](PDFApi.md#get_template) | **GET** /templates/{template_id} | Check the status of an uploaded template
[**get_template_schema**](PDFApi.md#get_template_schema) | **GET** /templates/{template_id}/schema | Fetch the JSON schema for a template
[**list_combined_submissions**](PDFApi.md#list_combined_submissions) | **GET** /combined_submissions | Get a list of all combined submissions
[**list_folders**](PDFApi.md#list_folders) | **GET** /folders/ | Get a list of all folders
[**list_submissions**](PDFApi.md#list_submissions) | **GET** /submissions | List all submissions
[**list_templates**](PDFApi.md#list_templates) | **GET** /templates | Get a list of all templates
[**move_folder_to_folder**](PDFApi.md#move_folder_to_folder) | **POST** /folders/{folder_id}/move | Move a folder
[**move_template_to_folder**](PDFApi.md#move_template_to_folder) | **POST** /templates/{template_id}/move | Move Template to folder
[**rename_folder**](PDFApi.md#rename_folder) | **POST** /folders/{folder_id}/rename | Rename a folder
[**templates_template_id_submissions_get**](PDFApi.md#templates_template_id_submissions_get) | **GET** /templates/{template_id}/submissions | List all submissions for a given template
[**test_authentication**](PDFApi.md#test_authentication) | **GET** /authentication | Test Authentication
[**update_data_request**](PDFApi.md#update_data_request) | **PUT** /data_requests/{data_request_id} | Update a submission data request
[**update_template**](PDFApi.md#update_template) | **PUT** /templates/{template_id} | Update a Template


# **add_fields_to_template**
> AddFieldsTemplateResponse add_fields_to_template(template_id, add_fields_data)

Add new fields to a Template

### Example

* Basic Authentication (api_token_basic):

```python
import openapi_client
from openapi_client.models.add_fields_data import AddFieldsData
from openapi_client.models.add_fields_template_response import AddFieldsTemplateResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.docspring.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.docspring.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: api_token_basic
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PDFApi(api_client)
    template_id = 'tpl_000000000000000002' # str | 
    add_fields_data = openapi_client.AddFieldsData() # AddFieldsData | 

    try:
        # Add new fields to a Template
        api_response = api_instance.add_fields_to_template(template_id, add_fields_data)
        print("The response of PDFApi->add_fields_to_template:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PDFApi->add_fields_to_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **str**|  | 
 **add_fields_data** | [**AddFieldsData**](AddFieldsData.md)|  | 

### Return type

[**AddFieldsTemplateResponse**](AddFieldsTemplateResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | add fields success |  -  |
**422** | add fields error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **batch_generate_pdf_v1**
> List[CreateSubmissionResponse1] batch_generate_pdf_v1(template_id, request_body)

Generates multiple PDFs

### Example

* Basic Authentication (api_token_basic):

```python
import openapi_client
from openapi_client.models.create_submission_response1 import CreateSubmissionResponse1
from openapi_client.models.list[object] import List[object]
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.docspring.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.docspring.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: api_token_basic
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PDFApi(api_client)
    template_id = 'tpl_000000000000000001' # str | 
    request_body = None # List[object] | 

    try:
        # Generates multiple PDFs
        api_response = api_instance.batch_generate_pdf_v1(template_id, request_body)
        print("The response of PDFApi->batch_generate_pdf_v1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PDFApi->batch_generate_pdf_v1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **str**|  | 
 **request_body** | [**List[object]**](object.md)|  | 

### Return type

[**List[CreateSubmissionResponse1]**](CreateSubmissionResponse1.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | submissions created |  -  |
**400** | invalid JSON |  -  |
**401** | authentication failed |  -  |
**422** | invalid requests |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **batch_generate_pdfs**
> CreateSubmissionBatchResponse batch_generate_pdfs(submission_batch_data)

Generates multiple PDFs

### Example

* Basic Authentication (api_token_basic):

```python
import openapi_client
from openapi_client.models.create_submission_batch_response import CreateSubmissionBatchResponse
from openapi_client.models.submission_batch_data import SubmissionBatchData
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.docspring.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.docspring.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: api_token_basic
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PDFApi(api_client)
    submission_batch_data = openapi_client.SubmissionBatchData() # SubmissionBatchData | 

    try:
        # Generates multiple PDFs
        api_response = api_instance.batch_generate_pdfs(submission_batch_data)
        print("The response of PDFApi->batch_generate_pdfs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PDFApi->batch_generate_pdfs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submission_batch_data** | [**SubmissionBatchData**](SubmissionBatchData.md)|  | 

### Return type

[**CreateSubmissionBatchResponse**](CreateSubmissionBatchResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | some PDFs with invalid data |  -  |
**201** | submissions created |  -  |
**400** | invalid JSON |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **combine_pdfs**
> CreateCombinedSubmissionResponse combine_pdfs(combine_pdfs_data)

Merge submission PDFs, template PDFs, or custom files

### Example

* Basic Authentication (api_token_basic):

```python
import openapi_client
from openapi_client.models.combine_pdfs_data import CombinePdfsData
from openapi_client.models.create_combined_submission_response import CreateCombinedSubmissionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.docspring.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.docspring.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: api_token_basic
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PDFApi(api_client)
    combine_pdfs_data = openapi_client.CombinePdfsData() # CombinePdfsData | 

    try:
        # Merge submission PDFs, template PDFs, or custom files
        api_response = api_instance.combine_pdfs(combine_pdfs_data)
        print("The response of PDFApi->combine_pdfs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PDFApi->combine_pdfs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **combine_pdfs_data** | [**CombinePdfsData**](CombinePdfsData.md)|  | 

### Return type

[**CreateCombinedSubmissionResponse**](CreateCombinedSubmissionResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | combined submission created |  -  |
**400** | invalid JSON |  -  |
**401** | authentication failed |  -  |
**422** | invalid request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **combine_submissions**
> CreateCombinedSubmissionResponse combine_submissions(combined_submission_data)

Merge generated PDFs together

### Example

* Basic Authentication (api_token_basic):

```python
import openapi_client
from openapi_client.models.combined_submission_data import CombinedSubmissionData
from openapi_client.models.create_combined_submission_response import CreateCombinedSubmissionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.docspring.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.docspring.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: api_token_basic
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PDFApi(api_client)
    combined_submission_data = openapi_client.CombinedSubmissionData() # CombinedSubmissionData | 

    try:
        # Merge generated PDFs together
        api_response = api_instance.combine_submissions(combined_submission_data)
        print("The response of PDFApi->combine_submissions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PDFApi->combine_submissions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **combined_submission_data** | [**CombinedSubmissionData**](CombinedSubmissionData.md)|  | 

### Return type

[**CreateCombinedSubmissionResponse**](CreateCombinedSubmissionResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | combined submission created |  -  |
**400** | invalid JSON |  -  |
**401** | authentication failed |  -  |
**422** | invalid request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **copy_template**
> Template copy_template(template_id, copy_template_data=copy_template_data)

Copy a Template

### Example

* Basic Authentication (api_token_basic):

```python
import openapi_client
from openapi_client.models.copy_template_data import CopyTemplateData
from openapi_client.models.template import Template
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.docspring.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.docspring.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: api_token_basic
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PDFApi(api_client)
    template_id = 'tpl_000000000000000001' # str | 
    copy_template_data = openapi_client.CopyTemplateData() # CopyTemplateData |  (optional)

    try:
        # Copy a Template
        api_response = api_instance.copy_template(template_id, copy_template_data=copy_template_data)
        print("The response of PDFApi->copy_template:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PDFApi->copy_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **str**|  | 
 **copy_template_data** | [**CopyTemplateData**](CopyTemplateData.md)|  | [optional] 

### Return type

[**Template**](Template.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | copy template success |  -  |
**404** | folder not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_custom_file_from_upload**
> CreateCustomFileResponse create_custom_file_from_upload(create_custom_file_data)

Create a new custom file from a cached presign upload

### Example

* Basic Authentication (api_token_basic):

```python
import openapi_client
from openapi_client.models.create_custom_file_data import CreateCustomFileData
from openapi_client.models.create_custom_file_response import CreateCustomFileResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.docspring.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.docspring.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: api_token_basic
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PDFApi(api_client)
    create_custom_file_data = openapi_client.CreateCustomFileData() # CreateCustomFileData | 

    try:
        # Create a new custom file from a cached presign upload
        api_response = api_instance.create_custom_file_from_upload(create_custom_file_data)
        print("The response of PDFApi->create_custom_file_from_upload:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PDFApi->create_custom_file_from_upload: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_custom_file_data** | [**CreateCustomFileData**](CreateCustomFileData.md)|  | 

### Return type

[**CreateCustomFileResponse**](CreateCustomFileResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | returns the custom file |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_data_request_token**
> CreateSubmissionDataRequestTokenResponse create_data_request_token(data_request_id)

Creates a new data request token for form authentication

### Example

* Basic Authentication (api_token_basic):

```python
import openapi_client
from openapi_client.models.create_submission_data_request_token_response import CreateSubmissionDataRequestTokenResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.docspring.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.docspring.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: api_token_basic
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PDFApi(api_client)
    data_request_id = 'drq_000000000000000001' # str | 

    try:
        # Creates a new data request token for form authentication
        api_response = api_instance.create_data_request_token(data_request_id)
        print("The response of PDFApi->create_data_request_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PDFApi->create_data_request_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_request_id** | **str**|  | 

### Return type

[**CreateSubmissionDataRequestTokenResponse**](CreateSubmissionDataRequestTokenResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | token created |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_folder**
> Folder create_folder(create_folder_data)

Create a folder

### Example

* Basic Authentication (api_token_basic):

```python
import openapi_client
from openapi_client.models.create_folder_data import CreateFolderData
from openapi_client.models.folder import Folder
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.docspring.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.docspring.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: api_token_basic
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PDFApi(api_client)
    create_folder_data = openapi_client.CreateFolderData() # CreateFolderData | 

    try:
        # Create a folder
        api_response = api_instance.create_folder(create_folder_data)
        print("The response of PDFApi->create_folder:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PDFApi->create_folder: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_folder_data** | [**CreateFolderData**](CreateFolderData.md)|  | 

### Return type

[**Folder**](Folder.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | folder created inside another folder |  -  |
**401** | authentication failed |  -  |
**404** | parent folder doesnt exist |  -  |
**422** | name already exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_html_template**
> PendingTemplate create_html_template(create_html_template_data)

Create a new HTML template

### Example

* Basic Authentication (api_token_basic):

```python
import openapi_client
from openapi_client.models.create_html_template_data import CreateHtmlTemplateData
from openapi_client.models.pending_template import PendingTemplate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.docspring.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.docspring.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: api_token_basic
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PDFApi(api_client)
    create_html_template_data = openapi_client.CreateHtmlTemplateData() # CreateHtmlTemplateData | 

    try:
        # Create a new HTML template
        api_response = api_instance.create_html_template(create_html_template_data)
        print("The response of PDFApi->create_html_template:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PDFApi->create_html_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_html_template_data** | [**CreateHtmlTemplateData**](CreateHtmlTemplateData.md)|  | 

### Return type

[**PendingTemplate**](PendingTemplate.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | returns a created template |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_pdf_template**
> PendingTemplate create_pdf_template(template_document, template_name, template_parent_folder_id=template_parent_folder_id)

Create a new PDF template with a form POST file upload

### Example

* Basic Authentication (api_token_basic):

```python
import openapi_client
from openapi_client.models.pending_template import PendingTemplate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.docspring.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.docspring.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: api_token_basic
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PDFApi(api_client)
    template_document = None # bytearray | 
    template_name = 'template_name_example' # str | 
    template_parent_folder_id = 'template_parent_folder_id_example' # str |  (optional)

    try:
        # Create a new PDF template with a form POST file upload
        api_response = api_instance.create_pdf_template(template_document, template_name, template_parent_folder_id=template_parent_folder_id)
        print("The response of PDFApi->create_pdf_template:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PDFApi->create_pdf_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_document** | **bytearray**|  | 
 **template_name** | **str**|  | 
 **template_parent_folder_id** | **str**|  | [optional] 

### Return type

[**PendingTemplate**](PendingTemplate.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | returns a pending template |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_pdf_template_from_upload**
> PendingTemplate create_pdf_template_from_upload(create_template_from_upload_data)

Create a new PDF template from a cached presign upload

### Example

* Basic Authentication (api_token_basic):

```python
import openapi_client
from openapi_client.models.create_template_from_upload_data import CreateTemplateFromUploadData
from openapi_client.models.pending_template import PendingTemplate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.docspring.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.docspring.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: api_token_basic
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PDFApi(api_client)
    create_template_from_upload_data = openapi_client.CreateTemplateFromUploadData() # CreateTemplateFromUploadData | 

    try:
        # Create a new PDF template from a cached presign upload
        api_response = api_instance.create_pdf_template_from_upload(create_template_from_upload_data)
        print("The response of PDFApi->create_pdf_template_from_upload:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PDFApi->create_pdf_template_from_upload: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_template_from_upload_data** | [**CreateTemplateFromUploadData**](CreateTemplateFromUploadData.md)|  | 

### Return type

[**PendingTemplate**](PendingTemplate.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | returns a pending template |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_folder**
> Folder delete_folder(folder_id)

Delete a folder

### Example

* Basic Authentication (api_token_basic):

```python
import openapi_client
from openapi_client.models.folder import Folder
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.docspring.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.docspring.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: api_token_basic
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PDFApi(api_client)
    folder_id = 'fld_000000000000000001' # str | 

    try:
        # Delete a folder
        api_response = api_instance.delete_folder(folder_id)
        print("The response of PDFApi->delete_folder:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PDFApi->delete_folder: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folder_id** | **str**|  | 

### Return type

[**Folder**](Folder.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | folder is empty |  -  |
**401** | authentication failed |  -  |
**404** | folder doesnt exist |  -  |
**422** | folder has contents |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **expire_combined_submission**
> CombinedSubmission expire_combined_submission(combined_submission_id)

Expire a combined submission

### Example

* Basic Authentication (api_token_basic):

```python
import openapi_client
from openapi_client.models.combined_submission import CombinedSubmission
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.docspring.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.docspring.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: api_token_basic
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PDFApi(api_client)
    combined_submission_id = 'com_000000000000000001' # str | 

    try:
        # Expire a combined submission
        api_response = api_instance.expire_combined_submission(combined_submission_id)
        print("The response of PDFApi->expire_combined_submission:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PDFApi->expire_combined_submission: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **combined_submission_id** | **str**|  | 

### Return type

[**CombinedSubmission**](CombinedSubmission.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | submission was expired |  -  |
**401** | authentication failed |  -  |
**403** | test API token used |  -  |
**404** | combined submission not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **expire_submission**
> Submission expire_submission(submission_id)

Expire a PDF submission

### Example

* Basic Authentication (api_token_basic):

```python
import openapi_client
from openapi_client.models.submission import Submission
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.docspring.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.docspring.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: api_token_basic
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PDFApi(api_client)
    submission_id = 'sub_000000000000000001' # str | 

    try:
        # Expire a PDF submission
        api_response = api_instance.expire_submission(submission_id)
        print("The response of PDFApi->expire_submission:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PDFApi->expire_submission: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submission_id** | **str**|  | 

### Return type

[**Submission**](Submission.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | submission was expired |  -  |
**401** | authentication failed |  -  |
**403** | test API token used |  -  |
**404** | submission not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **generate_pdf**
> CreateSubmissionResponse generate_pdf(template_id, submission_data)

Generates a new PDF

### Example

* Basic Authentication (api_token_basic):

```python
import openapi_client
from openapi_client.models.create_submission_response import CreateSubmissionResponse
from openapi_client.models.submission_data import SubmissionData
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.docspring.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.docspring.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: api_token_basic
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PDFApi(api_client)
    template_id = 'tpl_000000000000000001' # str | 
    submission_data = openapi_client.SubmissionData() # SubmissionData | 

    try:
        # Generates a new PDF
        api_response = api_instance.generate_pdf(template_id, submission_data)
        print("The response of PDFApi->generate_pdf:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PDFApi->generate_pdf: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **str**|  | 
 **submission_data** | [**SubmissionData**](SubmissionData.md)|  | 

### Return type

[**CreateSubmissionResponse**](CreateSubmissionResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | submission created |  -  |
**400** | invalid JSON |  -  |
**401** | authentication failed |  -  |
**422** | invalid request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_combined_submission**
> CombinedSubmission get_combined_submission(combined_submission_id)

Check the status of a combined submission (merged PDFs)

### Example

* Basic Authentication (api_token_basic):

```python
import openapi_client
from openapi_client.models.combined_submission import CombinedSubmission
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.docspring.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.docspring.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: api_token_basic
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PDFApi(api_client)
    combined_submission_id = 'com_000000000000000001' # str | 

    try:
        # Check the status of a combined submission (merged PDFs)
        api_response = api_instance.get_combined_submission(combined_submission_id)
        print("The response of PDFApi->get_combined_submission:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PDFApi->get_combined_submission: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **combined_submission_id** | **str**|  | 

### Return type

[**CombinedSubmission**](CombinedSubmission.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | processed combined submission found |  -  |
**401** | authentication failed |  -  |
**404** | combined submission not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_data_request**
> SubmissionDataRequest get_data_request(data_request_id)

Look up a submission data request

### Example

* Basic Authentication (api_token_basic):

```python
import openapi_client
from openapi_client.models.submission_data_request import SubmissionDataRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.docspring.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.docspring.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: api_token_basic
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PDFApi(api_client)
    data_request_id = 'drq_000000000000000001' # str | 

    try:
        # Look up a submission data request
        api_response = api_instance.get_data_request(data_request_id)
        print("The response of PDFApi->get_data_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PDFApi->get_data_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_request_id** | **str**|  | 

### Return type

[**SubmissionDataRequest**](SubmissionDataRequest.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | completed submission data request found |  -  |
**401** | authentication failed |  -  |
**404** | submission data request not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_full_template**
> FullTemplate get_full_template(template_id)

Fetch the full template attributes

### Example

* Basic Authentication (api_token_basic):

```python
import openapi_client
from openapi_client.models.full_template import FullTemplate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.docspring.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.docspring.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: api_token_basic
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PDFApi(api_client)
    template_id = 'tpl_000000000000000001' # str | 

    try:
        # Fetch the full template attributes
        api_response = api_instance.get_full_template(template_id)
        print("The response of PDFApi->get_full_template:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PDFApi->get_full_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **str**|  | 

### Return type

[**FullTemplate**](FullTemplate.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | template found |  -  |
**401** | authentication failed |  -  |
**404** | template not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_presign_url**
> UploadPresign get_presign_url()

Get a presigned URL so that you can upload a file to our AWS S3 bucket

### Example

* Basic Authentication (api_token_basic):

```python
import openapi_client
from openapi_client.models.upload_presign import UploadPresign
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.docspring.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.docspring.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: api_token_basic
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PDFApi(api_client)

    try:
        # Get a presigned URL so that you can upload a file to our AWS S3 bucket
        api_response = api_instance.get_presign_url()
        print("The response of PDFApi->get_presign_url:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PDFApi->get_presign_url: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**UploadPresign**](UploadPresign.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | presign URL generated |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_submission**
> Submission get_submission(submission_id, include_data=include_data)

Check the status of a PDF

### Example

* Basic Authentication (api_token_basic):

```python
import openapi_client
from openapi_client.models.submission import Submission
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.docspring.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.docspring.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: api_token_basic
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PDFApi(api_client)
    submission_id = 'sub_000000000000000001' # str | 
    include_data = true # bool |  (optional)

    try:
        # Check the status of a PDF
        api_response = api_instance.get_submission(submission_id, include_data=include_data)
        print("The response of PDFApi->get_submission:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PDFApi->get_submission: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submission_id** | **str**|  | 
 **include_data** | **bool**|  | [optional] 

### Return type

[**Submission**](Submission.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | processed submission found |  -  |
**401** | authentication failed |  -  |
**404** | submission not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_submission_batch**
> SubmissionBatch get_submission_batch(submission_batch_id, include_submissions=include_submissions)

Check the status of a submission batch job

### Example

* Basic Authentication (api_token_basic):

```python
import openapi_client
from openapi_client.models.submission_batch import SubmissionBatch
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.docspring.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.docspring.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: api_token_basic
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PDFApi(api_client)
    submission_batch_id = 'sbb_000000000000000001' # str | 
    include_submissions = true # bool |  (optional)

    try:
        # Check the status of a submission batch job
        api_response = api_instance.get_submission_batch(submission_batch_id, include_submissions=include_submissions)
        print("The response of PDFApi->get_submission_batch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PDFApi->get_submission_batch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submission_batch_id** | **str**|  | 
 **include_submissions** | **bool**|  | [optional] 

### Return type

[**SubmissionBatch**](SubmissionBatch.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | processed submission batch found |  -  |
**401** | authentication failed |  -  |
**404** | submission batch not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_template**
> Template get_template(template_id)

Check the status of an uploaded template

### Example

* Basic Authentication (api_token_basic):

```python
import openapi_client
from openapi_client.models.template import Template
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.docspring.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.docspring.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: api_token_basic
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PDFApi(api_client)
    template_id = 'tpl_000000000000000001' # str | 

    try:
        # Check the status of an uploaded template
        api_response = api_instance.get_template(template_id)
        print("The response of PDFApi->get_template:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PDFApi->get_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **str**|  | 

### Return type

[**Template**](Template.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | template found |  -  |
**401** | authentication failed |  -  |
**404** | template not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_template_schema**
> TemplateSchema get_template_schema(template_id)

Fetch the JSON schema for a template

### Example

* Basic Authentication (api_token_basic):

```python
import openapi_client
from openapi_client.models.template_schema import TemplateSchema
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.docspring.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.docspring.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: api_token_basic
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PDFApi(api_client)
    template_id = 'tpl_000000000000000001' # str | 

    try:
        # Fetch the JSON schema for a template
        api_response = api_instance.get_template_schema(template_id)
        print("The response of PDFApi->get_template_schema:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PDFApi->get_template_schema: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **str**|  | 

### Return type

[**TemplateSchema**](TemplateSchema.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | template found |  -  |
**401** | authentication failed |  -  |
**404** | template not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_combined_submissions**
> List[CombinedSubmission] list_combined_submissions(page=page, per_page=per_page)

Get a list of all combined submissions

### Example

* Basic Authentication (api_token_basic):

```python
import openapi_client
from openapi_client.models.combined_submission import CombinedSubmission
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.docspring.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.docspring.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: api_token_basic
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PDFApi(api_client)
    page = 2 # int | Default: 1 (optional)
    per_page = 1 # int | Default: 50 (optional)

    try:
        # Get a list of all combined submissions
        api_response = api_instance.list_combined_submissions(page=page, per_page=per_page)
        print("The response of PDFApi->list_combined_submissions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PDFApi->list_combined_submissions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| Default: 1 | [optional] 
 **per_page** | **int**| Default: 50 | [optional] 

### Return type

[**List[CombinedSubmission]**](CombinedSubmission.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | enumerate all combined submissions |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_folders**
> List[Folder] list_folders(parent_folder_id=parent_folder_id)

Get a list of all folders

### Example

* Basic Authentication (api_token_basic):

```python
import openapi_client
from openapi_client.models.folder import Folder
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.docspring.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.docspring.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: api_token_basic
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PDFApi(api_client)
    parent_folder_id = 'fld_000000000000000002' # str | Filter By Folder Id (optional)

    try:
        # Get a list of all folders
        api_response = api_instance.list_folders(parent_folder_id=parent_folder_id)
        print("The response of PDFApi->list_folders:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PDFApi->list_folders: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent_folder_id** | **str**| Filter By Folder Id | [optional] 

### Return type

[**List[Folder]**](Folder.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | enumerate all folders |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_submissions**
> ListSubmissionsResponse list_submissions(cursor=cursor, limit=limit, created_after=created_after, created_before=created_before, type=type, include_data=include_data)

List all submissions

### Example

* Basic Authentication (api_token_basic):

```python
import openapi_client
from openapi_client.models.list_submissions_response import ListSubmissionsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.docspring.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.docspring.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: api_token_basic
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PDFApi(api_client)
    cursor = 'sub_list_000012' # str |  (optional)
    limit = 3 # float |  (optional)
    created_after = '2019-01-01T09:00:00-05:00' # str |  (optional)
    created_before = '2020-01-01T09:00:00-05:00' # str |  (optional)
    type = 'test' # str |  (optional)
    include_data = true # bool |  (optional)

    try:
        # List all submissions
        api_response = api_instance.list_submissions(cursor=cursor, limit=limit, created_after=created_after, created_before=created_before, type=type, include_data=include_data)
        print("The response of PDFApi->list_submissions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PDFApi->list_submissions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **cursor** | **str**|  | [optional] 
 **limit** | **float**|  | [optional] 
 **created_after** | **str**|  | [optional] 
 **created_before** | **str**|  | [optional] 
 **type** | **str**|  | [optional] 
 **include_data** | **bool**|  | [optional] 

### Return type

[**ListSubmissionsResponse**](ListSubmissionsResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | listing submissions |  -  |
**400** | invalid type |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_templates**
> List[Template] list_templates(query=query, parent_folder_id=parent_folder_id, page=page, per_page=per_page)

Get a list of all templates

### Example

* Basic Authentication (api_token_basic):

```python
import openapi_client
from openapi_client.models.template import Template
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.docspring.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.docspring.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: api_token_basic
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PDFApi(api_client)
    query = '2' # str | Search By Name (optional)
    parent_folder_id = 'fld_000000000000000001' # str | Filter By Folder Id (optional)
    page = 2 # int | Default: 1 (optional)
    per_page = 1 # int | Default: 50 (optional)

    try:
        # Get a list of all templates
        api_response = api_instance.list_templates(query=query, parent_folder_id=parent_folder_id, page=page, per_page=per_page)
        print("The response of PDFApi->list_templates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PDFApi->list_templates: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **query** | **str**| Search By Name | [optional] 
 **parent_folder_id** | **str**| Filter By Folder Id | [optional] 
 **page** | **int**| Default: 1 | [optional] 
 **per_page** | **int**| Default: 50 | [optional] 

### Return type

[**List[Template]**](Template.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | enumerate all templates |  -  |
**401** | authentication failed |  -  |
**404** | filter templates by invalid folder id |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **move_folder_to_folder**
> Folder move_folder_to_folder(folder_id, move_folder_data)

Move a folder

### Example

* Basic Authentication (api_token_basic):

```python
import openapi_client
from openapi_client.models.folder import Folder
from openapi_client.models.move_folder_data import MoveFolderData
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.docspring.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.docspring.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: api_token_basic
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PDFApi(api_client)
    folder_id = 'fld_000000000000000001' # str | 
    move_folder_data = openapi_client.MoveFolderData() # MoveFolderData | 

    try:
        # Move a folder
        api_response = api_instance.move_folder_to_folder(folder_id, move_folder_data)
        print("The response of PDFApi->move_folder_to_folder:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PDFApi->move_folder_to_folder: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folder_id** | **str**|  | 
 **move_folder_data** | [**MoveFolderData**](MoveFolderData.md)|  | 

### Return type

[**Folder**](Folder.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | move to root folder |  -  |
**401** | authentication failed |  -  |
**404** | parent folder doesnt exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **move_template_to_folder**
> Template move_template_to_folder(template_id, move_template_data)

Move Template to folder

### Example

* Basic Authentication (api_token_basic):

```python
import openapi_client
from openapi_client.models.move_template_data import MoveTemplateData
from openapi_client.models.template import Template
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.docspring.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.docspring.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: api_token_basic
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PDFApi(api_client)
    template_id = 'tpl_000000000000000001' # str | 
    move_template_data = openapi_client.MoveTemplateData() # MoveTemplateData | 

    try:
        # Move Template to folder
        api_response = api_instance.move_template_to_folder(template_id, move_template_data)
        print("The response of PDFApi->move_template_to_folder:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PDFApi->move_template_to_folder: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **str**|  | 
 **move_template_data** | [**MoveTemplateData**](MoveTemplateData.md)|  | 

### Return type

[**Template**](Template.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | move template success |  -  |
**404** | folder not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **rename_folder**
> rename_folder(folder_id, rename_folder_data)

Rename a folder

### Example

* Basic Authentication (api_token_basic):

```python
import openapi_client
from openapi_client.models.rename_folder_data import RenameFolderData
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.docspring.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.docspring.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: api_token_basic
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PDFApi(api_client)
    folder_id = 'fld_000000000000000001' # str | 
    rename_folder_data = openapi_client.RenameFolderData() # RenameFolderData | 

    try:
        # Rename a folder
        api_instance.rename_folder(folder_id, rename_folder_data)
    except Exception as e:
        print("Exception when calling PDFApi->rename_folder: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **folder_id** | **str**|  | 
 **rename_folder_data** | [**RenameFolderData**](RenameFolderData.md)|  | 

### Return type

void (empty response body)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful rename |  -  |
**401** | authentication failed |  -  |
**404** | folder doesnt belong to me |  -  |
**422** | name already exist |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **templates_template_id_submissions_get**
> ListSubmissionsResponse templates_template_id_submissions_get(template_id, cursor=cursor, limit=limit, created_after=created_after, created_before=created_before, type=type, include_data=include_data)

List all submissions for a given template

### Example

* Basic Authentication (api_token_basic):

```python
import openapi_client
from openapi_client.models.list_submissions_response import ListSubmissionsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.docspring.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.docspring.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: api_token_basic
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PDFApi(api_client)
    template_id = 'tpl_000000000000000002' # str | 
    cursor = 'cursor_example' # str |  (optional)
    limit = 3.4 # float |  (optional)
    created_after = 'created_after_example' # str |  (optional)
    created_before = 'created_before_example' # str |  (optional)
    type = 'type_example' # str |  (optional)
    include_data = true # bool |  (optional)

    try:
        # List all submissions for a given template
        api_response = api_instance.templates_template_id_submissions_get(template_id, cursor=cursor, limit=limit, created_after=created_after, created_before=created_before, type=type, include_data=include_data)
        print("The response of PDFApi->templates_template_id_submissions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PDFApi->templates_template_id_submissions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **str**|  | 
 **cursor** | **str**|  | [optional] 
 **limit** | **float**|  | [optional] 
 **created_after** | **str**|  | [optional] 
 **created_before** | **str**|  | [optional] 
 **type** | **str**|  | [optional] 
 **include_data** | **bool**|  | [optional] 

### Return type

[**ListSubmissionsResponse**](ListSubmissionsResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | listing submissions |  -  |
**404** | invalid template id |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_authentication**
> AuthenticationSuccessResponse test_authentication()

Test Authentication

### Example

* Basic Authentication (api_token_basic):

```python
import openapi_client
from openapi_client.models.authentication_success_response import AuthenticationSuccessResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.docspring.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.docspring.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: api_token_basic
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PDFApi(api_client)

    try:
        # Test Authentication
        api_response = api_instance.test_authentication()
        print("The response of PDFApi->test_authentication:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PDFApi->test_authentication: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**AuthenticationSuccessResponse**](AuthenticationSuccessResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | authentication succeeded |  -  |
**401** | authentication failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_data_request**
> UpdateDataRequestResponse update_data_request(data_request_id, update_submission_data_request_data)

Update a submission data request

### Example

* Basic Authentication (api_token_basic):

```python
import openapi_client
from openapi_client.models.update_data_request_response import UpdateDataRequestResponse
from openapi_client.models.update_submission_data_request_data import UpdateSubmissionDataRequestData
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.docspring.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.docspring.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: api_token_basic
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PDFApi(api_client)
    data_request_id = 'drq_000000000000000001' # str | 
    update_submission_data_request_data = openapi_client.UpdateSubmissionDataRequestData() # UpdateSubmissionDataRequestData | 

    try:
        # Update a submission data request
        api_response = api_instance.update_data_request(data_request_id, update_submission_data_request_data)
        print("The response of PDFApi->update_data_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PDFApi->update_data_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data_request_id** | **str**|  | 
 **update_submission_data_request_data** | [**UpdateSubmissionDataRequestData**](UpdateSubmissionDataRequestData.md)|  | 

### Return type

[**UpdateDataRequestResponse**](UpdateDataRequestResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | submission data request updated |  -  |
**401** | authentication failed |  -  |
**404** | submission data request not found |  -  |
**422** | invalid request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_template**
> UpdateTemplateResponse update_template(template_id, update_template_data)

Update a Template

### Example

* Basic Authentication (api_token_basic):

```python
import openapi_client
from openapi_client.models.update_template_data import UpdateTemplateData
from openapi_client.models.update_template_response import UpdateTemplateResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.docspring.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.docspring.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: api_token_basic
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PDFApi(api_client)
    template_id = 'tpl_000000000000000003' # str | 
    update_template_data = openapi_client.UpdateTemplateData() # UpdateTemplateData | 

    try:
        # Update a Template
        api_response = api_instance.update_template(template_id, update_template_data)
        print("The response of PDFApi->update_template:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PDFApi->update_template: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **template_id** | **str**|  | 
 **update_template_data** | [**UpdateTemplateData**](UpdateTemplateData.md)|  | 

### Return type

[**UpdateTemplateResponse**](UpdateTemplateResponse.md)

### Authorization

[api_token_basic](../README.md#api_token_basic)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | update template success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

