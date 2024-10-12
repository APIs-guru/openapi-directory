# BulkUpdateAdStatusRequest

A type that defines the fields for the <b>BulkUpdateAdStatus</b> request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**List[UpdateAdStatusRequest]**](UpdateAdStatusRequest.md) | An array of listing IDs and bid percentages. | [optional] 

## Example

```python
from openapi_client.models.bulk_update_ad_status_request import BulkUpdateAdStatusRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BulkUpdateAdStatusRequest from a JSON string
bulk_update_ad_status_request_instance = BulkUpdateAdStatusRequest.from_json(json)
# print the JSON string representation of the object
print(BulkUpdateAdStatusRequest.to_json())

# convert the object into a dict
bulk_update_ad_status_request_dict = bulk_update_ad_status_request_instance.to_dict()
# create an instance of BulkUpdateAdStatusRequest from a dict
bulk_update_ad_status_request_from_dict = BulkUpdateAdStatusRequest.from_dict(bulk_update_ad_status_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


