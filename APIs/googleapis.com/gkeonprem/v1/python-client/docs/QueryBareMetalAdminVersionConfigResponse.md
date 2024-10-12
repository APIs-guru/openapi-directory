# QueryBareMetalAdminVersionConfigResponse

Response message for querying bare metal admin cluster version config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**versions** | [**List[BareMetalVersionInfo]**](BareMetalVersionInfo.md) | List of available versions to install or to upgrade to. | [optional] 

## Example

```python
from openapi_client.models.query_bare_metal_admin_version_config_response import QueryBareMetalAdminVersionConfigResponse

# TODO update the JSON string below
json = "{}"
# create an instance of QueryBareMetalAdminVersionConfigResponse from a JSON string
query_bare_metal_admin_version_config_response_instance = QueryBareMetalAdminVersionConfigResponse.from_json(json)
# print the JSON string representation of the object
print(QueryBareMetalAdminVersionConfigResponse.to_json())

# convert the object into a dict
query_bare_metal_admin_version_config_response_dict = query_bare_metal_admin_version_config_response_instance.to_dict()
# create an instance of QueryBareMetalAdminVersionConfigResponse from a dict
query_bare_metal_admin_version_config_response_from_dict = QueryBareMetalAdminVersionConfigResponse.from_dict(query_bare_metal_admin_version_config_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


