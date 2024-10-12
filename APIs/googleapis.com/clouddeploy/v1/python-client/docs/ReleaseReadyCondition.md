# ReleaseReadyCondition

ReleaseReadyCondition contains information around the status of the Release. If a release is not ready, you cannot create a rollout with the release.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** | True if the Release is in a valid state. Otherwise at least one condition in &#x60;ReleaseCondition&#x60; is in an invalid state. Iterate over those conditions and see which condition(s) has status &#x3D; false to find out what is wrong with the Release. | [optional] 

## Example

```python
from openapi_client.models.release_ready_condition import ReleaseReadyCondition

# TODO update the JSON string below
json = "{}"
# create an instance of ReleaseReadyCondition from a JSON string
release_ready_condition_instance = ReleaseReadyCondition.from_json(json)
# print the JSON string representation of the object
print(ReleaseReadyCondition.to_json())

# convert the object into a dict
release_ready_condition_dict = release_ready_condition_instance.to_dict()
# create an instance of ReleaseReadyCondition from a dict
release_ready_condition_from_dict = ReleaseReadyCondition.from_dict(release_ready_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


