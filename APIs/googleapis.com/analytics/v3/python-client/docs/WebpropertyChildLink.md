# WebpropertyChildLink

Child link for this web property. Points to the list of views (profiles) for this web property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | Link to the list of views (profiles) for this web property. | [optional] 
**type** | **str** | Type of the parent link. Its value is \&quot;analytics#profiles\&quot;. | [optional] [default to 'analytics#profiles']

## Example

```python
from openapi_client.models.webproperty_child_link import WebpropertyChildLink

# TODO update the JSON string below
json = "{}"
# create an instance of WebpropertyChildLink from a JSON string
webproperty_child_link_instance = WebpropertyChildLink.from_json(json)
# print the JSON string representation of the object
print(WebpropertyChildLink.to_json())

# convert the object into a dict
webproperty_child_link_dict = webproperty_child_link_instance.to_dict()
# create an instance of WebpropertyChildLink from a dict
webproperty_child_link_from_dict = WebpropertyChildLink.from_dict(webproperty_child_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


