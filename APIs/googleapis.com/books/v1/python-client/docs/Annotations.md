# Annotations


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Annotation]**](Annotation.md) | A list of annotations. | [optional] 
**kind** | **str** | Resource type. | [optional] 
**next_page_token** | **str** | Token to pass in for pagination for the next page. This will not be present if this request does not have more results. | [optional] 
**total_items** | **int** | Total number of annotations found. This may be greater than the number of notes returned in this response if results have been paginated. | [optional] 

## Example

```python
from openapi_client.models.annotations import Annotations

# TODO update the JSON string below
json = "{}"
# create an instance of Annotations from a JSON string
annotations_instance = Annotations.from_json(json)
# print the JSON string representation of the object
print(Annotations.to_json())

# convert the object into a dict
annotations_dict = annotations_instance.to_dict()
# create an instance of Annotations from a dict
annotations_from_dict = Annotations.from_dict(annotations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


