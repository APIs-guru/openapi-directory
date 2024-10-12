# GetDrivers200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** |  | [optional] 
**ok** | **bool** |  | [optional] 
**result** | **List[object]** |  | [optional] 

## Example

```python
from openapi_client.models.get_drivers200_response import GetDrivers200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetDrivers200Response from a JSON string
get_drivers200_response_instance = GetDrivers200Response.from_json(json)
# print the JSON string representation of the object
print(GetDrivers200Response.to_json())

# convert the object into a dict
get_drivers200_response_dict = get_drivers200_response_instance.to_dict()
# create an instance of GetDrivers200Response from a dict
get_drivers200_response_from_dict = GetDrivers200Response.from_dict(get_drivers200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


