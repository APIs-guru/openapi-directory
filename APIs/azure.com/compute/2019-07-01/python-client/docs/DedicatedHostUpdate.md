# DedicatedHostUpdate

Specifies information about the dedicated host. Only tags, autoReplaceOnFailure and licenseType may be updated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DedicatedHostProperties**](DedicatedHostProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 

## Example

```python
from openapi_client.models.dedicated_host_update import DedicatedHostUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of DedicatedHostUpdate from a JSON string
dedicated_host_update_instance = DedicatedHostUpdate.from_json(json)
# print the JSON string representation of the object
print(DedicatedHostUpdate.to_json())

# convert the object into a dict
dedicated_host_update_dict = dedicated_host_update_instance.to_dict()
# create an instance of DedicatedHostUpdate from a dict
dedicated_host_update_from_dict = DedicatedHostUpdate.from_dict(dedicated_host_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


