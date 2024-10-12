# ComputePolicy

Data Lake Analytics compute policy information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ComputePolicyProperties**](ComputePolicyProperties.md) |  | [optional] 
**id** | **str** | The resource identifier. | [optional] [readonly] 
**name** | **str** | The resource name. | [optional] [readonly] 
**type** | **str** | The resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.compute_policy import ComputePolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ComputePolicy from a JSON string
compute_policy_instance = ComputePolicy.from_json(json)
# print the JSON string representation of the object
print(ComputePolicy.to_json())

# convert the object into a dict
compute_policy_dict = compute_policy_instance.to_dict()
# create an instance of ComputePolicy from a dict
compute_policy_from_dict = ComputePolicy.from_dict(compute_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


