# BulkEditSitesRequest

Request message for SiteService.BulkEditSites.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advertiser_id** | **str** | The ID of the advertiser that owns the parent channel. | [optional] 
**created_sites** | [**List[Site]**](Site.md) | The sites to create in batch, specified as a list of Sites. | [optional] 
**deleted_sites** | **List[str]** | The sites to delete in batch, specified as a list of site url_or_app_ids. | [optional] 
**partner_id** | **str** | The ID of the partner that owns the parent channel. | [optional] 

## Example

```python
from openapi_client.models.bulk_edit_sites_request import BulkEditSitesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BulkEditSitesRequest from a JSON string
bulk_edit_sites_request_instance = BulkEditSitesRequest.from_json(json)
# print the JSON string representation of the object
print(BulkEditSitesRequest.to_json())

# convert the object into a dict
bulk_edit_sites_request_dict = bulk_edit_sites_request_instance.to_dict()
# create an instance of BulkEditSitesRequest from a dict
bulk_edit_sites_request_from_dict = BulkEditSitesRequest.from_dict(bulk_edit_sites_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


