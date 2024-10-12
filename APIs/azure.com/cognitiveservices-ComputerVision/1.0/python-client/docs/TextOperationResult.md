# TextOperationResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recognition_result** | [**RecognitionResult**](RecognitionResult.md) |  | [optional] 
**status** | **str** | Status of the text operation. | [optional] 

## Example

```python
from openapi_client.models.text_operation_result import TextOperationResult

# TODO update the JSON string below
json = "{}"
# create an instance of TextOperationResult from a JSON string
text_operation_result_instance = TextOperationResult.from_json(json)
# print the JSON string representation of the object
print(TextOperationResult.to_json())

# convert the object into a dict
text_operation_result_dict = text_operation_result_instance.to_dict()
# create an instance of TextOperationResult from a dict
text_operation_result_from_dict = TextOperationResult.from_dict(text_operation_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


