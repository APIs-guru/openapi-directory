# CreateBundleResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**BundleResource**](BundleResource.md) |  | 
**meta** | [**CreateOrUpdateMetaResponse**](CreateOrUpdateMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_bundle_response import CreateBundleResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreateBundleResponse from a JSON string
create_bundle_response_instance = CreateBundleResponse.from_json(json)
# print the JSON string representation of the object
print(CreateBundleResponse.to_json())

# convert the object into a dict
create_bundle_response_dict = create_bundle_response_instance.to_dict()
# create an instance of CreateBundleResponse from a dict
create_bundle_response_from_dict = CreateBundleResponse.from_dict(create_bundle_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


