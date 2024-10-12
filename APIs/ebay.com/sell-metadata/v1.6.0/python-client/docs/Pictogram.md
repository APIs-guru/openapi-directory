# Pictogram

A type that describes pictograms for hazardous materials labels.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pictogram_description** | **str** | The description of the pictogram localized to the default language of the marketplace. For sample values, see &lt;a href&#x3D;&#39;/api-docs/sell/static/metadata/feature-regulatorhazmatcontainer.html#Pictogra&#39;&gt;Pictogram sample values&lt;/a&gt;. | [optional] 
**pictogram_id** | **str** | The identifier of the pictogram. For sample values, see &lt;a href&#x3D;&#39;/api-docs/sell/static/metadata/feature-regulatorhazmatcontainer.html#Pictogra&#39;&gt;Pictogram sample values&lt;/a&gt;. | [optional] 
**pictogram_url** | **str** | The URL of the pictogram. | [optional] 

## Example

```python
from openapi_client.models.pictogram import Pictogram

# TODO update the JSON string below
json = "{}"
# create an instance of Pictogram from a JSON string
pictogram_instance = Pictogram.from_json(json)
# print the JSON string representation of the object
print(Pictogram.to_json())

# convert the object into a dict
pictogram_dict = pictogram_instance.to_dict()
# create an instance of Pictogram from a dict
pictogram_from_dict = Pictogram.from_dict(pictogram_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


