# NestedRIR


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregate_count** | **int** |  | [optional] [readonly] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**name** | **str** |  | 
**slug** | **str** |  | 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_rir import NestedRIR

# TODO update the JSON string below
json = "{}"
# create an instance of NestedRIR from a JSON string
nested_rir_instance = NestedRIR.from_json(json)
# print the JSON string representation of the object
print(NestedRIR.to_json())

# convert the object into a dict
nested_rir_dict = nested_rir_instance.to_dict()
# create an instance of NestedRIR from a dict
nested_rir_from_dict = NestedRIR.from_dict(nested_rir_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


