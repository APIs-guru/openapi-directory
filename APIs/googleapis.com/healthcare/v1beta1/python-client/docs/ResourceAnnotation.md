# ResourceAnnotation

Resource level annotation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** | A description of the annotation record. | [optional] 

## Example

```python
from openapi_client.models.resource_annotation import ResourceAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceAnnotation from a JSON string
resource_annotation_instance = ResourceAnnotation.from_json(json)
# print the JSON string representation of the object
print(ResourceAnnotation.to_json())

# convert the object into a dict
resource_annotation_dict = resource_annotation_instance.to_dict()
# create an instance of ResourceAnnotation from a dict
resource_annotation_from_dict = ResourceAnnotation.from_dict(resource_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


