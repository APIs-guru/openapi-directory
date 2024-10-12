# RtmConnectErrorSchema

Schema for error response from rtm.connect method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.rtm_connect_error_schema import RtmConnectErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of RtmConnectErrorSchema from a JSON string
rtm_connect_error_schema_instance = RtmConnectErrorSchema.from_json(json)
# print the JSON string representation of the object
print(RtmConnectErrorSchema.to_json())

# convert the object into a dict
rtm_connect_error_schema_dict = rtm_connect_error_schema_instance.to_dict()
# create an instance of RtmConnectErrorSchema from a dict
rtm_connect_error_schema_from_dict = RtmConnectErrorSchema.from_dict(rtm_connect_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


