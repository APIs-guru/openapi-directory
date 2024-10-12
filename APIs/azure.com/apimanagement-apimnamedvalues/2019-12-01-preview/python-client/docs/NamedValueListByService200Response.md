# NamedValueListByService200Response

Paged NamedValue list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[NamedValueListByService200ResponseValueInner]**](NamedValueListByService200ResponseValueInner.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.named_value_list_by_service200_response import NamedValueListByService200Response

# TODO update the JSON string below
json = "{}"
# create an instance of NamedValueListByService200Response from a JSON string
named_value_list_by_service200_response_instance = NamedValueListByService200Response.from_json(json)
# print the JSON string representation of the object
print(NamedValueListByService200Response.to_json())

# convert the object into a dict
named_value_list_by_service200_response_dict = named_value_list_by_service200_response_instance.to_dict()
# create an instance of NamedValueListByService200Response from a dict
named_value_list_by_service200_response_from_dict = NamedValueListByService200Response.from_dict(named_value_list_by_service200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


