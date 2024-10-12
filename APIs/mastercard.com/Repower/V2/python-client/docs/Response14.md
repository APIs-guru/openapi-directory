# Response14

Transaction response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Code that specifies the dispensation of the financial transaction request. Details- Alpha numeric, 2 | [optional] 
**description** | **str** | This is the Description of response. Details- Alpha Numeric, Special, 80 | [optional] 

## Example

```python
from openapi_client.models.response14 import Response14

# TODO update the JSON string below
json = "{}"
# create an instance of Response14 from a JSON string
response14_instance = Response14.from_json(json)
# print the JSON string representation of the object
print(Response14.to_json())

# convert the object into a dict
response14_dict = response14_instance.to_dict()
# create an instance of Response14 from a dict
response14_from_dict = Response14.from_dict(response14_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


