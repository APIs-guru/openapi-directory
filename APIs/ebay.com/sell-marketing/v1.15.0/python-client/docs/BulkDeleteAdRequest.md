# BulkDeleteAdRequest

This type defines the fields that the call uses to remove ads in bulk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**List[DeleteAdRequest]**](DeleteAdRequest.md) | An array of the listing IDs that identify the ads to remove. | [optional] 

## Example

```python
from openapi_client.models.bulk_delete_ad_request import BulkDeleteAdRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BulkDeleteAdRequest from a JSON string
bulk_delete_ad_request_instance = BulkDeleteAdRequest.from_json(json)
# print the JSON string representation of the object
print(BulkDeleteAdRequest.to_json())

# convert the object into a dict
bulk_delete_ad_request_dict = bulk_delete_ad_request_instance.to_dict()
# create an instance of BulkDeleteAdRequest from a dict
bulk_delete_ad_request_from_dict = BulkDeleteAdRequest.from_dict(bulk_delete_ad_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


