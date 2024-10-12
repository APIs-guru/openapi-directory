# Annotation

Message describing an Annotation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Create time stamp. | [optional] [readonly] 
**labels** | **Dict[str, str]** | Labels as key value pairs. | [optional] 
**name** | **str** | name of resource. | [optional] 
**type** | **str** | Type of an annotation. | [optional] 
**update_time** | **str** | Output only. Update time stamp. | [optional] [readonly] 

## Example

```python
from openapi_client.models.annotation import Annotation

# TODO update the JSON string below
json = "{}"
# create an instance of Annotation from a JSON string
annotation_instance = Annotation.from_json(json)
# print the JSON string representation of the object
print(Annotation.to_json())

# convert the object into a dict
annotation_dict = annotation_instance.to_dict()
# create an instance of Annotation from a dict
annotation_from_dict = Annotation.from_dict(annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


