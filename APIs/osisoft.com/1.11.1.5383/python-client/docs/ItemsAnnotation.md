# ItemsAnnotation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Annotation]**](Annotation.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_annotation import ItemsAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsAnnotation from a JSON string
items_annotation_instance = ItemsAnnotation.from_json(json)
# print the JSON string representation of the object
print(ItemsAnnotation.to_json())

# convert the object into a dict
items_annotation_dict = items_annotation_instance.to_dict()
# create an instance of ItemsAnnotation from a dict
items_annotation_from_dict = ItemsAnnotation.from_dict(items_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


