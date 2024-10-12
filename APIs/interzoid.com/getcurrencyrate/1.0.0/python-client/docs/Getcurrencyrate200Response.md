# Getcurrencyrate200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | [optional] 
**country** | **str** |  | [optional] 
**credits** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**rate** | **str** |  | [optional] 
**symbol** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.getcurrencyrate200_response import Getcurrencyrate200Response

# TODO update the JSON string below
json = "{}"
# create an instance of Getcurrencyrate200Response from a JSON string
getcurrencyrate200_response_instance = Getcurrencyrate200Response.from_json(json)
# print the JSON string representation of the object
print(Getcurrencyrate200Response.to_json())

# convert the object into a dict
getcurrencyrate200_response_dict = getcurrencyrate200_response_instance.to_dict()
# create an instance of Getcurrencyrate200Response from a dict
getcurrencyrate200_response_from_dict = Getcurrencyrate200Response.from_dict(getcurrencyrate200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


