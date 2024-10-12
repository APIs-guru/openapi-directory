# BulkEditSitesResponse

Response message for SiteService.BulkEditSites.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sites** | [**List[Site]**](Site.md) | The list of sites that have been successfully created. This list will be absent if empty. | [optional] 

## Example

```python
from openapi_client.models.bulk_edit_sites_response import BulkEditSitesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BulkEditSitesResponse from a JSON string
bulk_edit_sites_response_instance = BulkEditSitesResponse.from_json(json)
# print the JSON string representation of the object
print(BulkEditSitesResponse.to_json())

# convert the object into a dict
bulk_edit_sites_response_dict = bulk_edit_sites_response_instance.to_dict()
# create an instance of BulkEditSitesResponse from a dict
bulk_edit_sites_response_from_dict = BulkEditSitesResponse.from_dict(bulk_edit_sites_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


