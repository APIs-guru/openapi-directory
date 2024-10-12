# PageProperties

The properties of the Page. The page will inherit properties from the parent page. Depending on the page type the hierarchy is defined in either SlideProperties or LayoutProperties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**color_scheme** | [**ColorScheme**](ColorScheme.md) |  | [optional] 
**page_background_fill** | [**PageBackgroundFill**](PageBackgroundFill.md) |  | [optional] 

## Example

```python
from openapi_client.models.page_properties import PageProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PageProperties from a JSON string
page_properties_instance = PageProperties.from_json(json)
# print the JSON string representation of the object
print(PageProperties.to_json())

# convert the object into a dict
page_properties_dict = page_properties_instance.to_dict()
# create an instance of PageProperties from a dict
page_properties_from_dict = PageProperties.from_dict(page_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


