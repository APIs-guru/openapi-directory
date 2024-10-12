# AppStoreVersionBuildLinkageRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppRelationshipsBuildsDataInner**](AppRelationshipsBuildsDataInner.md) |  | 

## Example

```python
from openapi_client.models.app_store_version_build_linkage_request import AppStoreVersionBuildLinkageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreVersionBuildLinkageRequest from a JSON string
app_store_version_build_linkage_request_instance = AppStoreVersionBuildLinkageRequest.from_json(json)
# print the JSON string representation of the object
print(AppStoreVersionBuildLinkageRequest.to_json())

# convert the object into a dict
app_store_version_build_linkage_request_dict = app_store_version_build_linkage_request_instance.to_dict()
# create an instance of AppStoreVersionBuildLinkageRequest from a dict
app_store_version_build_linkage_request_from_dict = AppStoreVersionBuildLinkageRequest.from_dict(app_store_version_build_linkage_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


