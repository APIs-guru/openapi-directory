# ReplaceSitesRequest

Request message for SiteService.ReplaceSites.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advertiser_id** | **str** | The ID of the advertiser that owns the parent channel. | [optional] 
**new_sites** | [**List[Site]**](Site.md) | The sites that will replace the existing sites assigned to the channel, specified as a list of Sites. | [optional] 
**partner_id** | **str** | The ID of the partner that owns the parent channel. | [optional] 

## Example

```python
from openapi_client.models.replace_sites_request import ReplaceSitesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReplaceSitesRequest from a JSON string
replace_sites_request_instance = ReplaceSitesRequest.from_json(json)
# print the JSON string representation of the object
print(ReplaceSitesRequest.to_json())

# convert the object into a dict
replace_sites_request_dict = replace_sites_request_instance.to_dict()
# create an instance of ReplaceSitesRequest from a dict
replace_sites_request_from_dict = ReplaceSitesRequest.from_dict(replace_sites_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


