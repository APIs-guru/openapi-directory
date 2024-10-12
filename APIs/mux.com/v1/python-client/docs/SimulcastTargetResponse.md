# SimulcastTargetResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**SimulcastTarget**](SimulcastTarget.md) |  | [optional] 

## Example

```python
from openapi_client.models.simulcast_target_response import SimulcastTargetResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SimulcastTargetResponse from a JSON string
simulcast_target_response_instance = SimulcastTargetResponse.from_json(json)
# print the JSON string representation of the object
print(SimulcastTargetResponse.to_json())

# convert the object into a dict
simulcast_target_response_dict = simulcast_target_response_instance.to_dict()
# create an instance of SimulcastTargetResponse from a dict
simulcast_target_response_from_dict = SimulcastTargetResponse.from_dict(simulcast_target_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


