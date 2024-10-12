# PropertyGetDefaultResponse

Error Body contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Service-defined error code. This code serves as a sub-status for the HTTP error code specified in the response. | [optional] 
**details** | [**List[PropertyGetDefaultResponseDetailsInner]**](PropertyGetDefaultResponseDetailsInner.md) | The list of invalid fields send in request, in case of validation error. | [optional] 
**message** | **str** | Human-readable representation of the error. | [optional] 

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


