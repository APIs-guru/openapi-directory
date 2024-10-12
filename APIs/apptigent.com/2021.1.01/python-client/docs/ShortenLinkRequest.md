# ShortenLinkRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | **str** | String variable or text value | 

## Example

```python
from openapi_client.models.shorten_link_request import ShortenLinkRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ShortenLinkRequest from a JSON string
shorten_link_request_instance = ShortenLinkRequest.from_json(json)
# print the JSON string representation of the object
print(ShortenLinkRequest.to_json())

# convert the object into a dict
shorten_link_request_dict = shorten_link_request_instance.to_dict()
# create an instance of ShortenLinkRequest from a dict
shorten_link_request_from_dict = ShortenLinkRequest.from_dict(shorten_link_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


