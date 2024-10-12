# Info200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authenticators** | [**Info200ResponseAuthenticators**](Info200ResponseAuthenticators.md) |  | [optional] 
**configuration** | **object** |  | [optional] 
**container** | **str** |  | [optional] 
**release** | **str** |  | [optional] 
**role** | **str** |  | [optional] 
**services** | **object** |  | [optional] 
**version** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.info200_response import Info200Response

# TODO update the JSON string below
json = "{}"
# create an instance of Info200Response from a JSON string
info200_response_instance = Info200Response.from_json(json)
# print the JSON string representation of the object
print(Info200Response.to_json())

# convert the object into a dict
info200_response_dict = info200_response_instance.to_dict()
# create an instance of Info200Response from a dict
info200_response_from_dict = Info200Response.from_dict(info200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


