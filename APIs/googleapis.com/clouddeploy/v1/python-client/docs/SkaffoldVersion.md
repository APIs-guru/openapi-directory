# SkaffoldVersion

Details of a supported Skaffold version.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maintenance_mode_time** | **str** | The time at which this version of Skaffold will enter maintenance mode. | [optional] 
**support_end_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**support_expiration_time** | **str** | The time at which this version of Skaffold will no longer be supported. | [optional] 
**version** | **str** | Release version number. For example, \&quot;1.20.3\&quot;. | [optional] 

## Example

```python
from openapi_client.models.skaffold_version import SkaffoldVersion

# TODO update the JSON string below
json = "{}"
# create an instance of SkaffoldVersion from a JSON string
skaffold_version_instance = SkaffoldVersion.from_json(json)
# print the JSON string representation of the object
print(SkaffoldVersion.to_json())

# convert the object into a dict
skaffold_version_dict = skaffold_version_instance.to_dict()
# create an instance of SkaffoldVersion from a dict
skaffold_version_from_dict = SkaffoldVersion.from_dict(skaffold_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


