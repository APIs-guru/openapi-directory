# UriTargeting

Represents a list of targeted and excluded URLs (for example, google.com). For Private Auction Deals, URLs are either included or excluded. For Programmatic Guaranteed and Preferred Deals, this doesn't apply.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**excluded_uris** | **List[str]** | A list of URLs to be excluded. | [optional] 
**targeted_uris** | **List[str]** | A list of URLs to be included. | [optional] 

## Example

```python
from openapi_client.models.uri_targeting import UriTargeting

# TODO update the JSON string below
json = "{}"
# create an instance of UriTargeting from a JSON string
uri_targeting_instance = UriTargeting.from_json(json)
# print the JSON string representation of the object
print(UriTargeting.to_json())

# convert the object into a dict
uri_targeting_dict = uri_targeting_instance.to_dict()
# create an instance of UriTargeting from a dict
uri_targeting_from_dict = UriTargeting.from_dict(uri_targeting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


