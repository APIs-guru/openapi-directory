# Response8

Transaction response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Code that specifies the dispensation of the financial transaction request. Details- Alpha numeric, 2 | [optional] 
**description** | **str** | This is the Description of response. Details- Alpha Numeric, Special, 80 | [optional] 

## Example

```python
from openapi_client.models.response8 import Response8

# TODO update the JSON string below
json = "{}"
# create an instance of Response8 from a JSON string
response8_instance = Response8.from_json(json)
# print the JSON string representation of the object
print(Response8.to_json())

# convert the object into a dict
response8_dict = response8_instance.to_dict()
# create an instance of Response8 from a dict
response8_from_dict = Response8.from_dict(response8_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


