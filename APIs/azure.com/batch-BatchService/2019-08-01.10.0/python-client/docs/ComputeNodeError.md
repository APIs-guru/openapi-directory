# ComputeNodeError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | [optional] 
**error_details** | [**List[NameValuePair]**](NameValuePair.md) |  | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.compute_node_error import ComputeNodeError

# TODO update the JSON string below
json = "{}"
# create an instance of ComputeNodeError from a JSON string
compute_node_error_instance = ComputeNodeError.from_json(json)
# print the JSON string representation of the object
print(ComputeNodeError.to_json())

# convert the object into a dict
compute_node_error_dict = compute_node_error_instance.to_dict()
# create an instance of ComputeNodeError from a dict
compute_node_error_from_dict = ComputeNodeError.from_dict(compute_node_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


