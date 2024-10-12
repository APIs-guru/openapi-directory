# ListConnectionKeysInput

List Connection Keys Input payload

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
from openapi_client.models.list_connection_keys_input import ListConnectionKeysInput

# TODO update the JSON string below
json = "{}"
# create an instance of ListConnectionKeysInput from a JSON string
list_connection_keys_input_instance = ListConnectionKeysInput.from_json(json)
# print the JSON string representation of the object
print(ListConnectionKeysInput.to_json())

# convert the object into a dict
list_connection_keys_input_dict = list_connection_keys_input_instance.to_dict()
# create an instance of ListConnectionKeysInput from a dict
list_connection_keys_input_from_dict = ListConnectionKeysInput.from_dict(list_connection_keys_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


