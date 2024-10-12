# Setchargingschedule201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command** | **object** |  | [optional] 
**message** | **str** |  | [optional] 
**ok** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.setchargingschedule201_response import Setchargingschedule201Response

# TODO update the JSON string below
json = "{}"
# create an instance of Setchargingschedule201Response from a JSON string
setchargingschedule201_response_instance = Setchargingschedule201Response.from_json(json)
# print the JSON string representation of the object
print(Setchargingschedule201Response.to_json())

# convert the object into a dict
setchargingschedule201_response_dict = setchargingschedule201_response_instance.to_dict()
# create an instance of Setchargingschedule201Response from a dict
setchargingschedule201_response_from_dict = Setchargingschedule201Response.from_dict(setchargingschedule201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


