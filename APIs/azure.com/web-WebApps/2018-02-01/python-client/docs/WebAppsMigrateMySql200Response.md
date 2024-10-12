# WebAppsMigrateMySql200Response

An operation on a resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_time** | **datetime** | Time when operation has started. | [optional] 
**errors** | [**List[WebAppsMigrateMySql200ResponseErrorsInner]**](WebAppsMigrateMySql200ResponseErrorsInner.md) | Any errors associate with the operation. | [optional] 
**expiration_time** | **datetime** | Time when operation will expire. | [optional] 
**geo_master_operation_id** | **str** | Applicable only for stamp operation ids. | [optional] 
**id** | **str** | Operation ID. | [optional] 
**modified_time** | **datetime** | Time when operation has been updated. | [optional] 
**name** | **str** | Operation name. | [optional] 
**status** | **str** | The current status of the operation. | [optional] 

## Example

```python
from openapi_client.models.web_apps_migrate_my_sql200_response import WebAppsMigrateMySql200Response

# TODO update the JSON string below
json = "{}"
# create an instance of WebAppsMigrateMySql200Response from a JSON string
web_apps_migrate_my_sql200_response_instance = WebAppsMigrateMySql200Response.from_json(json)
# print the JSON string representation of the object
print(WebAppsMigrateMySql200Response.to_json())

# convert the object into a dict
web_apps_migrate_my_sql200_response_dict = web_apps_migrate_my_sql200_response_instance.to_dict()
# create an instance of WebAppsMigrateMySql200Response from a dict
web_apps_migrate_my_sql200_response_from_dict = WebAppsMigrateMySql200Response.from_dict(web_apps_migrate_my_sql200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


