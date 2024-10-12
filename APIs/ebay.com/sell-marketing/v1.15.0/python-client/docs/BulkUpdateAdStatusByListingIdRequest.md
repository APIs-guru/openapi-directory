# BulkUpdateAdStatusByListingIdRequest

A type that defines the fields for the <b>BulkUpdateAdStatusByListingId</b> request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**List[UpdateAdStatusByListingIdRequest]**](UpdateAdStatusByListingIdRequest.md) | An array of listing IDs and bid percentages. | [optional] 

## Example

```python
from openapi_client.models.bulk_update_ad_status_by_listing_id_request import BulkUpdateAdStatusByListingIdRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BulkUpdateAdStatusByListingIdRequest from a JSON string
bulk_update_ad_status_by_listing_id_request_instance = BulkUpdateAdStatusByListingIdRequest.from_json(json)
# print the JSON string representation of the object
print(BulkUpdateAdStatusByListingIdRequest.to_json())

# convert the object into a dict
bulk_update_ad_status_by_listing_id_request_dict = bulk_update_ad_status_by_listing_id_request_instance.to_dict()
# create an instance of BulkUpdateAdStatusByListingIdRequest from a dict
bulk_update_ad_status_by_listing_id_request_from_dict = BulkUpdateAdStatusByListingIdRequest.from_dict(bulk_update_ad_status_by_listing_id_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


