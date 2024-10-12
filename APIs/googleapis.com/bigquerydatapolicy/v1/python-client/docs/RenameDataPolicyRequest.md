# RenameDataPolicyRequest

Request message for the RenameDataPolicy method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_data_policy_id** | **str** | Required. The new data policy id. | [optional] 

## Example

```python
from openapi_client.models.rename_data_policy_request import RenameDataPolicyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RenameDataPolicyRequest from a JSON string
rename_data_policy_request_instance = RenameDataPolicyRequest.from_json(json)
# print the JSON string representation of the object
print(RenameDataPolicyRequest.to_json())

# convert the object into a dict
rename_data_policy_request_dict = rename_data_policy_request_instance.to_dict()
# create an instance of RenameDataPolicyRequest from a dict
rename_data_policy_request_from_dict = RenameDataPolicyRequest.from_dict(rename_data_policy_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


