# NestedProvider


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**circuit_count** | **int** |  | [optional] [readonly] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**name** | **str** |  | 
**slug** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_provider import NestedProvider

# TODO update the JSON string below
json = "{}"
# create an instance of NestedProvider from a JSON string
nested_provider_instance = NestedProvider.from_json(json)
# print the JSON string representation of the object
print(NestedProvider.to_json())

# convert the object into a dict
nested_provider_dict = nested_provider_instance.to_dict()
# create an instance of NestedProvider from a dict
nested_provider_from_dict = NestedProvider.from_dict(nested_provider_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


