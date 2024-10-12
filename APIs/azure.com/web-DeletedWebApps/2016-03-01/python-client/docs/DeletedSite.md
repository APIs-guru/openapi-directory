# DeletedSite

A deleted app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleted_timestamp** | **str** | Time in UTC when the app was deleted. | [optional] [readonly] 
**id** | **int** | Numeric id for the deleted site | [optional] 
**name** | **str** | Name of the deleted site | [optional] [readonly] 
**resource_group** | **str** | ResourceGroup that contained the deleted site | [optional] [readonly] 
**slot** | **str** | Slot of the deleted site | [optional] [readonly] 
**subscription** | **str** | Subscription containing the deleted site | [optional] [readonly] 

## Example

```python
from openapi_client.models.deleted_site import DeletedSite

# TODO update the JSON string below
json = "{}"
# create an instance of DeletedSite from a JSON string
deleted_site_instance = DeletedSite.from_json(json)
# print the JSON string representation of the object
print(DeletedSite.to_json())

# convert the object into a dict
deleted_site_dict = deleted_site_instance.to_dict()
# create an instance of DeletedSite from a dict
deleted_site_from_dict = DeletedSite.from_dict(deleted_site_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


