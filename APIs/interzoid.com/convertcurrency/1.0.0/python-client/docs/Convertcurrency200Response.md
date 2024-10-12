# Convertcurrency200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | [optional] 
**converted** | **str** |  | [optional] 
**credits** | **str** |  | [optional] 
**currency** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.convertcurrency200_response import Convertcurrency200Response

# TODO update the JSON string below
json = "{}"
# create an instance of Convertcurrency200Response from a JSON string
convertcurrency200_response_instance = Convertcurrency200Response.from_json(json)
# print the JSON string representation of the object
print(Convertcurrency200Response.to_json())

# convert the object into a dict
convertcurrency200_response_dict = convertcurrency200_response_instance.to_dict()
# create an instance of Convertcurrency200Response from a dict
convertcurrency200_response_from_dict = Convertcurrency200Response.from_dict(convertcurrency200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


