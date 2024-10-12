# UrlFields

Represent the portion of text recognized as a URL.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the URL landing page. | [optional] 
**display_url** | **str** | The URL as displayed in the Twitter client. | [optional] 
**expanded_url** | **str** | A validly formatted URL. | [optional] 
**images** | [**List[UrlImage]**](UrlImage.md) |  | [optional] 
**media_key** | **str** | The Media Key identifier for this attachment. | [optional] 
**status** | **int** | HTTP Status Code. | [optional] 
**title** | **str** | Title of the page the URL points to. | [optional] 
**unwound_url** | **str** | Fully resolved url. | [optional] 
**url** | **str** | A validly formatted URL. | 

## Example

```python
from openapi_client.models.url_fields import UrlFields

# TODO update the JSON string below
json = "{}"
# create an instance of UrlFields from a JSON string
url_fields_instance = UrlFields.from_json(json)
# print the JSON string representation of the object
print(UrlFields.to_json())

# convert the object into a dict
url_fields_dict = url_fields_instance.to_dict()
# create an instance of UrlFields from a dict
url_fields_from_dict = UrlFields.from_dict(url_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


