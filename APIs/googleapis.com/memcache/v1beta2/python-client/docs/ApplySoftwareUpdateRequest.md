# ApplySoftwareUpdateRequest

Request for ApplySoftwareUpdate.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apply_all** | **bool** | Whether to apply the update to all nodes. If set to true, will explicitly restrict users from specifying any nodes, and apply software update to all nodes (where applicable) within the instance. | [optional] 
**node_ids** | **List[str]** | Nodes to which we should apply the update to. Note all the selected nodes are updated in parallel. | [optional] 

## Example

```python
from openapi_client.models.apply_software_update_request import ApplySoftwareUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApplySoftwareUpdateRequest from a JSON string
apply_software_update_request_instance = ApplySoftwareUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(ApplySoftwareUpdateRequest.to_json())

# convert the object into a dict
apply_software_update_request_dict = apply_software_update_request_instance.to_dict()
# create an instance of ApplySoftwareUpdateRequest from a dict
apply_software_update_request_from_dict = ApplySoftwareUpdateRequest.from_dict(apply_software_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


