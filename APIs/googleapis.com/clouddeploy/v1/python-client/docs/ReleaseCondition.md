# ReleaseCondition

ReleaseCondition contains all conditions relevant to a Release.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**release_ready_condition** | [**ReleaseReadyCondition**](ReleaseReadyCondition.md) |  | [optional] 
**skaffold_supported_condition** | [**SkaffoldSupportedCondition**](SkaffoldSupportedCondition.md) |  | [optional] 

## Example

```python
from openapi_client.models.release_condition import ReleaseCondition

# TODO update the JSON string below
json = "{}"
# create an instance of ReleaseCondition from a JSON string
release_condition_instance = ReleaseCondition.from_json(json)
# print the JSON string representation of the object
print(ReleaseCondition.to_json())

# convert the object into a dict
release_condition_dict = release_condition_instance.to_dict()
# create an instance of ReleaseCondition from a dict
release_condition_from_dict = ReleaseCondition.from_dict(release_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


