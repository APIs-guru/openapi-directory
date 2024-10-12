# ViolatingSitesResponse

Response message for ListViolatingSites.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**violating_sites** | [**List[SiteSummaryResponse]**](SiteSummaryResponse.md) | The list of violating sites. | [optional] 

## Example

```python
from openapi_client.models.violating_sites_response import ViolatingSitesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ViolatingSitesResponse from a JSON string
violating_sites_response_instance = ViolatingSitesResponse.from_json(json)
# print the JSON string representation of the object
print(ViolatingSitesResponse.to_json())

# convert the object into a dict
violating_sites_response_dict = violating_sites_response_instance.to_dict()
# create an instance of ViolatingSitesResponse from a dict
violating_sites_response_from_dict = ViolatingSitesResponse.from_dict(violating_sites_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


