# BulkDeleteAdResponse

This type defines a container that lists the ads that <b>bulkDeleteAdsByListingId</b> deleted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**responses** | [**List[DeleteAdResponse]**](DeleteAdResponse.md) | An array of the ads that were deleted by the &lt;b&gt;bulkDeleteAdsByListingId&lt;/b&gt; request, including information associated with each individual delete request. | [optional] 

## Example

```python
from openapi_client.models.bulk_delete_ad_response import BulkDeleteAdResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BulkDeleteAdResponse from a JSON string
bulk_delete_ad_response_instance = BulkDeleteAdResponse.from_json(json)
# print the JSON string representation of the object
print(BulkDeleteAdResponse.to_json())

# convert the object into a dict
bulk_delete_ad_response_dict = bulk_delete_ad_response_instance.to_dict()
# create an instance of BulkDeleteAdResponse from a dict
bulk_delete_ad_response_from_dict = BulkDeleteAdResponse.from_dict(bulk_delete_ad_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


