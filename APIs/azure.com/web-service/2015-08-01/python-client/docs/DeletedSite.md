# DeletedSite

Reports deleted site including the timestamp of operation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** |  | [optional] 
**id** | **str** | Resource Id | [optional] 
**kind** | **str** | Kind of resource | [optional] 
**location** | **str** | Resource Location | 
**name** | **str** | Resource Name | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] 

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


