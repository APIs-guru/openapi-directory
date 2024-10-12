# AdminMappingsGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mappings** | [**List[AdminMappingsGet200ResponseMappingsInner]**](AdminMappingsGet200ResponseMappingsInner.md) |  | [optional] 
**meta** | [**AdminMappingsGet200ResponseMeta**](AdminMappingsGet200ResponseMeta.md) |  | [optional] 

## Example

```python
from openapi_client.models.admin_mappings_get200_response import AdminMappingsGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of AdminMappingsGet200Response from a JSON string
admin_mappings_get200_response_instance = AdminMappingsGet200Response.from_json(json)
# print the JSON string representation of the object
print(AdminMappingsGet200Response.to_json())

# convert the object into a dict
admin_mappings_get200_response_dict = admin_mappings_get200_response_instance.to_dict()
# create an instance of AdminMappingsGet200Response from a dict
admin_mappings_get200_response_from_dict = AdminMappingsGet200Response.from_dict(admin_mappings_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


