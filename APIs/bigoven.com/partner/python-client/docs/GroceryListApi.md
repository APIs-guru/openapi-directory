# openapi_client.GroceryListApi

All URIs are relative to *https://api2.bigoven.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**grocery_list_add_recipe**](GroceryListApi.md#grocery_list_add_recipe) | **POST** /grocerylist/recipe | Add a Recipe to the grocery list.  In the request data, pass in recipeId, scale (scale&#x3D;1.0 says to keep the recipe the same size as originally posted), markAsPending (true/false) to indicate that              the lines in the recipe should be marked in a \&quot;pending\&quot; (unconfirmed by user) state.
[**grocery_list_delete**](GroceryListApi.md#grocery_list_delete) | **DELETE** /grocerylist | Delete all the items on a grocery list; faster operation than a sync with deleted items.
[**grocery_list_delete_item_by_guid**](GroceryListApi.md#grocery_list_delete_item_by_guid) | **DELETE** /grocerylist/item/{guid} | /grocerylist/item/{guid}  DELETE will delete this item assuming you own it.
[**grocery_list_department**](GroceryListApi.md#grocery_list_department) | **POST** /grocerylist/department | Departmentalize a list of strings -- used for ad-hoc grocery list item addition
[**grocery_list_get**](GroceryListApi.md#grocery_list_get) | **GET** /grocerylist | Get the user&#39;s grocery list.  User is determined by Basic Authentication.
[**grocery_list_grocery_list_item_guid**](GroceryListApi.md#grocery_list_grocery_list_item_guid) | **PUT** /grocerylist/item/{guid} | Update a grocery item by GUID
[**grocery_list_grocery_list_remove_marked_items**](GroceryListApi.md#grocery_list_grocery_list_remove_marked_items) | **POST** /grocerylist/clearcheckedlines | Clears the checked lines.
[**grocery_list_post**](GroceryListApi.md#grocery_list_post) | **POST** /grocerylist/line | Add a single line item to the grocery list
[**grocery_list_post_grocery_list_sync**](GroceryListApi.md#grocery_list_post_grocery_list_sync) | **POST** /grocerylist/sync | Synchronize the grocery list.  Call this with a POST to /grocerylist/sync
[**grocerylist_item_post**](GroceryListApi.md#grocerylist_item_post) | **POST** /grocerylist/item | Add a single line item to the grocery list


# **grocery_list_add_recipe**
> object grocery_list_add_recipe(api2_controllers_web_api_grocery_list_controller_post_grocery_list_recipe_request)

Add a Recipe to the grocery list.  In the request data, pass in recipeId, scale (scale=1.0 says to keep the recipe the same size as originally posted), markAsPending (true/false) to indicate that              the lines in the recipe should be marked in a \"pending\" (unconfirmed by user) state.

### Example


```python
import openapi_client
from openapi_client.models.api2_controllers_web_api_grocery_list_controller_post_grocery_list_recipe_request import API2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api2.bigoven.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api2.bigoven.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GroceryListApi(api_client)
    api2_controllers_web_api_grocery_list_controller_post_grocery_list_recipe_request = openapi_client.API2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequest() # API2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequest | 

    try:
        # Add a Recipe to the grocery list.  In the request data, pass in recipeId, scale (scale=1.0 says to keep the recipe the same size as originally posted), markAsPending (true/false) to indicate that              the lines in the recipe should be marked in a \"pending\" (unconfirmed by user) state.
        api_response = api_instance.grocery_list_add_recipe(api2_controllers_web_api_grocery_list_controller_post_grocery_list_recipe_request)
        print("The response of GroceryListApi->grocery_list_add_recipe:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroceryListApi->grocery_list_add_recipe: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api2_controllers_web_api_grocery_list_controller_post_grocery_list_recipe_request** | [**API2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequest**](API2ControllersWebAPIGroceryListControllerPostGroceryListRecipeRequest.md)|  | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **grocery_list_delete**
> object grocery_list_delete()

Delete all the items on a grocery list; faster operation than a sync with deleted items.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api2.bigoven.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api2.bigoven.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GroceryListApi(api_client)

    try:
        # Delete all the items on a grocery list; faster operation than a sync with deleted items.
        api_response = api_instance.grocery_list_delete()
        print("The response of GroceryListApi->grocery_list_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroceryListApi->grocery_list_delete: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **grocery_list_delete_item_by_guid**
> object grocery_list_delete_item_by_guid(guid)

/grocerylist/item/{guid}  DELETE will delete this item assuming you own it.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api2.bigoven.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api2.bigoven.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GroceryListApi(api_client)
    guid = 'guid_example' # str | 

    try:
        # /grocerylist/item/{guid}  DELETE will delete this item assuming you own it.
        api_response = api_instance.grocery_list_delete_item_by_guid(guid)
        print("The response of GroceryListApi->grocery_list_delete_item_by_guid:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroceryListApi->grocery_list_delete_item_by_guid: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | **str**|  | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **grocery_list_department**
> List[API2GroceryListDepartmentResult] grocery_list_department(api2_controllers_web_api_grocery_list_controller_department_model)

Departmentalize a list of strings -- used for ad-hoc grocery list item addition

### Example


```python
import openapi_client
from openapi_client.models.api2_controllers_web_api_grocery_list_controller_department_model import API2ControllersWebAPIGroceryListControllerDepartmentModel
from openapi_client.models.api2_grocery_list_department_result import API2GroceryListDepartmentResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api2.bigoven.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api2.bigoven.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GroceryListApi(api_client)
    api2_controllers_web_api_grocery_list_controller_department_model = openapi_client.API2ControllersWebAPIGroceryListControllerDepartmentModel() # API2ControllersWebAPIGroceryListControllerDepartmentModel | see DepartmentModel for the request payload

    try:
        # Departmentalize a list of strings -- used for ad-hoc grocery list item addition
        api_response = api_instance.grocery_list_department(api2_controllers_web_api_grocery_list_controller_department_model)
        print("The response of GroceryListApi->grocery_list_department:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroceryListApi->grocery_list_department: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api2_controllers_web_api_grocery_list_controller_department_model** | [**API2ControllersWebAPIGroceryListControllerDepartmentModel**](API2ControllersWebAPIGroceryListControllerDepartmentModel.md)| see DepartmentModel for the request payload | 

### Return type

[**List[API2GroceryListDepartmentResult]**](API2GroceryListDepartmentResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **grocery_list_get**
> BigOvenModelAPI2GroceryList grocery_list_get()

Get the user's grocery list.  User is determined by Basic Authentication.

### Example


```python
import openapi_client
from openapi_client.models.big_oven_model_api2_grocery_list import BigOvenModelAPI2GroceryList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api2.bigoven.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api2.bigoven.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GroceryListApi(api_client)

    try:
        # Get the user's grocery list.  User is determined by Basic Authentication.
        api_response = api_instance.grocery_list_get()
        print("The response of GroceryListApi->grocery_list_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroceryListApi->grocery_list_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**BigOvenModelAPI2GroceryList**](BigOvenModelAPI2GroceryList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **grocery_list_grocery_list_item_guid**
> object grocery_list_grocery_list_item_guid(guid, api2_controllers_web_api_grocery_list_controller_update_item_by_guid_request)

Update a grocery item by GUID

### Example


```python
import openapi_client
from openapi_client.models.api2_controllers_web_api_grocery_list_controller_update_item_by_guid_request import API2ControllersWebAPIGroceryListControllerUpdateItemByGuidRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api2.bigoven.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api2.bigoven.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GroceryListApi(api_client)
    guid = 'guid_example' # str | 
    api2_controllers_web_api_grocery_list_controller_update_item_by_guid_request = openapi_client.API2ControllersWebAPIGroceryListControllerUpdateItemByGuidRequest() # API2ControllersWebAPIGroceryListControllerUpdateItemByGuidRequest | 

    try:
        # Update a grocery item by GUID
        api_response = api_instance.grocery_list_grocery_list_item_guid(guid, api2_controllers_web_api_grocery_list_controller_update_item_by_guid_request)
        print("The response of GroceryListApi->grocery_list_grocery_list_item_guid:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroceryListApi->grocery_list_grocery_list_item_guid: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **guid** | **str**|  | 
 **api2_controllers_web_api_grocery_list_controller_update_item_by_guid_request** | [**API2ControllersWebAPIGroceryListControllerUpdateItemByGuidRequest**](API2ControllersWebAPIGroceryListControllerUpdateItemByGuidRequest.md)|  | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **grocery_list_grocery_list_remove_marked_items**
> BigOvenModelAPI2GroceryList grocery_list_grocery_list_remove_marked_items()

Clears the checked lines.

### Example


```python
import openapi_client
from openapi_client.models.big_oven_model_api2_grocery_list import BigOvenModelAPI2GroceryList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api2.bigoven.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api2.bigoven.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GroceryListApi(api_client)

    try:
        # Clears the checked lines.
        api_response = api_instance.grocery_list_grocery_list_remove_marked_items()
        print("The response of GroceryListApi->grocery_list_grocery_list_remove_marked_items:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroceryListApi->grocery_list_grocery_list_remove_marked_items: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**BigOvenModelAPI2GroceryList**](BigOvenModelAPI2GroceryList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **grocery_list_post**
> BigOvenModelShoppingListLine grocery_list_post(api2_controllers_web_api_grocery_list_controller_post_grocery_list_add_line_request)

Add a single line item to the grocery list

### Example


```python
import openapi_client
from openapi_client.models.api2_controllers_web_api_grocery_list_controller_post_grocery_list_add_line_request import API2ControllersWebAPIGroceryListControllerPostGroceryListAddLineRequest
from openapi_client.models.big_oven_model_shopping_list_line import BigOvenModelShoppingListLine
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api2.bigoven.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api2.bigoven.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GroceryListApi(api_client)
    api2_controllers_web_api_grocery_list_controller_post_grocery_list_add_line_request = openapi_client.API2ControllersWebAPIGroceryListControllerPostGroceryListAddLineRequest() # API2ControllersWebAPIGroceryListControllerPostGroceryListAddLineRequest | name, quantity, unit, notes, department

    try:
        # Add a single line item to the grocery list
        api_response = api_instance.grocery_list_post(api2_controllers_web_api_grocery_list_controller_post_grocery_list_add_line_request)
        print("The response of GroceryListApi->grocery_list_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroceryListApi->grocery_list_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api2_controllers_web_api_grocery_list_controller_post_grocery_list_add_line_request** | [**API2ControllersWebAPIGroceryListControllerPostGroceryListAddLineRequest**](API2ControllersWebAPIGroceryListControllerPostGroceryListAddLineRequest.md)| name, quantity, unit, notes, department | 

### Return type

[**BigOvenModelShoppingListLine**](BigOvenModelShoppingListLine.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **grocery_list_post_grocery_list_sync**
> object grocery_list_post_grocery_list_sync(api2_controllers_web_api_grocery_list_controller_post_grocery_list_sync_request)

Synchronize the grocery list.  Call this with a POST to /grocerylist/sync

### Example


```python
import openapi_client
from openapi_client.models.api2_controllers_web_api_grocery_list_controller_post_grocery_list_sync_request import API2ControllersWebAPIGroceryListControllerPostGroceryListSyncRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api2.bigoven.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api2.bigoven.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GroceryListApi(api_client)
    api2_controllers_web_api_grocery_list_controller_post_grocery_list_sync_request = openapi_client.API2ControllersWebAPIGroceryListControllerPostGroceryListSyncRequest() # API2ControllersWebAPIGroceryListControllerPostGroceryListSyncRequest | 

    try:
        # Synchronize the grocery list.  Call this with a POST to /grocerylist/sync
        api_response = api_instance.grocery_list_post_grocery_list_sync(api2_controllers_web_api_grocery_list_controller_post_grocery_list_sync_request)
        print("The response of GroceryListApi->grocery_list_post_grocery_list_sync:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroceryListApi->grocery_list_post_grocery_list_sync: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api2_controllers_web_api_grocery_list_controller_post_grocery_list_sync_request** | [**API2ControllersWebAPIGroceryListControllerPostGroceryListSyncRequest**](API2ControllersWebAPIGroceryListControllerPostGroceryListSyncRequest.md)|  | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **grocerylist_item_post**
> BigOvenModelShoppingListLine grocerylist_item_post(api2_controllers_web_api_grocery_list_controller_post_to_grocery_list_recipe_request)

Add a single line item to the grocery list

### Example


```python
import openapi_client
from openapi_client.models.api2_controllers_web_api_grocery_list_controller_post_to_grocery_list_recipe_request import API2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequest
from openapi_client.models.big_oven_model_shopping_list_line import BigOvenModelShoppingListLine
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api2.bigoven.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api2.bigoven.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.GroceryListApi(api_client)
    api2_controllers_web_api_grocery_list_controller_post_to_grocery_list_recipe_request = openapi_client.API2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequest() # API2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequest | name, quantity, unit, notes, department

    try:
        # Add a single line item to the grocery list
        api_response = api_instance.grocerylist_item_post(api2_controllers_web_api_grocery_list_controller_post_to_grocery_list_recipe_request)
        print("The response of GroceryListApi->grocerylist_item_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GroceryListApi->grocerylist_item_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api2_controllers_web_api_grocery_list_controller_post_to_grocery_list_recipe_request** | [**API2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequest**](API2ControllersWebAPIGroceryListControllerPostToGroceryListRecipeRequest.md)| name, quantity, unit, notes, department | 

### Return type

[**BigOvenModelShoppingListLine**](BigOvenModelShoppingListLine.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

