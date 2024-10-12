# DigitalTwinsIntegrationResourceListResult

A list of DigitalTwinsInstance IoTHubs with a next link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link used to get the next page of DigitalTwinsInstance IoTHubs. | [optional] 
**value** | [**List[IntegrationResource]**](IntegrationResource.md) | A list of DigitalTwinsInstance IoTHubs. | [optional] 

## Example

```python
from openapi_client.models.digital_twins_integration_resource_list_result import DigitalTwinsIntegrationResourceListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DigitalTwinsIntegrationResourceListResult from a JSON string
digital_twins_integration_resource_list_result_instance = DigitalTwinsIntegrationResourceListResult.from_json(json)
# print the JSON string representation of the object
print(DigitalTwinsIntegrationResourceListResult.to_json())

# convert the object into a dict
digital_twins_integration_resource_list_result_dict = digital_twins_integration_resource_list_result_instance.to_dict()
# create an instance of DigitalTwinsIntegrationResourceListResult from a dict
digital_twins_integration_resource_list_result_from_dict = DigitalTwinsIntegrationResourceListResult.from_dict(digital_twins_integration_resource_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


