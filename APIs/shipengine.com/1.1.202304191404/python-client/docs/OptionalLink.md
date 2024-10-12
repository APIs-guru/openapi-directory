# OptionalLink

A link to a related resource, or an empty object if there is no resource to link to

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | The URL of the linked resource, if any | [optional] 
**type** | **str** | The type of resource, or the type of relationship to the parent resource | [optional] 

## Example

```python
from openapi_client.models.optional_link import OptionalLink

# TODO update the JSON string below
json = "{}"
# create an instance of OptionalLink from a JSON string
optional_link_instance = OptionalLink.from_json(json)
# print the JSON string representation of the object
print(OptionalLink.to_json())

# convert the object into a dict
optional_link_dict = optional_link_instance.to_dict()
# create an instance of OptionalLink from a dict
optional_link_from_dict = OptionalLink.from_dict(optional_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


