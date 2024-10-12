# NamedValueGet200Response

NamedValue details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**NamedValueListByService200ResponseValueInnerProperties**](NamedValueListByService200ResponseValueInnerProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.named_value_get200_response import NamedValueGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of NamedValueGet200Response from a JSON string
named_value_get200_response_instance = NamedValueGet200Response.from_json(json)
# print the JSON string representation of the object
print(NamedValueGet200Response.to_json())

# convert the object into a dict
named_value_get200_response_dict = named_value_get200_response_instance.to_dict()
# create an instance of NamedValueGet200Response from a dict
named_value_get200_response_from_dict = NamedValueGet200Response.from_dict(named_value_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


