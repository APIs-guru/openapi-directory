# openapi_client.DefaultApi

All URIs are relative to *http://api.dataatwork.org/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**jobs_autocomplete_get**](DefaultApi.md#jobs_autocomplete_get) | **GET** /jobs/autocomplete | Job Title Autocomplete
[**jobs_get**](DefaultApi.md#jobs_get) | **GET** /jobs | Job Titles and Descriptions
[**jobs_id_get**](DefaultApi.md#jobs_id_get) | **GET** /jobs/{id} | Job Title and Description
[**jobs_id_related_jobs_get**](DefaultApi.md#jobs_id_related_jobs_get) | **GET** /jobs/{id}/related_jobs | Jobs Associated with a Job
[**jobs_id_related_skills_get**](DefaultApi.md#jobs_id_related_skills_get) | **GET** /jobs/{id}/related_skills | Skills Associated with a Job
[**jobs_normalize_get**](DefaultApi.md#jobs_normalize_get) | **GET** /jobs/normalize | Job Title Normalization
[**jobs_unusual_titles_get**](DefaultApi.md#jobs_unusual_titles_get) | **GET** /jobs/unusual_titles | Unusual Job Titles
[**skills_autocomplete_get**](DefaultApi.md#skills_autocomplete_get) | **GET** /skills/autocomplete | Skill Name Autocomplete
[**skills_get**](DefaultApi.md#skills_get) | **GET** /skills | Skill Names and Descriptions
[**skills_id_get**](DefaultApi.md#skills_id_get) | **GET** /skills/{id} | Skill Name and Description
[**skills_id_related_jobs_get**](DefaultApi.md#skills_id_related_jobs_get) | **GET** /skills/{id}/related_jobs | Jobs Associated with a Skill
[**skills_id_related_skills_get**](DefaultApi.md#skills_id_related_skills_get) | **GET** /skills/{id}/related_skills | Skills Associated with a Skill
[**skills_normalize_get**](DefaultApi.md#skills_normalize_get) | **GET** /skills/normalize | Skill Name Normalization


# **jobs_autocomplete_get**
> List[Job] jobs_autocomplete_get(begins_with=begins_with, contains=contains, ends_with=ends_with)

Job Title Autocomplete

Retrieves the names, descriptions, and UUIDs of all job titles matching a given search criteria.

### Example


```python
import openapi_client
from openapi_client.models.list[job] import List[Job]
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.dataatwork.org/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.dataatwork.org/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    begins_with = 'begins_with_example' # str | Find job titles beginning with the given text fragment (optional)
    contains = 'contains_example' # str | Find job titles containing the given text fragment (optional)
    ends_with = 'ends_with_example' # str | Find job titles ending with the given text fragment (optional)

    try:
        # Job Title Autocomplete
        api_response = api_instance.jobs_autocomplete_get(begins_with=begins_with, contains=contains, ends_with=ends_with)
        print("The response of DefaultApi->jobs_autocomplete_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->jobs_autocomplete_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **begins_with** | **str**| Find job titles beginning with the given text fragment | [optional] 
 **contains** | **str**| Find job titles containing the given text fragment | [optional] 
 **ends_with** | **str**| Find job titles ending with the given text fragment | [optional] 

### Return type

[**List[Job]**](Job.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A collection of jobs |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_get**
> List[Job] jobs_get(offset=offset, limit=limit)

Job Titles and Descriptions

Retrieves the names, descriptions, and UUIDs of all job titles.

### Example


```python
import openapi_client
from openapi_client.models.list[job] import List[Job]
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.dataatwork.org/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.dataatwork.org/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    offset = 56 # int | Pagination offset. Default is 0. (optional)
    limit = 56 # int | Maximum number of items per page. Default is 20 and cannot exceed 500. (optional)

    try:
        # Job Titles and Descriptions
        api_response = api_instance.jobs_get(offset=offset, limit=limit)
        print("The response of DefaultApi->jobs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->jobs_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **int**| Pagination offset. Default is 0. | [optional] 
 **limit** | **int**| Maximum number of items per page. Default is 20 and cannot exceed 500. | [optional] 

### Return type

[**List[Job]**](Job.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A collection of jobs |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_id_get**
> Job jobs_id_get(id, fips=fips)

Job Title and Description

Retrieves the name, description, and UUID of a job by specifying its O*NET SOC Code or UUID.

### Example


```python
import openapi_client
from openapi_client.models.job import Job
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.dataatwork.org/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.dataatwork.org/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | The O*NET SOC Code or UUID of the job title to retrieve
    fips = 'fips_example' # str | The FIPS Code of a Core-Based Statistical Area. Only return the job if present in this area (optional)

    try:
        # Job Title and Description
        api_response = api_instance.jobs_id_get(id, fips=fips)
        print("The response of DefaultApi->jobs_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->jobs_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The O*NET SOC Code or UUID of the job title to retrieve | 
 **fips** | **str**| The FIPS Code of a Core-Based Statistical Area. Only return the job if present in this area | [optional] 

### Return type

[**Job**](Job.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A job |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_id_related_jobs_get**
> JobRelatedJobs jobs_id_related_jobs_get(id)

Jobs Associated with a Job

Retrieves a collection of jobs associated with a specified job.

### Example


```python
import openapi_client
from openapi_client.models.job_related_jobs import JobRelatedJobs
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.dataatwork.org/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.dataatwork.org/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | The UUID of the job to retrieve related jobs for

    try:
        # Jobs Associated with a Job
        api_response = api_instance.jobs_id_related_jobs_get(id)
        print("The response of DefaultApi->jobs_id_related_jobs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->jobs_id_related_jobs_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The UUID of the job to retrieve related jobs for | 

### Return type

[**JobRelatedJobs**](JobRelatedJobs.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A job and its related jobs |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_id_related_skills_get**
> JobSkills jobs_id_related_skills_get(id)

Skills Associated with a Job

Retrieves a collection of skills associated with a specified job.

### Example


```python
import openapi_client
from openapi_client.models.job_skills import JobSkills
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.dataatwork.org/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.dataatwork.org/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | The UUID of the job to retrieve skills for

    try:
        # Skills Associated with a Job
        api_response = api_instance.jobs_id_related_skills_get(id)
        print("The response of DefaultApi->jobs_id_related_skills_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->jobs_id_related_skills_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The UUID of the job to retrieve skills for | 

### Return type

[**JobSkills**](JobSkills.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A job and its related skills |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_normalize_get**
> List[NormalizedJob] jobs_normalize_get(job_title, limit=limit)

Job Title Normalization

Retrieves the canonical job title for a synonymous job title

### Example


```python
import openapi_client
from openapi_client.models.normalized_job import NormalizedJob
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.dataatwork.org/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.dataatwork.org/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    job_title = 'job_title_example' # str | Find the canonical job title(s) for jobs matching the given text fragment
    limit = 56 # int | Maximumn number of job title synonyms to return. Default is 1 and cannot exceed 10. (optional)

    try:
        # Job Title Normalization
        api_response = api_instance.jobs_normalize_get(job_title, limit=limit)
        print("The response of DefaultApi->jobs_normalize_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->jobs_normalize_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_title** | **str**| Find the canonical job title(s) for jobs matching the given text fragment | 
 **limit** | **int**| Maximumn number of job title synonyms to return. Default is 1 and cannot exceed 10. | [optional] 

### Return type

[**List[NormalizedJob]**](NormalizedJob.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A collection of normalized jobs |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **jobs_unusual_titles_get**
> List[NormalizedJob] jobs_unusual_titles_get()

Unusual Job Titles

Retrieves a list of unusual job titles and the UUIDs of their canonical jobs.

### Example


```python
import openapi_client
from openapi_client.models.normalized_job import NormalizedJob
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.dataatwork.org/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.dataatwork.org/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)

    try:
        # Unusual Job Titles
        api_response = api_instance.jobs_unusual_titles_get()
        print("The response of DefaultApi->jobs_unusual_titles_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->jobs_unusual_titles_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[NormalizedJob]**](NormalizedJob.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A collection of normalized jobs |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **skills_autocomplete_get**
> SkillJobs skills_autocomplete_get(begins_with=begins_with, contains=contains, ends_with=ends_with)

Skill Name Autocomplete

Retrieves the names, descriptions, and UUIDs of all skills matching a given search criteria.

### Example


```python
import openapi_client
from openapi_client.models.skill_jobs import SkillJobs
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.dataatwork.org/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.dataatwork.org/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    begins_with = 'begins_with_example' # str | Find skill names beginning with the given text fragment (optional)
    contains = 'contains_example' # str | Find skill names containing the given text fragment (optional)
    ends_with = 'ends_with_example' # str | Find skill names ending with the given text fragment (optional)

    try:
        # Skill Name Autocomplete
        api_response = api_instance.skills_autocomplete_get(begins_with=begins_with, contains=contains, ends_with=ends_with)
        print("The response of DefaultApi->skills_autocomplete_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->skills_autocomplete_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **begins_with** | **str**| Find skill names beginning with the given text fragment | [optional] 
 **contains** | **str**| Find skill names containing the given text fragment | [optional] 
 **ends_with** | **str**| Find skill names ending with the given text fragment | [optional] 

### Return type

[**SkillJobs**](SkillJobs.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A collection of skills |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **skills_get**
> List[Skill] skills_get(offset=offset, limit=limit)

Skill Names and Descriptions

Retrieve the names, descriptions, and UUIDs of all skills.

### Example


```python
import openapi_client
from openapi_client.models.list[skill] import List[Skill]
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.dataatwork.org/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.dataatwork.org/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    offset = 56 # int | Pagination offset. Default is 0. (optional)
    limit = 56 # int | Maximum number of items per page. Default is 20 and cannot exceed 500. (optional)

    try:
        # Skill Names and Descriptions
        api_response = api_instance.skills_get(offset=offset, limit=limit)
        print("The response of DefaultApi->skills_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->skills_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offset** | **int**| Pagination offset. Default is 0. | [optional] 
 **limit** | **int**| Maximum number of items per page. Default is 20 and cannot exceed 500. | [optional] 

### Return type

[**List[Skill]**](Skill.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A collection of skills |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **skills_id_get**
> Skill skills_id_get(id)

Skill Name and Description

Retrieves the name, description, and UUID of a job by specifying its UUID.

### Example


```python
import openapi_client
from openapi_client.models.skill import Skill
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.dataatwork.org/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.dataatwork.org/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | The UUID of the skill name to retrieve

    try:
        # Skill Name and Description
        api_response = api_instance.skills_id_get(id)
        print("The response of DefaultApi->skills_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->skills_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The UUID of the skill name to retrieve | 

### Return type

[**Skill**](Skill.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A skill |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **skills_id_related_jobs_get**
> SkillJobs skills_id_related_jobs_get(id)

Jobs Associated with a Skill

Retrieves a collection of jobs associated with a specified skill.

### Example


```python
import openapi_client
from openapi_client.models.skill_jobs import SkillJobs
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.dataatwork.org/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.dataatwork.org/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | The UUID of the skill to retrieve jobs for

    try:
        # Jobs Associated with a Skill
        api_response = api_instance.skills_id_related_jobs_get(id)
        print("The response of DefaultApi->skills_id_related_jobs_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->skills_id_related_jobs_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The UUID of the skill to retrieve jobs for | 

### Return type

[**SkillJobs**](SkillJobs.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A skill and its related jobs |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **skills_id_related_skills_get**
> SkillRelatedSkills skills_id_related_skills_get(id)

Skills Associated with a Skill

Retrieves a collection of skills associated with a specified skill.

### Example


```python
import openapi_client
from openapi_client.models.skill_related_skills import SkillRelatedSkills
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.dataatwork.org/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.dataatwork.org/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    id = 'id_example' # str | The UUID of the skill to retrieve related skills for

    try:
        # Skills Associated with a Skill
        api_response = api_instance.skills_id_related_skills_get(id)
        print("The response of DefaultApi->skills_id_related_skills_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->skills_id_related_skills_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The UUID of the skill to retrieve related skills for | 

### Return type

[**SkillRelatedSkills**](SkillRelatedSkills.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A skill and its related skills |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **skills_normalize_get**
> List[NormalizedSkill] skills_normalize_get(skill_name)

Skill Name Normalization

Retrieves the canonical skill name for a synonymous skill name

### Example


```python
import openapi_client
from openapi_client.models.normalized_skill import NormalizedSkill
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.dataatwork.org/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.dataatwork.org/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DefaultApi(api_client)
    skill_name = 'skill_name_example' # str | Find the canonical skill name(s) for skills matching the given text fragment

    try:
        # Skill Name Normalization
        api_response = api_instance.skills_normalize_get(skill_name)
        print("The response of DefaultApi->skills_normalize_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->skills_normalize_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skill_name** | **str**| Find the canonical skill name(s) for skills matching the given text fragment | 

### Return type

[**List[NormalizedSkill]**](NormalizedSkill.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A collection of normalized skills |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

