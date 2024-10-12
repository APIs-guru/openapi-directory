# BaseImageTriggerUpdateParameters

The properties for updating base image dependency trigger.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_image_trigger_type** | **str** | The type of the auto trigger for base image dependency updates. | [optional] 
**name** | **str** | The name of the trigger. | 
**status** | **str** | The current status of trigger. | [optional] [default to 'Enabled']
**update_trigger_endpoint** | **str** | The endpoint URL for receiving update triggers. | [optional] 
**update_trigger_payload_type** | **str** | Type of Payload body for Base image update triggers. | [optional] 

## Example

```python
from openapi_client.models.base_image_trigger_update_parameters import BaseImageTriggerUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of BaseImageTriggerUpdateParameters from a JSON string
base_image_trigger_update_parameters_instance = BaseImageTriggerUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(BaseImageTriggerUpdateParameters.to_json())

# convert the object into a dict
base_image_trigger_update_parameters_dict = base_image_trigger_update_parameters_instance.to_dict()
# create an instance of BaseImageTriggerUpdateParameters from a dict
base_image_trigger_update_parameters_from_dict = BaseImageTriggerUpdateParameters.from_dict(base_image_trigger_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


