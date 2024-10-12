# DigitalTwinsEndpointResourceProperties

Properties related to Digital Twins Endpoint

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_time** | **datetime** | Time when the Endpoint was added to DigitalTwinsInstance. | [optional] [readonly] 
**endpoint_type** | **str** | The type of Digital Twins endpoint | 
**provisioning_state** | **str** | The provisioning state. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The resource tags. | [optional] 

## Example

```python
from openapi_client.models.digital_twins_endpoint_resource_properties import DigitalTwinsEndpointResourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DigitalTwinsEndpointResourceProperties from a JSON string
digital_twins_endpoint_resource_properties_instance = DigitalTwinsEndpointResourceProperties.from_json(json)
# print the JSON string representation of the object
print(DigitalTwinsEndpointResourceProperties.to_json())

# convert the object into a dict
digital_twins_endpoint_resource_properties_dict = digital_twins_endpoint_resource_properties_instance.to_dict()
# create an instance of DigitalTwinsEndpointResourceProperties from a dict
digital_twins_endpoint_resource_properties_from_dict = DigitalTwinsEndpointResourceProperties.from_dict(digital_twins_endpoint_resource_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


