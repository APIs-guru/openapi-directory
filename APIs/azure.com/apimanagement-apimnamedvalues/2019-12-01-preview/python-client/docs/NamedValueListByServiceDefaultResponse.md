# NamedValueListByServiceDefaultResponse

Error Response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**NamedValueListByServiceDefaultResponseError**](NamedValueListByServiceDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.named_value_list_by_service_default_response import NamedValueListByServiceDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of NamedValueListByServiceDefaultResponse from a JSON string
named_value_list_by_service_default_response_instance = NamedValueListByServiceDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(NamedValueListByServiceDefaultResponse.to_json())

# convert the object into a dict
named_value_list_by_service_default_response_dict = named_value_list_by_service_default_response_instance.to_dict()
# create an instance of NamedValueListByServiceDefaultResponse from a dict
named_value_list_by_service_default_response_from_dict = NamedValueListByServiceDefaultResponse.from_dict(named_value_list_by_service_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


