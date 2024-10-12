# Tagline

**DEPRECATED**: No data will be returned A brief one-line description of the person.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | [**FieldMetadata**](FieldMetadata.md) |  | [optional] 
**value** | **str** | The tagline. | [optional] 

## Example

```python
from openapi_client.models.tagline import Tagline

# TODO update the JSON string below
json = "{}"
# create an instance of Tagline from a JSON string
tagline_instance = Tagline.from_json(json)
# print the JSON string representation of the object
print(Tagline.to_json())

# convert the object into a dict
tagline_dict = tagline_instance.to_dict()
# create an instance of Tagline from a dict
tagline_from_dict = Tagline.from_dict(tagline_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


