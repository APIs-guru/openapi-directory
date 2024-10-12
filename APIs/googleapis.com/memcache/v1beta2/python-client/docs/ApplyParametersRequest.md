# ApplyParametersRequest

Request for ApplyParameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apply_all** | **bool** | Whether to apply instance-level parameter group to all nodes. If set to true, users are restricted from specifying individual nodes, and &#x60;ApplyParameters&#x60; updates all nodes within the instance. | [optional] 
**node_ids** | **List[str]** | Nodes to which the instance-level parameter group is applied. | [optional] 

## Example

```python
from openapi_client.models.apply_parameters_request import ApplyParametersRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApplyParametersRequest from a JSON string
apply_parameters_request_instance = ApplyParametersRequest.from_json(json)
# print the JSON string representation of the object
print(ApplyParametersRequest.to_json())

# convert the object into a dict
apply_parameters_request_dict = apply_parameters_request_instance.to_dict()
# create an instance of ApplyParametersRequest from a dict
apply_parameters_request_from_dict = ApplyParametersRequest.from_dict(apply_parameters_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


