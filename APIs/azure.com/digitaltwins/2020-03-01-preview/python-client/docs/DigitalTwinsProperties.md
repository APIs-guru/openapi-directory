# DigitalTwinsProperties

The properties of a DigitalTwinsInstance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_time** | **datetime** | Time when DigitalTwinsInstance was created. | [optional] [readonly] 
**host_name** | **str** | Api endpoint to work with DigitalTwinsInstance. | [optional] [readonly] 
**last_updated_time** | **datetime** | Time when DigitalTwinsInstance was created. | [optional] [readonly] 
**provisioning_state** | **str** | The provisioning state. | [optional] [readonly] 

## Example

```python
from openapi_client.models.digital_twins_properties import DigitalTwinsProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DigitalTwinsProperties from a JSON string
digital_twins_properties_instance = DigitalTwinsProperties.from_json(json)
# print the JSON string representation of the object
print(DigitalTwinsProperties.to_json())

# convert the object into a dict
digital_twins_properties_dict = digital_twins_properties_instance.to_dict()
# create an instance of DigitalTwinsProperties from a dict
digital_twins_properties_from_dict = DigitalTwinsProperties.from_dict(digital_twins_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


