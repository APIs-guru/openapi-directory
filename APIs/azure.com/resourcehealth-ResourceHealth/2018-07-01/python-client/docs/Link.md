# Link

Useful links for service health event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blade_name** | **str** | It provides the name of portal extension blade to produce link for given service health event. | [optional] 
**display_text** | [**LinkDisplayText**](LinkDisplayText.md) |  | [optional] 
**extension_name** | **str** | It provides the name of portal extension to produce link for given service health event. | [optional] 
**parameters** | **object** | It provides a map of parameter name and value for portal extension blade to produce lik for given service health event. | [optional] 
**type** | **str** | Type of link. | [optional] 

## Example

```python
from openapi_client.models.link import Link

# TODO update the JSON string below
json = "{}"
# create an instance of Link from a JSON string
link_instance = Link.from_json(json)
# print the JSON string representation of the object
print(Link.to_json())

# convert the object into a dict
link_dict = link_instance.to_dict()
# create an instance of Link from a dict
link_from_dict = Link.from_dict(link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


