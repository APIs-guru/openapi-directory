# Getaddressmatch200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | [optional] 
**credits** | **str** |  | [optional] 
**simkey** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.getaddressmatch200_response import Getaddressmatch200Response

# TODO update the JSON string below
json = "{}"
# create an instance of Getaddressmatch200Response from a JSON string
getaddressmatch200_response_instance = Getaddressmatch200Response.from_json(json)
# print the JSON string representation of the object
print(Getaddressmatch200Response.to_json())

# convert the object into a dict
getaddressmatch200_response_dict = getaddressmatch200_response_instance.to_dict()
# create an instance of Getaddressmatch200Response from a dict
getaddressmatch200_response_from_dict = Getaddressmatch200Response.from_dict(getaddressmatch200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


