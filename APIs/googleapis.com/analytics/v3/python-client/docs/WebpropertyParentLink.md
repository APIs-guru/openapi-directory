# WebpropertyParentLink

Parent link for this web property. Points to the account to which this web property belongs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | Link to the account for this web property. | [optional] 
**type** | **str** | Type of the parent link. Its value is \&quot;analytics#account\&quot;. | [optional] [default to 'analytics#account']

## Example

```python
from openapi_client.models.webproperty_parent_link import WebpropertyParentLink

# TODO update the JSON string below
json = "{}"
# create an instance of WebpropertyParentLink from a JSON string
webproperty_parent_link_instance = WebpropertyParentLink.from_json(json)
# print the JSON string representation of the object
print(WebpropertyParentLink.to_json())

# convert the object into a dict
webproperty_parent_link_dict = webproperty_parent_link_instance.to_dict()
# create an instance of WebpropertyParentLink from a dict
webproperty_parent_link_from_dict = WebpropertyParentLink.from_dict(webproperty_parent_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


