# ApiOperationAnnotation

The Api Operation Annotation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**family** | **str** | The family. | [optional] 
**revision** | **int** | The revision. | [optional] 
**status** | [**StatusAnnotation**](StatusAnnotation.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_operation_annotation import ApiOperationAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of ApiOperationAnnotation from a JSON string
api_operation_annotation_instance = ApiOperationAnnotation.from_json(json)
# print the JSON string representation of the object
print(ApiOperationAnnotation.to_json())

# convert the object into a dict
api_operation_annotation_dict = api_operation_annotation_instance.to_dict()
# create an instance of ApiOperationAnnotation from a dict
api_operation_annotation_from_dict = ApiOperationAnnotation.from_dict(api_operation_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


