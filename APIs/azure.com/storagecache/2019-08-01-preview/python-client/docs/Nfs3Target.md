# Nfs3Target

An NFS mount point for use as a StorageTarget.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target** | **str** | IP or name of an NFS Storage Target host, ie: 10.0.44.44 | [optional] 
**usage_model** | **str** | Identifies the primary usage model to be used for this storage target.   GET choices from .../usageModels | [optional] 

## Example

```python
from openapi_client.models.nfs3_target import Nfs3Target

# TODO update the JSON string below
json = "{}"
# create an instance of Nfs3Target from a JSON string
nfs3_target_instance = Nfs3Target.from_json(json)
# print the JSON string representation of the object
print(Nfs3Target.to_json())

# convert the object into a dict
nfs3_target_dict = nfs3_target_instance.to_dict()
# create an instance of Nfs3Target from a dict
nfs3_target_from_dict = Nfs3Target.from_dict(nfs3_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


