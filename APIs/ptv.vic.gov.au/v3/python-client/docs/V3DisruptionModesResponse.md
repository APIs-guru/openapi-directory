# V3DisruptionModesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disruption_modes** | [**List[V3DisruptionMode]**](V3DisruptionMode.md) | Transport mode identifiers | [optional] 
**status** | [**V3Status**](V3Status.md) |  | [optional] 

## Example

```python
from openapi_client.models.v3_disruption_modes_response import V3DisruptionModesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V3DisruptionModesResponse from a JSON string
v3_disruption_modes_response_instance = V3DisruptionModesResponse.from_json(json)
# print the JSON string representation of the object
print(V3DisruptionModesResponse.to_json())

# convert the object into a dict
v3_disruption_modes_response_dict = v3_disruption_modes_response_instance.to_dict()
# create an instance of V3DisruptionModesResponse from a dict
v3_disruption_modes_response_from_dict = V3DisruptionModesResponse.from_dict(v3_disruption_modes_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


