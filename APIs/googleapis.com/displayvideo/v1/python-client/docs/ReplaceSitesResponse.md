# ReplaceSitesResponse

Response message for SiteService.ReplaceSites.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sites** | [**List[Site]**](Site.md) | The list of sites in the channel after replacing. | [optional] 

## Example

```python
from openapi_client.models.replace_sites_response import ReplaceSitesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ReplaceSitesResponse from a JSON string
replace_sites_response_instance = ReplaceSitesResponse.from_json(json)
# print the JSON string representation of the object
print(ReplaceSitesResponse.to_json())

# convert the object into a dict
replace_sites_response_dict = replace_sites_response_instance.to_dict()
# create an instance of ReplaceSitesResponse from a dict
replace_sites_response_from_dict = ReplaceSitesResponse.from_dict(replace_sites_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


