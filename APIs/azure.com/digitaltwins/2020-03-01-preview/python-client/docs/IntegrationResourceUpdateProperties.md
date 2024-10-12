# IntegrationResourceUpdateProperties

Updatable properties related to the IoTHub DigitalTwinsInstance Integration Resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | DigitalTwinsInstance - IoTHub link state. | [optional] [readonly] 

## Example

```python
from openapi_client.models.integration_resource_update_properties import IntegrationResourceUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationResourceUpdateProperties from a JSON string
integration_resource_update_properties_instance = IntegrationResourceUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(IntegrationResourceUpdateProperties.to_json())

# convert the object into a dict
integration_resource_update_properties_dict = integration_resource_update_properties_instance.to_dict()
# create an instance of IntegrationResourceUpdateProperties from a dict
integration_resource_update_properties_from_dict = IntegrationResourceUpdateProperties.from_dict(integration_resource_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


