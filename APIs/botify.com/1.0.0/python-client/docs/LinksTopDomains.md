# LinksTopDomains


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **str** |  | 
**follow_links** | **int** |  | 
**follow_samples** | [**List[LinksTopDomainsSamples]**](LinksTopDomainsSamples.md) |  | 
**nofollow_links** | **int** |  | 
**nofollow_samples** | [**List[LinksTopDomainsSamples]**](LinksTopDomainsSamples.md) |  | 
**unique_follow_links** | **int** |  | 
**unique_nofollow_links** | **int** |  | 

## Example

```python
from openapi_client.models.links_top_domains import LinksTopDomains

# TODO update the JSON string below
json = "{}"
# create an instance of LinksTopDomains from a JSON string
links_top_domains_instance = LinksTopDomains.from_json(json)
# print the JSON string representation of the object
print(LinksTopDomains.to_json())

# convert the object into a dict
links_top_domains_dict = links_top_domains_instance.to_dict()
# create an instance of LinksTopDomains from a dict
links_top_domains_from_dict = LinksTopDomains.from_dict(links_top_domains_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


