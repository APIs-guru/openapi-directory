# JSApp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**element** | **str** | Element of Template to inject HTML | [optional] 
**template** | **str** | Template of Store Theme to inject HTML | [optional] 
**url** | **str** | Url of the HTML to inject | [optional] 

## Example

```python
from openapi_client.models.js_app import JSApp

# TODO update the JSON string below
json = "{}"
# create an instance of JSApp from a JSON string
js_app_instance = JSApp.from_json(json)
# print the JSON string representation of the object
print(JSApp.to_json())

# convert the object into a dict
js_app_dict = js_app_instance.to_dict()
# create an instance of JSApp from a dict
js_app_from_dict = JSApp.from_dict(js_app_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


