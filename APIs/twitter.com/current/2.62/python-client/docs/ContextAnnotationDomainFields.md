# ContextAnnotationDomainFields

Represents the data for the context annotation domain.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the context annotation domain. | [optional] 
**id** | **str** | The unique id for a context annotation domain. | 
**name** | **str** | Name of the context annotation domain. | [optional] 

## Example

```python
from openapi_client.models.context_annotation_domain_fields import ContextAnnotationDomainFields

# TODO update the JSON string below
json = "{}"
# create an instance of ContextAnnotationDomainFields from a JSON string
context_annotation_domain_fields_instance = ContextAnnotationDomainFields.from_json(json)
# print the JSON string representation of the object
print(ContextAnnotationDomainFields.to_json())

# convert the object into a dict
context_annotation_domain_fields_dict = context_annotation_domain_fields_instance.to_dict()
# create an instance of ContextAnnotationDomainFields from a dict
context_annotation_domain_fields_from_dict = ContextAnnotationDomainFields.from_dict(context_annotation_domain_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


