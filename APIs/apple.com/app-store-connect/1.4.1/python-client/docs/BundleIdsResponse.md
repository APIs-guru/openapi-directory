# BundleIdsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[BundleId]**](BundleId.md) |  | 
**included** | [**List[BundleIdResponseIncludedInner]**](BundleIdResponseIncludedInner.md) |  | [optional] 
**links** | [**PagedDocumentLinks**](PagedDocumentLinks.md) |  | 
**meta** | [**PagingInformation**](PagingInformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.bundle_ids_response import BundleIdsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BundleIdsResponse from a JSON string
bundle_ids_response_instance = BundleIdsResponse.from_json(json)
# print the JSON string representation of the object
print(BundleIdsResponse.to_json())

# convert the object into a dict
bundle_ids_response_dict = bundle_ids_response_instance.to_dict()
# create an instance of BundleIdsResponse from a dict
bundle_ids_response_from_dict = BundleIdsResponse.from_dict(bundle_ids_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


