# openapi_client.PatientApi

All URIs are relative to *https://api.twinehealth.com/pub*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_patient**](PatientApi.md#create_patient) | **POST** /patient | Create a patient
[**fetch_patient**](PatientApi.md#fetch_patient) | **GET** /patient/{id} | Get a patient
[**fetch_patient_coaches**](PatientApi.md#fetch_patient_coaches) | **GET** /patient/{id}/coaches | List coaches for a patient
[**fetch_patient_groups**](PatientApi.md#fetch_patient_groups) | **GET** /patient/{id}/groups | List groups for a patient
[**fetch_patients**](PatientApi.md#fetch_patients) | **GET** /patient | List patients
[**update_patient**](PatientApi.md#update_patient) | **PATCH** /patient/{id} | Update a patient
[**upsert_patient**](PatientApi.md#upsert_patient) | **PUT** /patient | Upsert patient


# **create_patient**
> CreatePatientResponse create_patient(create_patient_request)

Create a patient

Create a patient record.  Example for creating a patient with a group specified using `meta.query` instead of `id`:  ```JSON {   \"data\": {     \"type\": \"patient\",     \"attributes\": {       \"first_name\": \"Andrew\",       \"last_name\": \"Smith\"     },     \"relationships\": {       \"groups\": {         \"data\": [           {             \"type\": \"group\",             \"meta\": {               \"query\": {                 \"organization\": \"58c88de7c93eb96357a87033\",                 \"name\": \"Patients Lead\"               }             }           }         ]       }     }   } } ``` 

### Example


```python
import openapi_client
from openapi_client.models.create_patient_request import CreatePatientRequest
from openapi_client.models.create_patient_response import CreatePatientResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twinehealth.com/pub
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twinehealth.com/pub"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PatientApi(api_client)
    create_patient_request = openapi_client.CreatePatientRequest() # CreatePatientRequest | 

    try:
        # Create a patient
        api_response = api_instance.create_patient(create_patient_request)
        print("The response of PatientApi->create_patient:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PatientApi->create_patient: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_patient_request** | [**CreatePatientRequest**](CreatePatientRequest.md)|  | 

### Return type

[**CreatePatientResponse**](CreatePatientResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**409** | Invalid Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetch_patient**
> FetchPatientResponse fetch_patient(id)

Get a patient

Gets a patient record by id.

### Example


```python
import openapi_client
from openapi_client.models.fetch_patient_response import FetchPatientResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twinehealth.com/pub
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twinehealth.com/pub"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PatientApi(api_client)
    id = 'id_example' # str | Patient identifier

    try:
        # Get a patient
        api_response = api_instance.fetch_patient(id)
        print("The response of PatientApi->fetch_patient:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PatientApi->fetch_patient: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Patient identifier | 

### Return type

[**FetchPatientResponse**](FetchPatientResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetch_patient_coaches**
> FetchCoachesResponse fetch_patient_coaches(id)

List coaches for a patient

Get the list of coaches for a patient.

### Example


```python
import openapi_client
from openapi_client.models.fetch_coaches_response import FetchCoachesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twinehealth.com/pub
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twinehealth.com/pub"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PatientApi(api_client)
    id = 'id_example' # str | Patient identifier

    try:
        # List coaches for a patient
        api_response = api_instance.fetch_patient_coaches(id)
        print("The response of PatientApi->fetch_patient_coaches:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PatientApi->fetch_patient_coaches: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Patient identifier | 

### Return type

[**FetchCoachesResponse**](FetchCoachesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetch_patient_groups**
> FetchGroupsResponse fetch_patient_groups(id)

List groups for a patient

Get the list of groups for a patient.

### Example


```python
import openapi_client
from openapi_client.models.fetch_groups_response import FetchGroupsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twinehealth.com/pub
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twinehealth.com/pub"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PatientApi(api_client)
    id = 'id_example' # str | Patient identifier

    try:
        # List groups for a patient
        api_response = api_instance.fetch_patient_groups(id)
        print("The response of PatientApi->fetch_patient_groups:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PatientApi->fetch_patient_groups: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Patient identifier | 

### Return type

[**FetchGroupsResponse**](FetchGroupsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetch_patients**
> FetchPatientsResponse fetch_patients(filter_groups=filter_groups, filter_organization=filter_organization, filter_identifier_system=filter_identifier_system, filter_identifier_value=filter_identifier_value, filter_archived=filter_archived, filter_created_at=filter_created_at, filter_updated_at=filter_updated_at, page_number=page_number, page_size=page_size, page_limit=page_limit, page_cursor=page_cursor)

List patients

Get a list of patients.

### Example


```python
import openapi_client
from openapi_client.models.fetch_patients_response import FetchPatientsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twinehealth.com/pub
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twinehealth.com/pub"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PatientApi(api_client)
    filter_groups = 'filter_groups_example' # str | Comma-separated list of group ids. Note that either `filter[group]` or `filter[organization]` must be specified. (optional)
    filter_organization = 'filter_organization_example' # str | Fitbit Plus organization id. Note that either `filter[group]` or `filter[organization]` must be specified. (optional)
    filter_identifier_system = 'filter_identifier_system_example' # str | Identifier system (example: \"MyEHR\") - requires a \"filter[identifier][value]\" parameter (optional)
    filter_identifier_value = 'filter_identifier_value_example' # str | Identifier value (example: \"12345\") - requires a \"filter[identifier][system]\" parameter (optional)
    filter_archived = True # bool | If not specified, return all patients. If set to 'true' return only archived patients, if set to 'false', return only patients who are not archived. (optional)
    filter_created_at = 'filter_created_at_example' # str | The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by `..`. Example for patients created in November 2017 (America/New_York): `filter[created_at]=2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00`  (optional)
    filter_updated_at = 'filter_updated_at_example' # str | The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by `..`. Example for patients updated in November 2017 (America/New_York): `filter[updated_at]=2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00`  (optional)
    page_number = 1 # int | Page number (optional) (default to 1)
    page_size = 10 # int | Page size (optional) (default to 10)
    page_limit = 50 # int | Page limit (optional) (default to 50)
    page_cursor = 'page_cursor_example' # str | Page cursor (optional)

    try:
        # List patients
        api_response = api_instance.fetch_patients(filter_groups=filter_groups, filter_organization=filter_organization, filter_identifier_system=filter_identifier_system, filter_identifier_value=filter_identifier_value, filter_archived=filter_archived, filter_created_at=filter_created_at, filter_updated_at=filter_updated_at, page_number=page_number, page_size=page_size, page_limit=page_limit, page_cursor=page_cursor)
        print("The response of PatientApi->fetch_patients:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PatientApi->fetch_patients: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_groups** | **str**| Comma-separated list of group ids. Note that either &#x60;filter[group]&#x60; or &#x60;filter[organization]&#x60; must be specified. | [optional] 
 **filter_organization** | **str**| Fitbit Plus organization id. Note that either &#x60;filter[group]&#x60; or &#x60;filter[organization]&#x60; must be specified. | [optional] 
 **filter_identifier_system** | **str**| Identifier system (example: \&quot;MyEHR\&quot;) - requires a \&quot;filter[identifier][value]\&quot; parameter | [optional] 
 **filter_identifier_value** | **str**| Identifier value (example: \&quot;12345\&quot;) - requires a \&quot;filter[identifier][system]\&quot; parameter | [optional] 
 **filter_archived** | **bool**| If not specified, return all patients. If set to &#39;true&#39; return only archived patients, if set to &#39;false&#39;, return only patients who are not archived. | [optional] 
 **filter_created_at** | **str**| The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by &#x60;..&#x60;. Example for patients created in November 2017 (America/New_York): &#x60;filter[created_at]&#x3D;2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00&#x60;  | [optional] 
 **filter_updated_at** | **str**| The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by &#x60;..&#x60;. Example for patients updated in November 2017 (America/New_York): &#x60;filter[updated_at]&#x3D;2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00&#x60;  | [optional] 
 **page_number** | **int**| Page number | [optional] [default to 1]
 **page_size** | **int**| Page size | [optional] [default to 10]
 **page_limit** | **int**| Page limit | [optional] [default to 50]
 **page_cursor** | **str**| Page cursor | [optional] 

### Return type

[**FetchPatientsResponse**](FetchPatientsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**409** | Invalid Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_patient**
> UpdatePatientResponse update_patient(id, update_patient_request)

Update a patient

Update a patient record.

### Example


```python
import openapi_client
from openapi_client.models.update_patient_request import UpdatePatientRequest
from openapi_client.models.update_patient_response import UpdatePatientResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twinehealth.com/pub
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twinehealth.com/pub"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PatientApi(api_client)
    id = 'id_example' # str | Patient identifier
    update_patient_request = openapi_client.UpdatePatientRequest() # UpdatePatientRequest | 

    try:
        # Update a patient
        api_response = api_instance.update_patient(id, update_patient_request)
        print("The response of PatientApi->update_patient:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PatientApi->update_patient: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Patient identifier | 
 **update_patient_request** | [**UpdatePatientRequest**](UpdatePatientRequest.md)|  | 

### Return type

[**UpdatePatientResponse**](UpdatePatientResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**409** | Invalid Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **upsert_patient**
> CreatePatientResponse upsert_patient(upsert_patient_request)

Upsert patient

Create a new patient or update an existing patient

### Example


```python
import openapi_client
from openapi_client.models.create_patient_response import CreatePatientResponse
from openapi_client.models.upsert_patient_request import UpsertPatientRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twinehealth.com/pub
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twinehealth.com/pub"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PatientApi(api_client)
    upsert_patient_request = openapi_client.UpsertPatientRequest() # UpsertPatientRequest | 

    try:
        # Upsert patient
        api_response = api_instance.upsert_patient(upsert_patient_request)
        print("The response of PatientApi->upsert_patient:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PatientApi->upsert_patient: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **upsert_patient_request** | [**UpsertPatientRequest**](UpsertPatientRequest.md)|  | 

### Return type

[**CreatePatientResponse**](CreatePatientResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**409** | Invalid Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

