# StreamAnnotation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_date** | **datetime** |  | [optional] 
**creator** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**errors** | [**List[PropertyError]**](PropertyError.md) |  | [optional] 
**id** | **str** |  | [optional] 
**modifier** | **str** |  | [optional] 
**modify_date** | **datetime** |  | [optional] 
**name** | **str** |  | [optional] 
**value** | **object** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 

## Example

```python
from openapi_client.models.stream_annotation import StreamAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of StreamAnnotation from a JSON string
stream_annotation_instance = StreamAnnotation.from_json(json)
# print the JSON string representation of the object
print(StreamAnnotation.to_json())

# convert the object into a dict
stream_annotation_dict = stream_annotation_instance.to_dict()
# create an instance of StreamAnnotation from a dict
stream_annotation_from_dict = StreamAnnotation.from_dict(stream_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


