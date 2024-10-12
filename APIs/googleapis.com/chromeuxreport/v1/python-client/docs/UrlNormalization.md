# UrlNormalization

Object representing the normalization actions taken to normalize a url to achieve a higher chance of successful lookup. These are simple automated changes that are taken when looking up the provided `url_patten` would be known to fail. Complex actions like following redirects are not handled.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**normalized_url** | **str** | The URL after any normalization actions. This is a valid user experience URL that could reasonably be looked up. | [optional] 
**original_url** | **str** | The original requested URL prior to any normalization actions. | [optional] 

## Example

```python
from openapi_client.models.url_normalization import UrlNormalization

# TODO update the JSON string below
json = "{}"
# create an instance of UrlNormalization from a JSON string
url_normalization_instance = UrlNormalization.from_json(json)
# print the JSON string representation of the object
print(UrlNormalization.to_json())

# convert the object into a dict
url_normalization_dict = url_normalization_instance.to_dict()
# create an instance of UrlNormalization from a dict
url_normalization_from_dict = UrlNormalization.from_dict(url_normalization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


