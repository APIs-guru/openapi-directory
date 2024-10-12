# Aspect

The type that defines the fields for the item aspects.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of an aspect, such and Brand. | [optional] 
**values** | **List[str]** | A list of potential values for this aspect. | [optional] 

## Example

```python
from openapi_client.models.aspect import Aspect

# TODO update the JSON string below
json = "{}"
# create an instance of Aspect from a JSON string
aspect_instance = Aspect.from_json(json)
# print the JSON string representation of the object
print(Aspect.to_json())

# convert the object into a dict
aspect_dict = aspect_instance.to_dict()
# create an instance of Aspect from a dict
aspect_from_dict = Aspect.from_dict(aspect_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


