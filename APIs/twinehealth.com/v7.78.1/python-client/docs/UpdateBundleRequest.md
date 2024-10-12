# UpdateBundleRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**BundleResource**](BundleResource.md) |  | 

## Example

```python
from openapi_client.models.update_bundle_request import UpdateBundleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateBundleRequest from a JSON string
update_bundle_request_instance = UpdateBundleRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateBundleRequest.to_json())

# convert the object into a dict
update_bundle_request_dict = update_bundle_request_instance.to_dict()
# create an instance of UpdateBundleRequest from a dict
update_bundle_request_from_dict = UpdateBundleRequest.from_dict(update_bundle_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


