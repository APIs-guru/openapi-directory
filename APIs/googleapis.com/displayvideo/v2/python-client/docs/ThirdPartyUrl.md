# ThirdPartyUrl

Tracking URLs from third parties to track interactions with an audio or a video creative.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type of interaction needs to be tracked by the tracking URL | [optional] 
**url** | **str** | Tracking URL used to track the interaction. Provide a URL with optional path or query string, beginning with &#x60;https:&#x60;. For example, https://www.example.com/path | [optional] 

## Example

```python
from openapi_client.models.third_party_url import ThirdPartyUrl

# TODO update the JSON string below
json = "{}"
# create an instance of ThirdPartyUrl from a JSON string
third_party_url_instance = ThirdPartyUrl.from_json(json)
# print the JSON string representation of the object
print(ThirdPartyUrl.to_json())

# convert the object into a dict
third_party_url_dict = third_party_url_instance.to_dict()
# create an instance of ThirdPartyUrl from a dict
third_party_url_from_dict = ThirdPartyUrl.from_dict(third_party_url_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


