# HtmlWrapped


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callback** | **str** |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 
**results** | [**List[Html]**](Html.md) |  | [optional] 

## Example

```python
from openapi_client.models.html_wrapped import HtmlWrapped

# TODO update the JSON string below
json = "{}"
# create an instance of HtmlWrapped from a JSON string
html_wrapped_instance = HtmlWrapped.from_json(json)
# print the JSON string representation of the object
print(HtmlWrapped.to_json())

# convert the object into a dict
html_wrapped_dict = html_wrapped_instance.to_dict()
# create an instance of HtmlWrapped from a dict
html_wrapped_from_dict = HtmlWrapped.from_dict(html_wrapped_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


