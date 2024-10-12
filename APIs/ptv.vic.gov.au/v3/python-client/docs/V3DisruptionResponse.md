# V3DisruptionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disruption** | [**V3Disruption**](V3Disruption.md) |  | [optional] 
**status** | [**V3Status**](V3Status.md) |  | [optional] 

## Example

```python
from openapi_client.models.v3_disruption_response import V3DisruptionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V3DisruptionResponse from a JSON string
v3_disruption_response_instance = V3DisruptionResponse.from_json(json)
# print the JSON string representation of the object
print(V3DisruptionResponse.to_json())

# convert the object into a dict
v3_disruption_response_dict = v3_disruption_response_instance.to_dict()
# create an instance of V3DisruptionResponse from a dict
v3_disruption_response_from_dict = V3DisruptionResponse.from_dict(v3_disruption_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


