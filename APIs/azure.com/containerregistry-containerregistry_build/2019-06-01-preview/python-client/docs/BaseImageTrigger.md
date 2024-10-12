# BaseImageTrigger

The trigger based on base image dependency.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_image_trigger_type** | **str** | The type of the auto trigger for base image dependency updates. | 
**name** | **str** | The name of the trigger. | 
**status** | **str** | The current status of trigger. | [optional] [default to 'Enabled']
**update_trigger_endpoint** | **str** | The endpoint URL for receiving update triggers. | [optional] 
**update_trigger_payload_type** | **str** | Type of Payload body for Base image update triggers. | [optional] 

## Example

```python
from openapi_client.models.base_image_trigger import BaseImageTrigger

# TODO update the JSON string below
json = "{}"
# create an instance of BaseImageTrigger from a JSON string
base_image_trigger_instance = BaseImageTrigger.from_json(json)
# print the JSON string representation of the object
print(BaseImageTrigger.to_json())

# convert the object into a dict
base_image_trigger_dict = base_image_trigger_instance.to_dict()
# create an instance of BaseImageTrigger from a dict
base_image_trigger_from_dict = BaseImageTrigger.from_dict(base_image_trigger_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


