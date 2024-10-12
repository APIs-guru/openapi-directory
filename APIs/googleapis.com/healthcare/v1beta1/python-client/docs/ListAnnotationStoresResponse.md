# ListAnnotationStoresResponse

Lists the Annotation stores in the given dataset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation_stores** | [**List[AnnotationStore]**](AnnotationStore.md) | The returned Annotation stores. Won&#39;t be more Annotation stores than the value of page_size in the request. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results or empty if there are no more results in the list. | [optional] 

## Example

```python
from openapi_client.models.list_annotation_stores_response import ListAnnotationStoresResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAnnotationStoresResponse from a JSON string
list_annotation_stores_response_instance = ListAnnotationStoresResponse.from_json(json)
# print the JSON string representation of the object
print(ListAnnotationStoresResponse.to_json())

# convert the object into a dict
list_annotation_stores_response_dict = list_annotation_stores_response_instance.to_dict()
# create an instance of ListAnnotationStoresResponse from a dict
list_annotation_stores_response_from_dict = ListAnnotationStoresResponse.from_dict(list_annotation_stores_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


