# Application

The application the linked item is in.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the application. Used in conjunction with the (remote) object icon title to display a tooltip for the link&#39;s icon. The tooltip takes the format \&quot;\\[application name\\] icon title\&quot;. Blank items are excluded from the tooltip title. If both items are blank, the icon tooltop displays as \&quot;Web Link\&quot;. Grouping and sorting of links may place links without an application name last. | [optional] 
**type** | **str** | The name-spaced type of the application, used by registered rendering apps. | [optional] 

## Example

```python
from openapi_client.models.application import Application

# TODO update the JSON string below
json = "{}"
# create an instance of Application from a JSON string
application_instance = Application.from_json(json)
# print the JSON string representation of the object
print(Application.to_json())

# convert the object into a dict
application_dict = application_instance.to_dict()
# create an instance of Application from a dict
application_from_dict = Application.from_dict(application_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


