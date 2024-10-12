# SitesUrlInfo

The published site URLs of new Google Sites to search

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**urls** | **List[str]** | A list of published site URLs. | [optional] 

## Example

```python
from openapi_client.models.sites_url_info import SitesUrlInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SitesUrlInfo from a JSON string
sites_url_info_instance = SitesUrlInfo.from_json(json)
# print the JSON string representation of the object
print(SitesUrlInfo.to_json())

# convert the object into a dict
sites_url_info_dict = sites_url_info_instance.to_dict()
# create an instance of SitesUrlInfo from a dict
sites_url_info_from_dict = SitesUrlInfo.from_dict(sites_url_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


