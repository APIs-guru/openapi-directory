# Url

A person's associated URLs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**formatted_type** | **str** | Output only. The type of the URL translated and formatted in the viewer&#39;s account locale or the &#x60;Accept-Language&#x60; HTTP header locale. | [optional] [readonly] 
**metadata** | [**FieldMetadata**](FieldMetadata.md) |  | [optional] 
**type** | **str** | The type of the URL. The type can be custom or one of these predefined values: * &#x60;home&#x60; * &#x60;work&#x60; * &#x60;blog&#x60; * &#x60;profile&#x60; * &#x60;homePage&#x60; * &#x60;ftp&#x60; * &#x60;reservations&#x60; * &#x60;appInstallPage&#x60;: website for a Currents application. * &#x60;other&#x60; | [optional] 
**value** | **str** | The URL. | [optional] 

## Example

```python
from openapi_client.models.url import Url

# TODO update the JSON string below
json = "{}"
# create an instance of Url from a JSON string
url_instance = Url.from_json(json)
# print the JSON string representation of the object
print(Url.to_json())

# convert the object into a dict
url_dict = url_instance.to_dict()
# create an instance of Url from a dict
url_from_dict = Url.from_dict(url_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


