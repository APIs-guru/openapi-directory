# PageBackgroundFill

The page background fill.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**property_state** | **str** | The background fill property state. Updating the fill on a page will implicitly update this field to &#x60;RENDERED&#x60;, unless another value is specified in the same request. To have no fill on a page, set this field to &#x60;NOT_RENDERED&#x60;. In this case, any other fill fields set in the same request will be ignored. | [optional] 
**solid_fill** | [**SolidFill**](SolidFill.md) |  | [optional] 
**stretched_picture_fill** | [**StretchedPictureFill**](StretchedPictureFill.md) |  | [optional] 

## Example

```python
from openapi_client.models.page_background_fill import PageBackgroundFill

# TODO update the JSON string below
json = "{}"
# create an instance of PageBackgroundFill from a JSON string
page_background_fill_instance = PageBackgroundFill.from_json(json)
# print the JSON string representation of the object
print(PageBackgroundFill.to_json())

# convert the object into a dict
page_background_fill_dict = page_background_fill_instance.to_dict()
# create an instance of PageBackgroundFill from a dict
page_background_fill_from_dict = PageBackgroundFill.from_dict(page_background_fill_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


