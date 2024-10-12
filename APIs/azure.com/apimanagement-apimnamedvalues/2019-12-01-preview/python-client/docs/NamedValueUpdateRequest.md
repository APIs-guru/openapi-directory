# NamedValueUpdateRequest

NamedValue update Parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**NamedValueUpdateRequestProperties**](NamedValueUpdateRequestProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.named_value_update_request import NamedValueUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of NamedValueUpdateRequest from a JSON string
named_value_update_request_instance = NamedValueUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(NamedValueUpdateRequest.to_json())

# convert the object into a dict
named_value_update_request_dict = named_value_update_request_instance.to_dict()
# create an instance of NamedValueUpdateRequest from a dict
named_value_update_request_from_dict = NamedValueUpdateRequest.from_dict(named_value_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


