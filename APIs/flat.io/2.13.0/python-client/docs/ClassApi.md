# openapi_client.ClassApi

All URIs are relative to *https://api.flat.io/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activate_class**](ClassApi.md#activate_class) | **POST** /classes/{class}/activate | Activate the class
[**add_class_user**](ClassApi.md#add_class_user) | **PUT** /classes/{class}/users/{user} | Add a user to the class
[**archive_assignment**](ClassApi.md#archive_assignment) | **POST** /classes/{class}/assignments/{assignment}/archive | Archive the assignment
[**archive_class**](ClassApi.md#archive_class) | **POST** /classes/{class}/archive | Archive the class
[**copy_assignment**](ClassApi.md#copy_assignment) | **POST** /classes/{class}/assignments/{assignment}/copy | Copy an assignment
[**create_assignment**](ClassApi.md#create_assignment) | **POST** /classes/{class}/assignments | Assignment creation
[**create_class**](ClassApi.md#create_class) | **POST** /classes | Create a new class
[**create_submission**](ClassApi.md#create_submission) | **PUT** /classes/{class}/assignments/{assignment}/submissions | Create or edit a submission
[**delete_class_user**](ClassApi.md#delete_class_user) | **DELETE** /classes/{class}/users/{user} | Remove a user from the class
[**delete_submission**](ClassApi.md#delete_submission) | **DELETE** /classes/{class}/assignments/{assignment}/submissions/{submission} | Delete a submission
[**delete_submission_comment**](ClassApi.md#delete_submission_comment) | **DELETE** /classes/{class}/assignments/{assignment}/submissions/{submission}/comments/{comment} | Delete a feedback comment to a submission
[**edit_submission**](ClassApi.md#edit_submission) | **PUT** /classes/{class}/assignments/{assignment}/submissions/{submission} | Edit a submission
[**enroll_class**](ClassApi.md#enroll_class) | **POST** /classes/enroll/{enrollmentCode} | Join a class
[**export_submissions_reviews_as_csv**](ClassApi.md#export_submissions_reviews_as_csv) | **GET** /classes/{class}/assignments/{assignment}/submissions/csv | CSV Grades exports
[**export_submissions_reviews_as_excel**](ClassApi.md#export_submissions_reviews_as_excel) | **GET** /classes/{class}/assignments/{assignment}/submissions/excel | Excel Grades exports
[**fork_score_0**](ClassApi.md#fork_score_0) | **POST** /scores/{score}/fork | Fork a score
[**get_class**](ClassApi.md#get_class) | **GET** /classes/{class} | Get the details of a single class
[**get_score_submissions_0**](ClassApi.md#get_score_submissions_0) | **GET** /scores/{score}/submissions | List submissions related to the score
[**get_submission**](ClassApi.md#get_submission) | **GET** /classes/{class}/assignments/{assignment}/submissions/{submission} | Get a student submission
[**get_submission_comments**](ClassApi.md#get_submission_comments) | **GET** /classes/{class}/assignments/{assignment}/submissions/{submission}/comments | List the feedback comments of a submission
[**get_submission_history**](ClassApi.md#get_submission_history) | **GET** /classes/{class}/assignments/{assignment}/submissions/{submission}/history | Get the history of the submission
[**get_submissions**](ClassApi.md#get_submissions) | **GET** /classes/{class}/assignments/{assignment}/submissions | List the students&#39; submissions
[**list_assignments**](ClassApi.md#list_assignments) | **GET** /classes/{class}/assignments | Assignments listing
[**list_class_student_submissions**](ClassApi.md#list_class_student_submissions) | **GET** /classes/{class}/students/{user}/submissions | List the submissions for a student
[**list_classes**](ClassApi.md#list_classes) | **GET** /classes | List the classes available for the current user
[**post_submission_comment**](ClassApi.md#post_submission_comment) | **POST** /classes/{class}/assignments/{assignment}/submissions/{submission}/comments | Add a feedback comment to a submission
[**unarchive_assignment**](ClassApi.md#unarchive_assignment) | **DELETE** /classes/{class}/assignments/{assignment}/archive | Unarchive the assignment.
[**unarchive_class**](ClassApi.md#unarchive_class) | **DELETE** /classes/{class}/archive | Unarchive the class
[**update_class**](ClassApi.md#update_class) | **PUT** /classes/{class} | Update the class
[**update_submission_comment**](ClassApi.md#update_submission_comment) | **PUT** /classes/{class}/assignments/{assignment}/submissions/{submission}/comments/{comment} | Update a feedback comment to a submission


# **activate_class**
> ClassDetails activate_class(var_class)

Activate the class

Mark the class as `active`. This is mainly used for classes synchronized from Clever that are initially with an `inactive` state and hidden in the UI. 

### Example

* OAuth Authentication (OAuth2):

```python
import openapi_client
from openapi_client.models.class_details import ClassDetails
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flat.io/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flat.io/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ClassApi(api_client)
    var_class = 'var_class_example' # str | Unique identifier of the class

    try:
        # Activate the class
        api_response = api_instance.activate_class(var_class)
        print("The response of ClassApi->activate_class:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClassApi->activate_class: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_class** | **str**| Unique identifier of the class | 

### Return type

[**ClassDetails**](ClassDetails.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The class details |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_class_user**
> add_class_user(var_class, user)

Add a user to the class

This method can be used by a teacher of the class to enroll another Flat user into the class.  Only users that are part of your Organization can be enrolled in a class of this same Organization.  When enrolling a user in the class, Flat will automatically add this user to the corresponding Class group, based on this role in the Organization. 

### Example

* OAuth Authentication (OAuth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flat.io/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flat.io/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ClassApi(api_client)
    var_class = 'var_class_example' # str | Unique identifier of the class
    user = 'user_example' # str | Unique identifier of the user

    try:
        # Add a user to the class
        api_instance.add_class_user(var_class, user)
    except Exception as e:
        print("Exception when calling ClassApi->add_class_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_class** | **str**| Unique identifier of the class | 
 **user** | **str**| Unique identifier of the user | 

### Return type

void (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The user has been added to the class |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **archive_assignment**
> Assignment archive_assignment(var_class, assignment)

Archive the assignment

Archive the assignment 

### Example

* OAuth Authentication (OAuth2):

```python
import openapi_client
from openapi_client.models.assignment import Assignment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flat.io/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flat.io/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ClassApi(api_client)
    var_class = 'var_class_example' # str | Unique identifier of the class
    assignment = 'assignment_example' # str | Unique identifier of the assignment

    try:
        # Archive the assignment
        api_response = api_instance.archive_assignment(var_class, assignment)
        print("The response of ClassApi->archive_assignment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClassApi->archive_assignment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_class** | **str**| Unique identifier of the class | 
 **assignment** | **str**| Unique identifier of the assignment | 

### Return type

[**Assignment**](Assignment.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The assignment details |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **archive_class**
> ClassDetails archive_class(var_class)

Archive the class

Mark the class as `archived`. When this course is synchronized with another app, like Google Classroom, this state will be automatically be updated. 

### Example

* OAuth Authentication (OAuth2):

```python
import openapi_client
from openapi_client.models.class_details import ClassDetails
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flat.io/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flat.io/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ClassApi(api_client)
    var_class = 'var_class_example' # str | Unique identifier of the class

    try:
        # Archive the class
        api_response = api_instance.archive_class(var_class)
        print("The response of ClassApi->archive_class:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClassApi->archive_class: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_class** | **str**| Unique identifier of the class | 

### Return type

[**ClassDetails**](ClassDetails.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The class details |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **copy_assignment**
> Assignment copy_assignment(var_class, assignment, body)

Copy an assignment

Copy an assignment to a specified class.  If the original assignment has a due date in the past, this new assingment will be created without a due date.  If the new class is synchronized with an external app (e.g. Google Classroom), the copied assignment will also be posted on the external app. 

### Example

* OAuth Authentication (OAuth2):

```python
import openapi_client
from openapi_client.models.assignment import Assignment
from openapi_client.models.assignment_copy import AssignmentCopy
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flat.io/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flat.io/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ClassApi(api_client)
    var_class = 'var_class_example' # str | Unique identifier of the class
    assignment = 'assignment_example' # str | Unique identifier of the assignment
    body = openapi_client.AssignmentCopy() # AssignmentCopy | 

    try:
        # Copy an assignment
        api_response = api_instance.copy_assignment(var_class, assignment, body)
        print("The response of ClassApi->copy_assignment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClassApi->copy_assignment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_class** | **str**| Unique identifier of the class | 
 **assignment** | **str**| Unique identifier of the assignment | 
 **body** | [**AssignmentCopy**](AssignmentCopy.md)|  | 

### Return type

[**Assignment**](Assignment.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The new created assingment |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_assignment**
> Assignment create_assignment(var_class, body=body)

Assignment creation

Use this method as a teacher to create and post a new assignment to a class.  If the class is synchronized with Google Classroom, the assignment will be automatically posted to your Classroom course. 

### Example

* OAuth Authentication (OAuth2):

```python
import openapi_client
from openapi_client.models.assignment import Assignment
from openapi_client.models.assignment_creation import AssignmentCreation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flat.io/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flat.io/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ClassApi(api_client)
    var_class = 'var_class_example' # str | Unique identifier of the class
    body = openapi_client.AssignmentCreation() # AssignmentCreation |  (optional)

    try:
        # Assignment creation
        api_response = api_instance.create_assignment(var_class, body=body)
        print("The response of ClassApi->create_assignment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClassApi->create_assignment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_class** | **str**| Unique identifier of the class | 
 **body** | [**AssignmentCreation**](AssignmentCreation.md)|  | [optional] 

### Return type

[**Assignment**](Assignment.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The assignment has been created |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_class**
> ClassDetails create_class(body)

Create a new class

Classrooms on Flat allow you to create activities with assignments and post content to a specific group.  When creating a class, Flat automatically creates two groups: one for the teachers of the course, one for the students. The creator of this class is automatically added to the teachers group.  If the classsroom is synchronized with another application like Google Classroom, some of the meta information will automatically be updated.  You can add users to this class using `PUT /classes/{class}/users/{user}`, they will automatically added to the group based on their role on Flat. Users can also enroll themselves to this class using `POST /classes/enroll/{enrollmentCode}` and the `enrollmentCode` returned in the `ClassDetails` response. 

### Example

* OAuth Authentication (OAuth2):

```python
import openapi_client
from openapi_client.models.class_creation import ClassCreation
from openapi_client.models.class_details import ClassDetails
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flat.io/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flat.io/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ClassApi(api_client)
    body = openapi_client.ClassCreation() # ClassCreation | 

    try:
        # Create a new class
        api_response = api_instance.create_class(body)
        print("The response of ClassApi->create_class:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClassApi->create_class: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ClassCreation**](ClassCreation.md)|  | 

### Return type

[**ClassDetails**](ClassDetails.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The new class details |  -  |
**402** | Account overquota |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_submission**
> AssignmentSubmission create_submission(var_class, assignment, body)

Create or edit a submission

Use this method as a student to create, update and submit a submission related to an assignment. Students can only set `attachments` and `submit`. Teachers can use `PUT /classes/{class}/assignments/{assignment}/submissions/{submission}` to update a submission by id. 

### Example

* OAuth Authentication (OAuth2):

```python
import openapi_client
from openapi_client.models.assignment_submission import AssignmentSubmission
from openapi_client.models.assignment_submission_update import AssignmentSubmissionUpdate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flat.io/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flat.io/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ClassApi(api_client)
    var_class = 'var_class_example' # str | Unique identifier of the class
    assignment = 'assignment_example' # str | Unique identifier of the assignment
    body = openapi_client.AssignmentSubmissionUpdate() # AssignmentSubmissionUpdate | 

    try:
        # Create or edit a submission
        api_response = api_instance.create_submission(var_class, assignment, body)
        print("The response of ClassApi->create_submission:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClassApi->create_submission: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_class** | **str**| Unique identifier of the class | 
 **assignment** | **str**| Unique identifier of the assignment | 
 **body** | [**AssignmentSubmissionUpdate**](AssignmentSubmissionUpdate.md)|  | 

### Return type

[**AssignmentSubmission**](AssignmentSubmission.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The submission |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_class_user**
> delete_class_user(var_class, user)

Remove a user from the class

This method can be used by a teacher to remove a user from the class, or by a student to leave the classroom.  Warning: Removing a user from the class will remove the associated resources, including the submissions and feedback related to these submissions. 

### Example

* OAuth Authentication (OAuth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flat.io/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flat.io/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ClassApi(api_client)
    var_class = 'var_class_example' # str | Unique identifier of the class
    user = 'user_example' # str | Unique identifier of the user

    try:
        # Remove a user from the class
        api_instance.delete_class_user(var_class, user)
    except Exception as e:
        print("Exception when calling ClassApi->delete_class_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_class** | **str**| Unique identifier of the class | 
 **user** | **str**| Unique identifier of the user | 

### Return type

void (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The user has been removed from the class |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_submission**
> delete_submission(var_class, assignment, submission)

Delete a submission

Use this method as a teacher to delete a submission and allow student to start over the assignment 

### Example

* OAuth Authentication (OAuth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flat.io/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flat.io/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ClassApi(api_client)
    var_class = 'var_class_example' # str | Unique identifier of the class
    assignment = 'assignment_example' # str | Unique identifier of the assignment
    submission = 'submission_example' # str | Unique identifier of the submission

    try:
        # Delete a submission
        api_instance.delete_submission(var_class, assignment, submission)
    except Exception as e:
        print("Exception when calling ClassApi->delete_submission: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_class** | **str**| Unique identifier of the class | 
 **assignment** | **str**| Unique identifier of the assignment | 
 **submission** | **str**| Unique identifier of the submission | 

### Return type

void (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The submission has been deleted |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_submission_comment**
> delete_submission_comment(var_class, assignment, submission, comment)

Delete a feedback comment to a submission

### Example

* OAuth Authentication (OAuth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flat.io/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flat.io/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ClassApi(api_client)
    var_class = 'var_class_example' # str | Unique identifier of the class
    assignment = 'assignment_example' # str | Unique identifier of the assignment
    submission = 'submission_example' # str | Unique identifier of the submission
    comment = 'comment_example' # str | Unique identifier of the comment

    try:
        # Delete a feedback comment to a submission
        api_instance.delete_submission_comment(var_class, assignment, submission, comment)
    except Exception as e:
        print("Exception when calling ClassApi->delete_submission_comment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_class** | **str**| Unique identifier of the class | 
 **assignment** | **str**| Unique identifier of the assignment | 
 **submission** | **str**| Unique identifier of the submission | 
 **comment** | **str**| Unique identifier of the comment | 

### Return type

void (empty response body)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The comment has been deleted |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **edit_submission**
> AssignmentSubmission edit_submission(var_class, assignment, submission, body)

Edit a submission

Use this method as a teacher to update the different submission and give feedback. Teachers can only set `return`, `draftGrade` and `grade` 

### Example

* OAuth Authentication (OAuth2):

```python
import openapi_client
from openapi_client.models.assignment_submission import AssignmentSubmission
from openapi_client.models.assignment_submission_update import AssignmentSubmissionUpdate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flat.io/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flat.io/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ClassApi(api_client)
    var_class = 'var_class_example' # str | Unique identifier of the class
    assignment = 'assignment_example' # str | Unique identifier of the assignment
    submission = 'submission_example' # str | Unique identifier of the submission
    body = openapi_client.AssignmentSubmissionUpdate() # AssignmentSubmissionUpdate | 

    try:
        # Edit a submission
        api_response = api_instance.edit_submission(var_class, assignment, submission, body)
        print("The response of ClassApi->edit_submission:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClassApi->edit_submission: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_class** | **str**| Unique identifier of the class | 
 **assignment** | **str**| Unique identifier of the assignment | 
 **submission** | **str**| Unique identifier of the submission | 
 **body** | [**AssignmentSubmissionUpdate**](AssignmentSubmissionUpdate.md)|  | 

### Return type

[**AssignmentSubmission**](AssignmentSubmission.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The submission |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enroll_class**
> ClassDetails enroll_class(enrollment_code)

Join a class

Use this method to join a class using an enrollment code given one of the teacher of this class. This code is also available in the `ClassDetails` returned to the teachers when creating the class or listing / fetching a specific class.  Flat will automatically add the user to the corresponding class group based on this role in the organization. 

### Example

* OAuth Authentication (OAuth2):

```python
import openapi_client
from openapi_client.models.class_details import ClassDetails
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flat.io/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flat.io/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ClassApi(api_client)
    enrollment_code = 'enrollment_code_example' # str | The enrollment code, available to the teacher in `ClassDetails` 

    try:
        # Join a class
        api_response = api_instance.enroll_class(enrollment_code)
        print("The response of ClassApi->enroll_class:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClassApi->enroll_class: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **enrollment_code** | **str**| The enrollment code, available to the teacher in &#x60;ClassDetails&#x60;  | 

### Return type

[**ClassDetails**](ClassDetails.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The new class details |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **export_submissions_reviews_as_csv**
> bytearray export_submissions_reviews_as_csv(var_class, assignment)

CSV Grades exports

Export list of submissions grades to a CSV file

### Example

* OAuth Authentication (OAuth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flat.io/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flat.io/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ClassApi(api_client)
    var_class = 'var_class_example' # str | Unique identifier of the class
    assignment = 'assignment_example' # str | Unique identifier of the assignment

    try:
        # CSV Grades exports
        api_response = api_instance.export_submissions_reviews_as_csv(var_class, assignment)
        print("The response of ClassApi->export_submissions_reviews_as_csv:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClassApi->export_submissions_reviews_as_csv: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_class** | **str**| Unique identifier of the class | 
 **assignment** | **str**| Unique identifier of the assignment | 

### Return type

**bytearray**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/csv

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of submissions |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **export_submissions_reviews_as_excel**
> bytearray export_submissions_reviews_as_excel(var_class, assignment)

Excel Grades exports

Export list of submissions grades to an Excel file

### Example

* OAuth Authentication (OAuth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flat.io/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flat.io/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ClassApi(api_client)
    var_class = 'var_class_example' # str | Unique identifier of the class
    assignment = 'assignment_example' # str | Unique identifier of the assignment

    try:
        # Excel Grades exports
        api_response = api_instance.export_submissions_reviews_as_excel(var_class, assignment)
        print("The response of ClassApi->export_submissions_reviews_as_excel:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClassApi->export_submissions_reviews_as_excel: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_class** | **str**| Unique identifier of the class | 
 **assignment** | **str**| Unique identifier of the assignment | 

### Return type

**bytearray**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of submissions |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fork_score_0**
> ScoreDetails fork_score_0(score, body, sharing_key=sharing_key)

Fork a score

This API call will make a copy of the last revision of the specified score and create a new score. The copy of the score will have a privacy set to `private`.  When using a [Flat for Education](https://flat.io/edu) account, the inline and contextualized comments will be accessible in the child document. 

### Example

* OAuth Authentication (OAuth2):

```python
import openapi_client
from openapi_client.models.score_details import ScoreDetails
from openapi_client.models.score_fork import ScoreFork
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flat.io/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flat.io/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ClassApi(api_client)
    score = 'score_example' # str | Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`). 
    body = openapi_client.ScoreFork() # ScoreFork | 
    sharing_key = 'sharing_key_example' # str | This sharing key must be specified to access to a score or collection with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.  (optional)

    try:
        # Fork a score
        api_response = api_instance.fork_score_0(score, body, sharing_key=sharing_key)
        print("The response of ClassApi->fork_score_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClassApi->fork_score_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **score** | **str**| Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. &#x60;ScoreDetails.id&#x60;) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with &#x60;drive-&#x60; (e.g. &#x60;drive-0B000000000&#x60;).  | 
 **body** | [**ScoreFork**](ScoreFork.md)|  | 
 **sharing_key** | **str**| This sharing key must be specified to access to a score or collection with a &#x60;privacy&#x60; mode set to &#x60;privateLink&#x60; and the current user is not a collaborator of the document.  | [optional] 

### Return type

[**ScoreDetails**](ScoreDetails.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Score details |  -  |
**402** | Account overquota |  -  |
**403** | Not granted to access to this score |  -  |
**404** | Score not found |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_class**
> ClassDetails get_class(var_class)

Get the details of a single class

### Example

* OAuth Authentication (OAuth2):

```python
import openapi_client
from openapi_client.models.class_details import ClassDetails
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flat.io/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flat.io/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ClassApi(api_client)
    var_class = 'var_class_example' # str | Unique identifier of the class

    try:
        # Get the details of a single class
        api_response = api_instance.get_class(var_class)
        print("The response of ClassApi->get_class:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClassApi->get_class: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_class** | **str**| Unique identifier of the class | 

### Return type

[**ClassDetails**](ClassDetails.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The new class details |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_score_submissions_0**
> List[AssignmentSubmission] get_score_submissions_0(score)

List submissions related to the score

This API call will list the different assignments submissions where the score is attached. This method can be used by anyone that are part of the organization and have at least read access to the document. 

### Example

* OAuth Authentication (OAuth2):

```python
import openapi_client
from openapi_client.models.assignment_submission import AssignmentSubmission
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flat.io/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flat.io/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ClassApi(api_client)
    score = 'score_example' # str | Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`). 

    try:
        # List submissions related to the score
        api_response = api_instance.get_score_submissions_0(score)
        print("The response of ClassApi->get_score_submissions_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClassApi->get_score_submissions_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **score** | **str**| Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. &#x60;ScoreDetails.id&#x60;) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with &#x60;drive-&#x60; (e.g. &#x60;drive-0B000000000&#x60;).  | 

### Return type

[**List[AssignmentSubmission]**](AssignmentSubmission.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of submissions |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_submission**
> AssignmentSubmission get_submission(var_class, assignment, submission)

Get a student submission

### Example

* OAuth Authentication (OAuth2):

```python
import openapi_client
from openapi_client.models.assignment_submission import AssignmentSubmission
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flat.io/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flat.io/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ClassApi(api_client)
    var_class = 'var_class_example' # str | Unique identifier of the class
    assignment = 'assignment_example' # str | Unique identifier of the assignment
    submission = 'submission_example' # str | Unique identifier of the submission

    try:
        # Get a student submission
        api_response = api_instance.get_submission(var_class, assignment, submission)
        print("The response of ClassApi->get_submission:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClassApi->get_submission: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_class** | **str**| Unique identifier of the class | 
 **assignment** | **str**| Unique identifier of the assignment | 
 **submission** | **str**| Unique identifier of the submission | 

### Return type

[**AssignmentSubmission**](AssignmentSubmission.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A submission |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_submission_comments**
> List[AssignmentSubmissionComment] get_submission_comments(var_class, assignment, submission)

List the feedback comments of a submission

### Example

* OAuth Authentication (OAuth2):

```python
import openapi_client
from openapi_client.models.assignment_submission_comment import AssignmentSubmissionComment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flat.io/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flat.io/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ClassApi(api_client)
    var_class = 'var_class_example' # str | Unique identifier of the class
    assignment = 'assignment_example' # str | Unique identifier of the assignment
    submission = 'submission_example' # str | Unique identifier of the submission

    try:
        # List the feedback comments of a submission
        api_response = api_instance.get_submission_comments(var_class, assignment, submission)
        print("The response of ClassApi->get_submission_comments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClassApi->get_submission_comments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_class** | **str**| Unique identifier of the class | 
 **assignment** | **str**| Unique identifier of the assignment | 
 **submission** | **str**| Unique identifier of the submission | 

### Return type

[**List[AssignmentSubmissionComment]**](AssignmentSubmissionComment.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The comments of the score |  -  |
**403** | Not granted to access to this submission |  -  |
**404** | Submission not found |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_submission_history**
> List[AssignmentSubmissionHistory] get_submission_history(var_class, assignment, submission)

Get the history of the submission

For teachers only. Returns a detailed history of the submission. This currently includes state and grade histories. 

### Example

* OAuth Authentication (OAuth2):

```python
import openapi_client
from openapi_client.models.assignment_submission_history import AssignmentSubmissionHistory
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flat.io/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flat.io/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ClassApi(api_client)
    var_class = 'var_class_example' # str | Unique identifier of the class
    assignment = 'assignment_example' # str | Unique identifier of the assignment
    submission = 'submission_example' # str | Unique identifier of the submission

    try:
        # Get the history of the submission
        api_response = api_instance.get_submission_history(var_class, assignment, submission)
        print("The response of ClassApi->get_submission_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClassApi->get_submission_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_class** | **str**| Unique identifier of the class | 
 **assignment** | **str**| Unique identifier of the assignment | 
 **submission** | **str**| Unique identifier of the submission | 

### Return type

[**List[AssignmentSubmissionHistory]**](AssignmentSubmissionHistory.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The history of the submission |  -  |
**403** | Not granted to access to this submission |  -  |
**404** | Submission not found |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_submissions**
> List[AssignmentSubmission] get_submissions(var_class, assignment)

List the students' submissions

### Example

* OAuth Authentication (OAuth2):

```python
import openapi_client
from openapi_client.models.assignment_submission import AssignmentSubmission
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flat.io/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flat.io/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ClassApi(api_client)
    var_class = 'var_class_example' # str | Unique identifier of the class
    assignment = 'assignment_example' # str | Unique identifier of the assignment

    try:
        # List the students' submissions
        api_response = api_instance.get_submissions(var_class, assignment)
        print("The response of ClassApi->get_submissions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClassApi->get_submissions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_class** | **str**| Unique identifier of the class | 
 **assignment** | **str**| Unique identifier of the assignment | 

### Return type

[**List[AssignmentSubmission]**](AssignmentSubmission.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The submissions |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_assignments**
> List[Assignment] list_assignments(var_class)

Assignments listing

### Example

* OAuth Authentication (OAuth2):

```python
import openapi_client
from openapi_client.models.assignment import Assignment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flat.io/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flat.io/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ClassApi(api_client)
    var_class = 'var_class_example' # str | Unique identifier of the class

    try:
        # Assignments listing
        api_response = api_instance.list_assignments(var_class)
        print("The response of ClassApi->list_assignments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClassApi->list_assignments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_class** | **str**| Unique identifier of the class | 

### Return type

[**List[Assignment]**](Assignment.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of assignments for the class |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_class_student_submissions**
> List[AssignmentSubmission] list_class_student_submissions(var_class, user)

List the submissions for a student

Use this method as a teacher to list all the assignment submissions sent by a student of the class 

### Example

* OAuth Authentication (OAuth2):

```python
import openapi_client
from openapi_client.models.assignment_submission import AssignmentSubmission
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flat.io/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flat.io/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ClassApi(api_client)
    var_class = 'var_class_example' # str | Unique identifier of the class
    user = 'user_example' # str | Unique identifier of the user

    try:
        # List the submissions for a student
        api_response = api_instance.list_class_student_submissions(var_class, user)
        print("The response of ClassApi->list_class_student_submissions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClassApi->list_class_student_submissions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_class** | **str**| Unique identifier of the class | 
 **user** | **str**| Unique identifier of the user | 

### Return type

[**List[AssignmentSubmission]**](AssignmentSubmission.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of submissions |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_classes**
> List[ClassDetails] list_classes(state=state)

List the classes available for the current user

### Example

* OAuth Authentication (OAuth2):

```python
import openapi_client
from openapi_client.models.class_details import ClassDetails
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flat.io/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flat.io/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ClassApi(api_client)
    state = active # str | Filter the classes by state (optional) (default to active)

    try:
        # List the classes available for the current user
        api_response = api_instance.list_classes(state=state)
        print("The response of ClassApi->list_classes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClassApi->list_classes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **state** | **str**| Filter the classes by state | [optional] [default to active]

### Return type

[**List[ClassDetails]**](ClassDetails.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of classes |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_submission_comment**
> AssignmentSubmissionComment post_submission_comment(var_class, assignment, submission, assignment_submission_comment_creation)

Add a feedback comment to a submission

### Example

* OAuth Authentication (OAuth2):

```python
import openapi_client
from openapi_client.models.assignment_submission_comment import AssignmentSubmissionComment
from openapi_client.models.assignment_submission_comment_creation import AssignmentSubmissionCommentCreation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flat.io/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flat.io/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ClassApi(api_client)
    var_class = 'var_class_example' # str | Unique identifier of the class
    assignment = 'assignment_example' # str | Unique identifier of the assignment
    submission = 'submission_example' # str | Unique identifier of the submission
    assignment_submission_comment_creation = openapi_client.AssignmentSubmissionCommentCreation() # AssignmentSubmissionCommentCreation | 

    try:
        # Add a feedback comment to a submission
        api_response = api_instance.post_submission_comment(var_class, assignment, submission, assignment_submission_comment_creation)
        print("The response of ClassApi->post_submission_comment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClassApi->post_submission_comment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_class** | **str**| Unique identifier of the class | 
 **assignment** | **str**| Unique identifier of the assignment | 
 **submission** | **str**| Unique identifier of the submission | 
 **assignment_submission_comment_creation** | [**AssignmentSubmissionCommentCreation**](AssignmentSubmissionCommentCreation.md)|  | 

### Return type

[**AssignmentSubmissionComment**](AssignmentSubmissionComment.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The comment |  -  |
**403** | Not granted to access to this submission |  -  |
**404** | Submission not found |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unarchive_assignment**
> Assignment unarchive_assignment(var_class, assignment)

Unarchive the assignment.

Mark the assignment as `active`. 

### Example

* OAuth Authentication (OAuth2):

```python
import openapi_client
from openapi_client.models.assignment import Assignment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flat.io/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flat.io/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ClassApi(api_client)
    var_class = 'var_class_example' # str | Unique identifier of the class
    assignment = 'assignment_example' # str | Unique identifier of the assignment

    try:
        # Unarchive the assignment.
        api_response = api_instance.unarchive_assignment(var_class, assignment)
        print("The response of ClassApi->unarchive_assignment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClassApi->unarchive_assignment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_class** | **str**| Unique identifier of the class | 
 **assignment** | **str**| Unique identifier of the assignment | 

### Return type

[**Assignment**](Assignment.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The assignment details |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **unarchive_class**
> ClassDetails unarchive_class(var_class)

Unarchive the class

Mark the class as `active`. When this course is synchronized with another app, like Google Classroom, this state will be automatically be updated. 

### Example

* OAuth Authentication (OAuth2):

```python
import openapi_client
from openapi_client.models.class_details import ClassDetails
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flat.io/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flat.io/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ClassApi(api_client)
    var_class = 'var_class_example' # str | Unique identifier of the class

    try:
        # Unarchive the class
        api_response = api_instance.unarchive_class(var_class)
        print("The response of ClassApi->unarchive_class:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClassApi->unarchive_class: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_class** | **str**| Unique identifier of the class | 

### Return type

[**ClassDetails**](ClassDetails.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The class details |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_class**
> ClassDetails update_class(var_class, body=body)

Update the class

Update the meta information of the class 

### Example

* OAuth Authentication (OAuth2):

```python
import openapi_client
from openapi_client.models.class_details import ClassDetails
from openapi_client.models.class_update import ClassUpdate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flat.io/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flat.io/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ClassApi(api_client)
    var_class = 'var_class_example' # str | Unique identifier of the class
    body = openapi_client.ClassUpdate() # ClassUpdate | Details of the Class (optional)

    try:
        # Update the class
        api_response = api_instance.update_class(var_class, body=body)
        print("The response of ClassApi->update_class:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClassApi->update_class: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_class** | **str**| Unique identifier of the class | 
 **body** | [**ClassUpdate**](ClassUpdate.md)| Details of the Class | [optional] 

### Return type

[**ClassDetails**](ClassDetails.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The new class details |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_submission_comment**
> AssignmentSubmissionComment update_submission_comment(var_class, assignment, submission, comment, assignment_submission_comment_creation)

Update a feedback comment to a submission

### Example

* OAuth Authentication (OAuth2):

```python
import openapi_client
from openapi_client.models.assignment_submission_comment import AssignmentSubmissionComment
from openapi_client.models.assignment_submission_comment_creation import AssignmentSubmissionCommentCreation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.flat.io/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.flat.io/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ClassApi(api_client)
    var_class = 'var_class_example' # str | Unique identifier of the class
    assignment = 'assignment_example' # str | Unique identifier of the assignment
    submission = 'submission_example' # str | Unique identifier of the submission
    comment = 'comment_example' # str | Unique identifier of the comment
    assignment_submission_comment_creation = openapi_client.AssignmentSubmissionCommentCreation() # AssignmentSubmissionCommentCreation | 

    try:
        # Update a feedback comment to a submission
        api_response = api_instance.update_submission_comment(var_class, assignment, submission, comment, assignment_submission_comment_creation)
        print("The response of ClassApi->update_submission_comment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClassApi->update_submission_comment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **var_class** | **str**| Unique identifier of the class | 
 **assignment** | **str**| Unique identifier of the assignment | 
 **submission** | **str**| Unique identifier of the submission | 
 **comment** | **str**| Unique identifier of the comment | 
 **assignment_submission_comment_creation** | [**AssignmentSubmissionCommentCreation**](AssignmentSubmissionCommentCreation.md)|  | 

### Return type

[**AssignmentSubmissionComment**](AssignmentSubmissionComment.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The comment |  -  |
**403** | Not granted to access to this submission |  -  |
**404** | Submission not found |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

