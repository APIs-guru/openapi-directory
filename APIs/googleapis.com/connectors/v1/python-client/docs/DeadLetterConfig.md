# DeadLetterConfig

Dead Letter configuration details provided by the user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**project_id** | **str** | Optional. Project which has the topic given. | [optional] 
**topic** | **str** | Optional. Topic to push events which couldn&#39;t be processed. | [optional] 

## Example

```python
from openapi_client.models.dead_letter_config import DeadLetterConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DeadLetterConfig from a JSON string
dead_letter_config_instance = DeadLetterConfig.from_json(json)
# print the JSON string representation of the object
print(DeadLetterConfig.to_json())

# convert the object into a dict
dead_letter_config_dict = dead_letter_config_instance.to_dict()
# create an instance of DeadLetterConfig from a dict
dead_letter_config_from_dict = DeadLetterConfig.from_dict(dead_letter_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


