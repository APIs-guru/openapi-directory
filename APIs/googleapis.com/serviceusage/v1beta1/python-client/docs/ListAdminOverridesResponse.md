# ListAdminOverridesResponse

Response message for ListAdminOverrides.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token identifying which result to start with; returned by a previous list call. | [optional] 
**overrides** | [**List[QuotaOverride]**](QuotaOverride.md) | Admin overrides on this limit. | [optional] 

## Example

```python
from openapi_client.models.list_admin_overrides_response import ListAdminOverridesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAdminOverridesResponse from a JSON string
list_admin_overrides_response_instance = ListAdminOverridesResponse.from_json(json)
# print the JSON string representation of the object
print(ListAdminOverridesResponse.to_json())

# convert the object into a dict
list_admin_overrides_response_dict = list_admin_overrides_response_instance.to_dict()
# create an instance of ListAdminOverridesResponse from a dict
list_admin_overrides_response_from_dict = ListAdminOverridesResponse.from_dict(list_admin_overrides_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


