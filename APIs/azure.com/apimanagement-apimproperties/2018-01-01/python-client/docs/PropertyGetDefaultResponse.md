# PropertyGetDefaultResponse

Error Response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**PropertyGetDefaultResponseError**](PropertyGetDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.property_get_default_response import PropertyGetDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PropertyGetDefaultResponse from a JSON string
property_get_default_response_instance = PropertyGetDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(PropertyGetDefaultResponse.to_json())

# convert the object into a dict
property_get_default_response_dict = property_get_default_response_instance.to_dict()
# create an instance of PropertyGetDefaultResponse from a dict
property_get_default_response_from_dict = PropertyGetDefaultResponse.from_dict(property_get_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


