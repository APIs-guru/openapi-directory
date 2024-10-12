# UpdateBundleResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**BundleResource**](BundleResource.md) |  | 
**meta** | [**CreateOrUpdateMetaResponse**](CreateOrUpdateMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_bundle_response import UpdateBundleResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateBundleResponse from a JSON string
update_bundle_response_instance = UpdateBundleResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateBundleResponse.to_json())

# convert the object into a dict
update_bundle_response_dict = update_bundle_response_instance.to_dict()
# create an instance of UpdateBundleResponse from a dict
update_bundle_response_from_dict = UpdateBundleResponse.from_dict(update_bundle_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


