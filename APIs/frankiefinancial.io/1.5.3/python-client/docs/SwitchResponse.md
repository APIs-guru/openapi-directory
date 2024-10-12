# SwitchResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**correlation_id** | **str** | The correlationId as passed in the request | 
**next_steps** | [**List[DisplayMarkUp]**](DisplayMarkUp.md) | Hierarchical list of objects for rendering the next steps | [optional] 
**plan** | [**Plan**](Plan.md) |  | 
**reference** | **str** | A unique reference for this switch request | 
**switch_date** | **str** | Timestamp of switch request | 
**version** | **str** | Version of the API on which the switch request took place. This value should be reported with any issue raised. | 

## Example

```python
from openapi_client.models.switch_response import SwitchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SwitchResponse from a JSON string
switch_response_instance = SwitchResponse.from_json(json)
# print the JSON string representation of the object
print(SwitchResponse.to_json())

# convert the object into a dict
switch_response_dict = switch_response_instance.to_dict()
# create an instance of SwitchResponse from a dict
switch_response_from_dict = SwitchResponse.from_dict(switch_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


