# IntegrationResourceState

Properties related to the IoTHub DigitalTwinsInstance Integration Resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | DigitalTwinsInstance - IoTHub link state. | [optional] [readonly] 

## Example

```python
from openapi_client.models.integration_resource_state import IntegrationResourceState

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationResourceState from a JSON string
integration_resource_state_instance = IntegrationResourceState.from_json(json)
# print the JSON string representation of the object
print(IntegrationResourceState.to_json())

# convert the object into a dict
integration_resource_state_dict = integration_resource_state_instance.to_dict()
# create an instance of IntegrationResourceState from a dict
integration_resource_state_from_dict = IntegrationResourceState.from_dict(integration_resource_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


