# UrlTargeting

Represents a list of targeted and excluded URLs (for example, google.com). For Private Auction and AdX Preferred Deals, URLs are either included or excluded. For Programmatic Guaranteed and Preferred Deals, this doesn't apply.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**excluded_urls** | **List[str]** | A list of URLs to be excluded. | [optional] 
**targeted_urls** | **List[str]** | A list of URLs to be included. | [optional] 

## Example

```python
from openapi_client.models.url_targeting import UrlTargeting

# TODO update the JSON string below
json = "{}"
# create an instance of UrlTargeting from a JSON string
url_targeting_instance = UrlTargeting.from_json(json)
# print the JSON string representation of the object
print(UrlTargeting.to_json())

# convert the object into a dict
url_targeting_dict = url_targeting_instance.to_dict()
# create an instance of UrlTargeting from a dict
url_targeting_from_dict = UrlTargeting.from_dict(url_targeting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


