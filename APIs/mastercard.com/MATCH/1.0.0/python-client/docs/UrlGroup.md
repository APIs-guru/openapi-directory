# UrlGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**close_match_urls** | [**List[Url]**](Url.md) | The closely matched URL of Merchant.The results may return 0 or more URLs. | [optional] 
**exact_match_urls** | [**List[Url]**](Url.md) | The exactly matched URL of Merchant.The results may return 0 or more URLs. | [optional] 
**no_match_urls** | [**Url**](Url.md) |  | [optional] 

## Example

```python
from openapi_client.models.url_group import UrlGroup

# TODO update the JSON string below
json = "{}"
# create an instance of UrlGroup from a JSON string
url_group_instance = UrlGroup.from_json(json)
# print the JSON string representation of the object
print(UrlGroup.to_json())

# convert the object into a dict
url_group_dict = url_group_instance.to_dict()
# create an instance of UrlGroup from a dict
url_group_from_dict = UrlGroup.from_dict(url_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


