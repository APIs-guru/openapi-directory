# PropertyListByServiceDefaultResponse

Error Response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**PropertyListByServiceDefaultResponseError**](PropertyListByServiceDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.property_list_by_service_default_response import PropertyListByServiceDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PropertyListByServiceDefaultResponse from a JSON string
property_list_by_service_default_response_instance = PropertyListByServiceDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(PropertyListByServiceDefaultResponse.to_json())

# convert the object into a dict
property_list_by_service_default_response_dict = property_list_by_service_default_response_instance.to_dict()
# create an instance of PropertyListByServiceDefaultResponse from a dict
property_list_by_service_default_response_from_dict = PropertyListByServiceDefaultResponse.from_dict(property_list_by_service_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


