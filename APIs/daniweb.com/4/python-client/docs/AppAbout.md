# AppAbout


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**website** | [**AppAboutWebsite**](AppAboutWebsite.md) |  | [optional] 

## Example

```python
from openapi_client.models.app_about import AppAbout

# TODO update the JSON string below
json = "{}"
# create an instance of AppAbout from a JSON string
app_about_instance = AppAbout.from_json(json)
# print the JSON string representation of the object
print(AppAbout.to_json())

# convert the object into a dict
app_about_dict = app_about_instance.to_dict()
# create an instance of AppAbout from a dict
app_about_from_dict = AppAbout.from_dict(app_about_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


