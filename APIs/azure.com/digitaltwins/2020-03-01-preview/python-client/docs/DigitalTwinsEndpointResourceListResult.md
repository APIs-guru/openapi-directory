# DigitalTwinsEndpointResourceListResult

A list of DigitalTwinsInstance Endpoints with a next link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link used to get the next page of DigitalTwinsInstance Endpoints. | [optional] 
**value** | [**List[DigitalTwinsEndpointResource]**](DigitalTwinsEndpointResource.md) | A list of DigitalTwinsInstance Endpoints. | [optional] 

## Example

```python
from openapi_client.models.digital_twins_endpoint_resource_list_result import DigitalTwinsEndpointResourceListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DigitalTwinsEndpointResourceListResult from a JSON string
digital_twins_endpoint_resource_list_result_instance = DigitalTwinsEndpointResourceListResult.from_json(json)
# print the JSON string representation of the object
print(DigitalTwinsEndpointResourceListResult.to_json())

# convert the object into a dict
digital_twins_endpoint_resource_list_result_dict = digital_twins_endpoint_resource_list_result_instance.to_dict()
# create an instance of DigitalTwinsEndpointResourceListResult from a dict
digital_twins_endpoint_resource_list_result_from_dict = DigitalTwinsEndpointResourceListResult.from_dict(digital_twins_endpoint_resource_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


