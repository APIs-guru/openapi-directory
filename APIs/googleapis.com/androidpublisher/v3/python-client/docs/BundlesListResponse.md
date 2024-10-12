# BundlesListResponse

Response listing all app bundles.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bundles** | [**List[Bundle]**](Bundle.md) | All app bundles. | [optional] 
**kind** | **str** | The kind of this response (\&quot;androidpublisher#bundlesListResponse\&quot;). | [optional] 

## Example

```python
from openapi_client.models.bundles_list_response import BundlesListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BundlesListResponse from a JSON string
bundles_list_response_instance = BundlesListResponse.from_json(json)
# print the JSON string representation of the object
print(BundlesListResponse.to_json())

# convert the object into a dict
bundles_list_response_dict = bundles_list_response_instance.to_dict()
# create an instance of BundlesListResponse from a dict
bundles_list_response_from_dict = BundlesListResponse.from_dict(bundles_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


