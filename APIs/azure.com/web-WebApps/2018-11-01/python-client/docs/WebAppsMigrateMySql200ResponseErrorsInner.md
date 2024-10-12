# WebAppsMigrateMySql200ResponseErrorsInner

Body of the error response returned from the API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Basic error code. | [optional] 
**extended_code** | **str** | Type of error. | [optional] 
**inner_errors** | **List[object]** | Inner errors. | [optional] 
**message** | **str** | Any details of the error. | [optional] 
**message_template** | **str** | Message template. | [optional] 
**parameters** | **List[str]** | Parameters for the template. | [optional] 

## Example

```python
from openapi_client.models.web_apps_migrate_my_sql200_response_errors_inner import WebAppsMigrateMySql200ResponseErrorsInner

# TODO update the JSON string below
json = "{}"
# create an instance of WebAppsMigrateMySql200ResponseErrorsInner from a JSON string
web_apps_migrate_my_sql200_response_errors_inner_instance = WebAppsMigrateMySql200ResponseErrorsInner.from_json(json)
# print the JSON string representation of the object
print(WebAppsMigrateMySql200ResponseErrorsInner.to_json())

# convert the object into a dict
web_apps_migrate_my_sql200_response_errors_inner_dict = web_apps_migrate_my_sql200_response_errors_inner_instance.to_dict()
# create an instance of WebAppsMigrateMySql200ResponseErrorsInner from a dict
web_apps_migrate_my_sql200_response_errors_inner_from_dict = WebAppsMigrateMySql200ResponseErrorsInner.from_dict(web_apps_migrate_my_sql200_response_errors_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


