# Rollback

Rolls back a `Rollout`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_phase** | **str** | Optional. The starting phase ID for the &#x60;Rollout&#x60;. If unspecified, the &#x60;Rollout&#x60; will start in the stable phase. | [optional] 

## Example

```python
from openapi_client.models.rollback import Rollback

# TODO update the JSON string below
json = "{}"
# create an instance of Rollback from a JSON string
rollback_instance = Rollback.from_json(json)
# print the JSON string representation of the object
print(Rollback.to_json())

# convert the object into a dict
rollback_dict = rollback_instance.to_dict()
# create an instance of Rollback from a dict
rollback_from_dict = Rollback.from_dict(rollback_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


