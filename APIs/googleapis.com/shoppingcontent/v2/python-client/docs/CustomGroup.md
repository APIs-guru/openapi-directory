# CustomGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**List[CustomAttribute]**](CustomAttribute.md) | The sub-attributes. | [optional] 
**name** | **str** | The name of the group. Underscores will be replaced by spaces upon insertion. | [optional] 

## Example

```python
from openapi_client.models.custom_group import CustomGroup

# TODO update the JSON string below
json = "{}"
# create an instance of CustomGroup from a JSON string
custom_group_instance = CustomGroup.from_json(json)
# print the JSON string representation of the object
print(CustomGroup.to_json())

# convert the object into a dict
custom_group_dict = custom_group_instance.to_dict()
# create an instance of CustomGroup from a dict
custom_group_from_dict = CustomGroup.from_dict(custom_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


