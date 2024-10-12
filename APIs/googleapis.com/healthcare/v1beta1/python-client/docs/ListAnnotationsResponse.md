# ListAnnotationsResponse

Lists the Annotations in the specified Annotation store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | [**List[Annotation]**](Annotation.md) | The returned Annotations. Won&#39;t be more values than the value of page_size in the request. See &#x60;AnnotationView&#x60; in the request for populated fields. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results or empty if there are no more results in the list. | [optional] 

## Example

```python
from openapi_client.models.list_annotations_response import ListAnnotationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAnnotationsResponse from a JSON string
list_annotations_response_instance = ListAnnotationsResponse.from_json(json)
# print the JSON string representation of the object
print(ListAnnotationsResponse.to_json())

# convert the object into a dict
list_annotations_response_dict = list_annotations_response_instance.to_dict()
# create an instance of ListAnnotationsResponse from a dict
list_annotations_response_from_dict = ListAnnotationsResponse.from_dict(list_annotations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


