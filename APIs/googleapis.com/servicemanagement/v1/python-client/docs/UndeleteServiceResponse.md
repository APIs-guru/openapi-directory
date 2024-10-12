# UndeleteServiceResponse

Response message for UndeleteService method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service** | [**ManagedService**](ManagedService.md) |  | [optional] 

## Example

```python
from openapi_client.models.undelete_service_response import UndeleteServiceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UndeleteServiceResponse from a JSON string
undelete_service_response_instance = UndeleteServiceResponse.from_json(json)
# print the JSON string representation of the object
print(UndeleteServiceResponse.to_json())

# convert the object into a dict
undelete_service_response_dict = undelete_service_response_instance.to_dict()
# create an instance of UndeleteServiceResponse from a dict
undelete_service_response_from_dict = UndeleteServiceResponse.from_dict(undelete_service_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


