# IntegrationResourceProperties

Properties related to the IoTHub DigitalTwinsInstance Integration Resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_time** | **datetime** | Time when the IoTHub was added to DigitalTwinsInstance. | [optional] [readonly] 
**resource_id** | **str** | Fully qualified resource identifier of the DigitalTwins Azure resource. | [optional] 
**provisioning_state** | **str** | DigitalTwinsInstance - IoTHub link state. | [optional] [readonly] 

## Example

```python
from openapi_client.models.integration_resource_properties import IntegrationResourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationResourceProperties from a JSON string
integration_resource_properties_instance = IntegrationResourceProperties.from_json(json)
# print the JSON string representation of the object
print(IntegrationResourceProperties.to_json())

# convert the object into a dict
integration_resource_properties_dict = integration_resource_properties_instance.to_dict()
# create an instance of IntegrationResourceProperties from a dict
integration_resource_properties_from_dict = IntegrationResourceProperties.from_dict(integration_resource_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


