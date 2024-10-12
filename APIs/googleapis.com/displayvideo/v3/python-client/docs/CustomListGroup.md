# CustomListGroup

Details of custom list group. All custom list targeting settings are logically ‘OR’ of each other.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**settings** | [**List[CustomListTargetingSetting]**](CustomListTargetingSetting.md) | Required. All custom list targeting settings in custom list group. Repeated settings with same id will be ignored. | [optional] 

## Example

```python
from openapi_client.models.custom_list_group import CustomListGroup

# TODO update the JSON string below
json = "{}"
# create an instance of CustomListGroup from a JSON string
custom_list_group_instance = CustomListGroup.from_json(json)
# print the JSON string representation of the object
print(CustomListGroup.to_json())

# convert the object into a dict
custom_list_group_dict = custom_list_group_instance.to_dict()
# create an instance of CustomListGroup from a dict
custom_list_group_from_dict = CustomListGroup.from_dict(custom_list_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


