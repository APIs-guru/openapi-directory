# ContentProviderEndpoint

This feature is not generally available.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**package_name** | **str** | This feature is not generally available. | [optional] 
**signing_certs_sha256** | **List[str]** | Required. This feature is not generally available. | [optional] 
**uri** | **str** | This feature is not generally available. | [optional] 

## Example

```python
from openapi_client.models.content_provider_endpoint import ContentProviderEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of ContentProviderEndpoint from a JSON string
content_provider_endpoint_instance = ContentProviderEndpoint.from_json(json)
# print the JSON string representation of the object
print(ContentProviderEndpoint.to_json())

# convert the object into a dict
content_provider_endpoint_dict = content_provider_endpoint_instance.to_dict()
# create an instance of ContentProviderEndpoint from a dict
content_provider_endpoint_from_dict = ContentProviderEndpoint.from_dict(content_provider_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


