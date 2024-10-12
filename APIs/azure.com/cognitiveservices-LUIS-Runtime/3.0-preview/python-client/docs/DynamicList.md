# DynamicList

Defines an extension for a list entity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**list_entity_name** | **str** | The name of the list entity to extend. | 
**request_lists** | [**List[RequestList]**](RequestList.md) | The lists to append on the extended list entity. | 

## Example

```python
from openapi_client.models.dynamic_list import DynamicList

# TODO update the JSON string below
json = "{}"
# create an instance of DynamicList from a JSON string
dynamic_list_instance = DynamicList.from_json(json)
# print the JSON string representation of the object
print(DynamicList.to_json())

# convert the object into a dict
dynamic_list_dict = dynamic_list_instance.to_dict()
# create an instance of DynamicList from a dict
dynamic_list_from_dict = DynamicList.from_dict(dynamic_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


