# V3SiriLineRef


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direction_ref** | **int** | Siri DirectionRef  (in, out, up, down, clockwise, counterclockwise, Inbound, Outbound) | [optional] 
**line_ref** | **str** | Siri LineRef | 

## Example

```python
from openapi_client.models.v3_siri_line_ref import V3SiriLineRef

# TODO update the JSON string below
json = "{}"
# create an instance of V3SiriLineRef from a JSON string
v3_siri_line_ref_instance = V3SiriLineRef.from_json(json)
# print the JSON string representation of the object
print(V3SiriLineRef.to_json())

# convert the object into a dict
v3_siri_line_ref_dict = v3_siri_line_ref_instance.to_dict()
# create an instance of V3SiriLineRef from a dict
v3_siri_line_ref_from_dict = V3SiriLineRef.from_dict(v3_siri_line_ref_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


