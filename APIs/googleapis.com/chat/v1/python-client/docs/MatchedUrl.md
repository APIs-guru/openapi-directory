# MatchedUrl

A matched URL in a Chat message. Chat apps can preview matched URLs. For more information, see [Preview links](https://developers.google.com/chat/how-tos/preview-links).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**url** | **str** | Output only. The URL that was matched. | [optional] [readonly] 

## Example

```python
from openapi_client.models.matched_url import MatchedUrl

# TODO update the JSON string below
json = "{}"
# create an instance of MatchedUrl from a JSON string
matched_url_instance = MatchedUrl.from_json(json)
# print the JSON string representation of the object
print(MatchedUrl.to_json())

# convert the object into a dict
matched_url_dict = matched_url_instance.to_dict()
# create an instance of MatchedUrl from a dict
matched_url_from_dict = MatchedUrl.from_dict(matched_url_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


