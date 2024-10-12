# CustomList

Describes a custom list entity, such as a custom affinity or custom intent audience list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_list_id** | **str** | Output only. The unique ID of the custom list. Assigned by the system. | [optional] [readonly] 
**display_name** | **str** | Output only. The display name of the custom list. . | [optional] [readonly] 
**name** | **str** | Output only. The resource name of the custom list. | [optional] [readonly] 

## Example

```python
from openapi_client.models.custom_list import CustomList

# TODO update the JSON string below
json = "{}"
# create an instance of CustomList from a JSON string
custom_list_instance = CustomList.from_json(json)
# print the JSON string representation of the object
print(CustomList.to_json())

# convert the object into a dict
custom_list_dict = custom_list_instance.to_dict()
# create an instance of CustomList from a dict
custom_list_from_dict = CustomList.from_dict(custom_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


