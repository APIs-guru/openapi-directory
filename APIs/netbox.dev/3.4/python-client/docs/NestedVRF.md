# NestedVRF


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**name** | **str** |  | 
**prefix_count** | **int** |  | [optional] [readonly] 
**rd** | **str** | Unique route distinguisher (as defined in RFC 4364) | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_vrf import NestedVRF

# TODO update the JSON string below
json = "{}"
# create an instance of NestedVRF from a JSON string
nested_vrf_instance = NestedVRF.from_json(json)
# print the JSON string representation of the object
print(NestedVRF.to_json())

# convert the object into a dict
nested_vrf_dict = nested_vrf_instance.to_dict()
# create an instance of NestedVRF from a dict
nested_vrf_from_dict = NestedVRF.from_dict(nested_vrf_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


