# Biography

A person's short biography.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_type** | **str** | The content type of the biography. | [optional] 
**metadata** | [**FieldMetadata**](FieldMetadata.md) |  | [optional] 
**value** | **str** | The short biography. | [optional] 

## Example

```python
from openapi_client.models.biography import Biography

# TODO update the JSON string below
json = "{}"
# create an instance of Biography from a JSON string
biography_instance = Biography.from_json(json)
# print the JSON string representation of the object
print(Biography.to_json())

# convert the object into a dict
biography_dict = biography_instance.to_dict()
# create an instance of Biography from a dict
biography_from_dict = Biography.from_dict(biography_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


