# PageviewData

Represents details collected when the visitor views a page.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_path** | **str** | The URL of the page that the visitor viewed. | [optional] 
**page_title** | **str** | The title of the page that the visitor viewed. | [optional] 

## Example

```python
from openapi_client.models.pageview_data import PageviewData

# TODO update the JSON string below
json = "{}"
# create an instance of PageviewData from a JSON string
pageview_data_instance = PageviewData.from_json(json)
# print the JSON string representation of the object
print(PageviewData.to_json())

# convert the object into a dict
pageview_data_dict = pageview_data_instance.to_dict()
# create an instance of PageviewData from a dict
pageview_data_from_dict = PageviewData.from_dict(pageview_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


