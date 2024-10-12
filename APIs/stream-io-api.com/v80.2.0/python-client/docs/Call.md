# Call


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agora** | [**AgoraCall**](AgoraCall.md) |  | [optional] 
**hms** | [**HMSCall**](HMSCall.md) |  | [optional] 
**id** | **str** |  | 
**provider** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.call import Call

# TODO update the JSON string below
json = "{}"
# create an instance of Call from a JSON string
call_instance = Call.from_json(json)
# print the JSON string representation of the object
print(Call.to_json())

# convert the object into a dict
call_dict = call_instance.to_dict()
# create an instance of Call from a dict
call_from_dict = Call.from_dict(call_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


