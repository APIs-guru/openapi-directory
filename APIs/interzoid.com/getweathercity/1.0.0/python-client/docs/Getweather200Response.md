# Getweather200Response


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
from openapi_client.models.getweather200_response import Getweather200Response

# TODO update the JSON string below
json = "{}"
# create an instance of Getweather200Response from a JSON string
getweather200_response_instance = Getweather200Response.from_json(json)
# print the JSON string representation of the object
print(Getweather200Response.to_json())

# convert the object into a dict
getweather200_response_dict = getweather200_response_instance.to_dict()
# create an instance of Getweather200Response from a dict
getweather200_response_from_dict = Getweather200Response.from_dict(getweather200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


