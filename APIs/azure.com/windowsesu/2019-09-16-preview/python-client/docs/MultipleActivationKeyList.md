# MultipleActivationKeyList

List of MAK keys.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next page of resources. | [optional] [readonly] 
**value** | [**List[MultipleActivationKey]**](MultipleActivationKey.md) | List of MAK keys. | [optional] 

## Example

```python
from openapi_client.models.multiple_activation_key_list import MultipleActivationKeyList

# TODO update the JSON string below
json = "{}"
# create an instance of MultipleActivationKeyList from a JSON string
multiple_activation_key_list_instance = MultipleActivationKeyList.from_json(json)
# print the JSON string representation of the object
print(MultipleActivationKeyList.to_json())

# convert the object into a dict
multiple_activation_key_list_dict = multiple_activation_key_list_instance.to_dict()
# create an instance of MultipleActivationKeyList from a dict
multiple_activation_key_list_from_dict = MultipleActivationKeyList.from_dict(multiple_activation_key_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


