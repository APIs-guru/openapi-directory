# ListGcpUserAccessBindingsResponse

Response of ListGcpUserAccessBindings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcp_user_access_bindings** | [**List[GcpUserAccessBinding]**](GcpUserAccessBinding.md) | GcpUserAccessBinding | [optional] 
**next_page_token** | **str** | Token to get the next page of items. If blank, there are no more items. | [optional] 

## Example

```python
from openapi_client.models.list_gcp_user_access_bindings_response import ListGcpUserAccessBindingsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListGcpUserAccessBindingsResponse from a JSON string
list_gcp_user_access_bindings_response_instance = ListGcpUserAccessBindingsResponse.from_json(json)
# print the JSON string representation of the object
print(ListGcpUserAccessBindingsResponse.to_json())

# convert the object into a dict
list_gcp_user_access_bindings_response_dict = list_gcp_user_access_bindings_response_instance.to_dict()
# create an instance of ListGcpUserAccessBindingsResponse from a dict
list_gcp_user_access_bindings_response_from_dict = ListGcpUserAccessBindingsResponse.from_dict(list_gcp_user_access_bindings_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


