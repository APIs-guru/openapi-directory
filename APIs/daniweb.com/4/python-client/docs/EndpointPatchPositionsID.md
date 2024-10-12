# EndpointPatchPositionsID


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Position**](Position.md) |  | [optional] 
**success** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_patch_positions_id import EndpointPatchPositionsID

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointPatchPositionsID from a JSON string
endpoint_patch_positions_id_instance = EndpointPatchPositionsID.from_json(json)
# print the JSON string representation of the object
print(EndpointPatchPositionsID.to_json())

# convert the object into a dict
endpoint_patch_positions_id_dict = endpoint_patch_positions_id_instance.to_dict()
# create an instance of EndpointPatchPositionsID from a dict
endpoint_patch_positions_id_from_dict = EndpointPatchPositionsID.from_dict(endpoint_patch_positions_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


