# EndpointPatchGroupsID


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Group**](Group.md) |  | [optional] 
**success** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_patch_groups_id import EndpointPatchGroupsID

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointPatchGroupsID from a JSON string
endpoint_patch_groups_id_instance = EndpointPatchGroupsID.from_json(json)
# print the JSON string representation of the object
print(EndpointPatchGroupsID.to_json())

# convert the object into a dict
endpoint_patch_groups_id_dict = endpoint_patch_groups_id_instance.to_dict()
# create an instance of EndpointPatchGroupsID from a dict
endpoint_patch_groups_id_from_dict = EndpointPatchGroupsID.from_dict(endpoint_patch_groups_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


