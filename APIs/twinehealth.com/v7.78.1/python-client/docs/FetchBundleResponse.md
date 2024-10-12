# FetchBundleResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**BundleResource**](BundleResource.md) |  | 
**meta** | [**FetchMetaResponse**](FetchMetaResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.fetch_bundle_response import FetchBundleResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FetchBundleResponse from a JSON string
fetch_bundle_response_instance = FetchBundleResponse.from_json(json)
# print the JSON string representation of the object
print(FetchBundleResponse.to_json())

# convert the object into a dict
fetch_bundle_response_dict = fetch_bundle_response_instance.to_dict()
# create an instance of FetchBundleResponse from a dict
fetch_bundle_response_from_dict = FetchBundleResponse.from_dict(fetch_bundle_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


