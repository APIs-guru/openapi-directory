# Globalpageload200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | [optional] 
**contents** | **str** |  | [optional] 
**credits** | **str** |  | [optional] 
**origin** | **str** |  | [optional] 
**page_response_status** | **str** |  | [optional] 
**seconds** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.globalpageload200_response import Globalpageload200Response

# TODO update the JSON string below
json = "{}"
# create an instance of Globalpageload200Response from a JSON string
globalpageload200_response_instance = Globalpageload200Response.from_json(json)
# print the JSON string representation of the object
print(Globalpageload200Response.to_json())

# convert the object into a dict
globalpageload200_response_dict = globalpageload200_response_instance.to_dict()
# create an instance of Globalpageload200Response from a dict
globalpageload200_response_from_dict = Globalpageload200Response.from_dict(globalpageload200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


