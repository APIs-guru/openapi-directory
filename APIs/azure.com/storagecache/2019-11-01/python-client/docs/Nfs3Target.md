# Nfs3Target

An NFSv3 mount point for use as a Storage Target.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target** | **str** | IP address or host name of an NFSv3 host (e.g., 10.0.44.44). | [optional] 
**usage_model** | **str** | Identifies the primary usage model to be used for this Storage Target. Get choices from .../usageModels | [optional] 

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


