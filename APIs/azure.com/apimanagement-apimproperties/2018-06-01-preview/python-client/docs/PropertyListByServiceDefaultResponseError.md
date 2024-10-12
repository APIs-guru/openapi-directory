# PropertyListByServiceDefaultResponseError

Error Body contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Service-defined error code. This code serves as a sub-status for the HTTP error code specified in the response. | [optional] 
**details** | [**List[PropertyListByServiceDefaultResponseErrorDetailsInner]**](PropertyListByServiceDefaultResponseErrorDetailsInner.md) | The list of invalid fields send in request, in case of validation error. | [optional] 
**message** | **str** | Human-readable representation of the error. | [optional] 

## Example

```python
from openapi_client.models.property_list_by_service_default_response_error import PropertyListByServiceDefaultResponseError

# TODO update the JSON string below
json = "{}"
# create an instance of PropertyListByServiceDefaultResponseError from a JSON string
property_list_by_service_default_response_error_instance = PropertyListByServiceDefaultResponseError.from_json(json)
# print the JSON string representation of the object
print(PropertyListByServiceDefaultResponseError.to_json())

# convert the object into a dict
property_list_by_service_default_response_error_dict = property_list_by_service_default_response_error_instance.to_dict()
# create an instance of PropertyListByServiceDefaultResponseError from a dict
property_list_by_service_default_response_error_from_dict = PropertyListByServiceDefaultResponseError.from_dict(property_list_by_service_default_response_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


