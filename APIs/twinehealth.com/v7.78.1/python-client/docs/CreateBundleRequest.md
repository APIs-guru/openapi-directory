# CreateBundleRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**BundleResource**](BundleResource.md) |  | 

## Example

```python
from openapi_client.models.create_bundle_request import CreateBundleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateBundleRequest from a JSON string
create_bundle_request_instance = CreateBundleRequest.from_json(json)
# print the JSON string representation of the object
print(CreateBundleRequest.to_json())

# convert the object into a dict
create_bundle_request_dict = create_bundle_request_instance.to_dict()
# create an instance of CreateBundleRequest from a dict
create_bundle_request_from_dict = CreateBundleRequest.from_dict(create_bundle_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


