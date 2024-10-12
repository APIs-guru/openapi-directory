# CsmMoveResourceEnvelope

Class containing a list of the resources that need to be moved and the resource group they should be moved to

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resources** | **List[str]** |  | [optional] 
**target_resource_group** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.csm_move_resource_envelope import CsmMoveResourceEnvelope

# TODO update the JSON string below
json = "{}"
# create an instance of CsmMoveResourceEnvelope from a JSON string
csm_move_resource_envelope_instance = CsmMoveResourceEnvelope.from_json(json)
# print the JSON string representation of the object
print(CsmMoveResourceEnvelope.to_json())

# convert the object into a dict
csm_move_resource_envelope_dict = csm_move_resource_envelope_instance.to_dict()
# create an instance of CsmMoveResourceEnvelope from a dict
csm_move_resource_envelope_from_dict = CsmMoveResourceEnvelope.from_dict(csm_move_resource_envelope_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


