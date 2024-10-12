# Getglobaltime200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clock_time** | **str** |  | [optional] 
**code** | **str** |  | [optional] 
**credits** | **str** |  | [optional] 
**current_date** | **str** |  | [optional] 
**current_time** | **str** |  | [optional] 
**day** | **str** |  | [optional] 
**hour** | **str** |  | [optional] 
**locale** | **str** |  | [optional] 
**minute** | **str** |  | [optional] 
**month** | **str** |  | [optional] 
**month_number** | **str** |  | [optional] 
**second** | **str** |  | [optional] 
**time_stamp** | **str** |  | [optional] 
**weekday** | **str** |  | [optional] 
**year** | **str** |  | [optional] 
**zone** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.getglobaltime200_response import Getglobaltime200Response

# TODO update the JSON string below
json = "{}"
# create an instance of Getglobaltime200Response from a JSON string
getglobaltime200_response_instance = Getglobaltime200Response.from_json(json)
# print the JSON string representation of the object
print(Getglobaltime200Response.to_json())

# convert the object into a dict
getglobaltime200_response_dict = getglobaltime200_response_instance.to_dict()
# create an instance of Getglobaltime200Response from a dict
getglobaltime200_response_from_dict = Getglobaltime200Response.from_dict(getglobaltime200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


