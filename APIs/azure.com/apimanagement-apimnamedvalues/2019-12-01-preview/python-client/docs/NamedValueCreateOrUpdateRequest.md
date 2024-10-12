# NamedValueCreateOrUpdateRequest

NamedValue details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**NamedValueCreateOrUpdateRequestProperties**](NamedValueCreateOrUpdateRequestProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type for API Management resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.named_value_create_or_update_request import NamedValueCreateOrUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of NamedValueCreateOrUpdateRequest from a JSON string
named_value_create_or_update_request_instance = NamedValueCreateOrUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(NamedValueCreateOrUpdateRequest.to_json())

# convert the object into a dict
named_value_create_or_update_request_dict = named_value_create_or_update_request_instance.to_dict()
# create an instance of NamedValueCreateOrUpdateRequest from a dict
named_value_create_or_update_request_from_dict = NamedValueCreateOrUpdateRequest.from_dict(named_value_create_or_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


