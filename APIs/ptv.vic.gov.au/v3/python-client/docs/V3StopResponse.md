# V3StopResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disruptions** | [**Dict[str, V3Disruption]**](V3Disruption.md) | Disruption information applicable to relevant routes or stops | [optional] 
**status** | [**V3Status**](V3Status.md) |  | [optional] 
**stop** | [**V3StopDetails**](V3StopDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.v3_stop_response import V3StopResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V3StopResponse from a JSON string
v3_stop_response_instance = V3StopResponse.from_json(json)
# print the JSON string representation of the object
print(V3StopResponse.to_json())

# convert the object into a dict
v3_stop_response_dict = v3_stop_response_instance.to_dict()
# create an instance of V3StopResponse from a dict
v3_stop_response_from_dict = V3StopResponse.from_dict(v3_stop_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


