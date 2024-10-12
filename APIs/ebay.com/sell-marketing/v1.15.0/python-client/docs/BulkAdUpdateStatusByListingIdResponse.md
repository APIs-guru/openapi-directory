# BulkAdUpdateStatusByListingIdResponse

A type that defines the fields for the updated ad status in the bulk response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**responses** | [**List[AdUpdateStatusByListingIdResponse]**](AdUpdateStatusByListingIdResponse.md) | An array of processed ad listings in bulk. | [optional] 

## Example

```python
from openapi_client.models.bulk_ad_update_status_by_listing_id_response import BulkAdUpdateStatusByListingIdResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BulkAdUpdateStatusByListingIdResponse from a JSON string
bulk_ad_update_status_by_listing_id_response_instance = BulkAdUpdateStatusByListingIdResponse.from_json(json)
# print the JSON string representation of the object
print(BulkAdUpdateStatusByListingIdResponse.to_json())

# convert the object into a dict
bulk_ad_update_status_by_listing_id_response_dict = bulk_ad_update_status_by_listing_id_response_instance.to_dict()
# create an instance of BulkAdUpdateStatusByListingIdResponse from a dict
bulk_ad_update_status_by_listing_id_response_from_dict = BulkAdUpdateStatusByListingIdResponse.from_dict(bulk_ad_update_status_by_listing_id_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


