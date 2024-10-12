# V3DisruptionsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disruptions** | [**V3Disruptions**](V3Disruptions.md) |  | [optional] 
**status** | [**V3Status**](V3Status.md) |  | [optional] 

## Example

```python
from openapi_client.models.v3_disruptions_response import V3DisruptionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V3DisruptionsResponse from a JSON string
v3_disruptions_response_instance = V3DisruptionsResponse.from_json(json)
# print the JSON string representation of the object
print(V3DisruptionsResponse.to_json())

# convert the object into a dict
v3_disruptions_response_dict = v3_disruptions_response_instance.to_dict()
# create an instance of V3DisruptionsResponse from a dict
v3_disruptions_response_from_dict = V3DisruptionsResponse.from_dict(v3_disruptions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


