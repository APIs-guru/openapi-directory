# ApisListByServiceDefaultResponse

Error Body contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Service-defined error code. This code serves as a sub-status for the HTTP error code specified in the response. | [optional] 
**details** | [**List[ApisListByServiceDefaultResponseDetailsInner]**](ApisListByServiceDefaultResponseDetailsInner.md) | The list of invalid fields send in request, in case of validation error. | [optional] 
**message** | **str** | Human-readable representation of the error. | [optional] 

## Example

```python
from openapi_client.models.apis_list_by_service_default_response import ApisListByServiceDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ApisListByServiceDefaultResponse from a JSON string
apis_list_by_service_default_response_instance = ApisListByServiceDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(ApisListByServiceDefaultResponse.to_json())

# convert the object into a dict
apis_list_by_service_default_response_dict = apis_list_by_service_default_response_instance.to_dict()
# create an instance of ApisListByServiceDefaultResponse from a dict
apis_list_by_service_default_response_from_dict = ApisListByServiceDefaultResponse.from_dict(apis_list_by_service_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


