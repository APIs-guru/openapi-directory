# AnnotationLinks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**media_data** | **str** |  | [optional] 
**media_metadata** | **str** |  | [optional] 
**owner** | **str** |  | [optional] 
**var_self** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.annotation_links import AnnotationLinks

# TODO update the JSON string below
json = "{}"
# create an instance of AnnotationLinks from a JSON string
annotation_links_instance = AnnotationLinks.from_json(json)
# print the JSON string representation of the object
print(AnnotationLinks.to_json())

# convert the object into a dict
annotation_links_dict = annotation_links_instance.to_dict()
# create an instance of AnnotationLinks from a dict
annotation_links_from_dict = AnnotationLinks.from_dict(annotation_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


