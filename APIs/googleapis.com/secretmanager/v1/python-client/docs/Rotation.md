# Rotation

The rotation time and period for a Secret. At next_rotation_time, Secret Manager will send a Pub/Sub notification to the topics configured on the Secret. Secret.topics must be set to configure rotation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_rotation_time** | **str** | Optional. Timestamp in UTC at which the Secret is scheduled to rotate. Cannot be set to less than 300s (5 min) in the future and at most 3153600000s (100 years). next_rotation_time MUST be set if rotation_period is set. | [optional] 
**rotation_period** | **str** | Input only. The Duration between rotation notifications. Must be in seconds and at least 3600s (1h) and at most 3153600000s (100 years). If rotation_period is set, next_rotation_time must be set. next_rotation_time will be advanced by this period when the service automatically sends rotation notifications. | [optional] 

## Example

```python
from openapi_client.models.rotation import Rotation

# TODO update the JSON string below
json = "{}"
# create an instance of Rotation from a JSON string
rotation_instance = Rotation.from_json(json)
# print the JSON string representation of the object
print(Rotation.to_json())

# convert the object into a dict
rotation_dict = rotation_instance.to_dict()
# create an instance of Rotation from a dict
rotation_from_dict = Rotation.from_dict(rotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


