# TargetingUpdate

Update type for targeting. Note it is always a subset Targeting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**all_users** | [**AllUsers**](AllUsers.md) |  | [optional] 
**android_sdks** | [**AndroidSdks**](AndroidSdks.md) |  | [optional] 
**regions** | [**Regions**](Regions.md) |  | [optional] 

## Example

```python
from openapi_client.models.targeting_update import TargetingUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of TargetingUpdate from a JSON string
targeting_update_instance = TargetingUpdate.from_json(json)
# print the JSON string representation of the object
print(TargetingUpdate.to_json())

# convert the object into a dict
targeting_update_dict = targeting_update_instance.to_dict()
# create an instance of TargetingUpdate from a dict
targeting_update_from_dict = TargetingUpdate.from_dict(targeting_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


