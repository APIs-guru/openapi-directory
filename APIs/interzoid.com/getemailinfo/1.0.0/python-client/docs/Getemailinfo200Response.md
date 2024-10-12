# Getemailinfo200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | [optional] 
**credits** | **str** |  | [optional] 
**email** | **str** |  | [optional] 
**geolocation** | **str** |  | [optional] 
**info** | **str** |  | [optional] 
**is_disposable** | **str** |  | [optional] 
**is_educational** | **str** |  | [optional] 
**is_generic** | **str** |  | [optional] 
**is_government** | **str** |  | [optional] 
**is_organizational** | **str** |  | [optional] 
**is_vulgar** | **str** |  | [optional] 
**response** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.getemailinfo200_response import Getemailinfo200Response

# TODO update the JSON string below
json = "{}"
# create an instance of Getemailinfo200Response from a JSON string
getemailinfo200_response_instance = Getemailinfo200Response.from_json(json)
# print the JSON string representation of the object
print(Getemailinfo200Response.to_json())

# convert the object into a dict
getemailinfo200_response_dict = getemailinfo200_response_instance.to_dict()
# create an instance of Getemailinfo200Response from a dict
getemailinfo200_response_from_dict = Getemailinfo200Response.from_dict(getemailinfo200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


