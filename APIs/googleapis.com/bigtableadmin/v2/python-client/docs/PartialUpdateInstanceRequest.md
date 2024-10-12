# PartialUpdateInstanceRequest

Request message for BigtableInstanceAdmin.PartialUpdateInstance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance** | [**Instance**](Instance.md) |  | [optional] 
**update_mask** | **str** | Required. The subset of Instance fields which should be replaced. Must be explicitly set. | [optional] 

## Example

```python
from openapi_client.models.partial_update_instance_request import PartialUpdateInstanceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PartialUpdateInstanceRequest from a JSON string
partial_update_instance_request_instance = PartialUpdateInstanceRequest.from_json(json)
# print the JSON string representation of the object
print(PartialUpdateInstanceRequest.to_json())

# convert the object into a dict
partial_update_instance_request_dict = partial_update_instance_request_instance.to_dict()
# create an instance of PartialUpdateInstanceRequest from a dict
partial_update_instance_request_from_dict = PartialUpdateInstanceRequest.from_dict(partial_update_instance_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


