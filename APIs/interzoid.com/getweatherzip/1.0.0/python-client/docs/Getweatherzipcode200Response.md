# Getweatherzipcode200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** |  | [optional] 
**code** | **str** |  | [optional] 
**credits** | **str** |  | [optional] 
**relative_humidity** | **str** |  | [optional] 
**state** | **str** |  | [optional] 
**temp_c** | **str** |  | [optional] 
**temp_f** | **str** |  | [optional] 
**visibility_miles** | **str** |  | [optional] 
**weather** | **str** |  | [optional] 
**wind_dir** | **str** |  | [optional] 
**wind_mph** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.getweatherzipcode200_response import Getweatherzipcode200Response

# TODO update the JSON string below
json = "{}"
# create an instance of Getweatherzipcode200Response from a JSON string
getweatherzipcode200_response_instance = Getweatherzipcode200Response.from_json(json)
# print the JSON string representation of the object
print(Getweatherzipcode200Response.to_json())

# convert the object into a dict
getweatherzipcode200_response_dict = getweatherzipcode200_response_instance.to_dict()
# create an instance of Getweatherzipcode200Response from a dict
getweatherzipcode200_response_from_dict = Getweatherzipcode200Response.from_dict(getweatherzipcode200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


