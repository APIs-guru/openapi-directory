# LinkProperties

Represents a link item read from the gallery item package.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Display name of the link. | [optional] 
**id** | **str** | ID of the link. | [optional] 
**uri** | **str** | URI of the link. | [optional] 

## Example

```python
from openapi_client.models.link_properties import LinkProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LinkProperties from a JSON string
link_properties_instance = LinkProperties.from_json(json)
# print the JSON string representation of the object
print(LinkProperties.to_json())

# convert the object into a dict
link_properties_dict = link_properties_instance.to_dict()
# create an instance of LinkProperties from a dict
link_properties_from_dict = LinkProperties.from_dict(link_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


