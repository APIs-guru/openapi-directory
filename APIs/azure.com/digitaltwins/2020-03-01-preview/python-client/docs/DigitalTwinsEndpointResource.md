# DigitalTwinsEndpointResource

DigitalTwinsInstance endpoint resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DigitalTwinsEndpointResourceProperties**](DigitalTwinsEndpointResourceProperties.md) |  | [optional] 
**id** | **str** | The resource identifier. | [optional] [readonly] 
**name** | **str** | Extension resource name. | [optional] [readonly] 
**type** | **str** | The resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.digital_twins_endpoint_resource import DigitalTwinsEndpointResource

# TODO update the JSON string below
json = "{}"
# create an instance of DigitalTwinsEndpointResource from a JSON string
digital_twins_endpoint_resource_instance = DigitalTwinsEndpointResource.from_json(json)
# print the JSON string representation of the object
print(DigitalTwinsEndpointResource.to_json())

# convert the object into a dict
digital_twins_endpoint_resource_dict = digital_twins_endpoint_resource_instance.to_dict()
# create an instance of DigitalTwinsEndpointResource from a dict
digital_twins_endpoint_resource_from_dict = DigitalTwinsEndpointResource.from_dict(digital_twins_endpoint_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


