# FloodlightConfigurationsListResponse

Floodlight Configuration List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**floodlight_configurations** | [**List[FloodlightConfiguration]**](FloodlightConfiguration.md) | Floodlight configuration collection. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#floodlightConfigurationsListResponse\&quot;. | [optional] 

## Example

```python
from openapi_client.models.floodlight_configurations_list_response import FloodlightConfigurationsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FloodlightConfigurationsListResponse from a JSON string
floodlight_configurations_list_response_instance = FloodlightConfigurationsListResponse.from_json(json)
# print the JSON string representation of the object
print(FloodlightConfigurationsListResponse.to_json())

# convert the object into a dict
floodlight_configurations_list_response_dict = floodlight_configurations_list_response_instance.to_dict()
# create an instance of FloodlightConfigurationsListResponse from a dict
floodlight_configurations_list_response_from_dict = FloodlightConfigurationsListResponse.from_dict(floodlight_configurations_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


