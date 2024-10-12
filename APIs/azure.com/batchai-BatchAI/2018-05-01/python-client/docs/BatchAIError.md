# BatchAIError

An error response from the Batch AI service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | An identifier of the error. Codes are invariant and are intended to be consumed programmatically. | [optional] [readonly] 
**details** | [**List[NameValuePair]**](NameValuePair.md) | A list of additional details about the error. | [optional] [readonly] 
**message** | **str** | A message describing the error, intended to be suitable for display in a user interface. | [optional] [readonly] 

## Example

```python
from openapi_client.models.batch_ai_error import BatchAIError

# TODO update the JSON string below
json = "{}"
# create an instance of BatchAIError from a JSON string
batch_ai_error_instance = BatchAIError.from_json(json)
# print the JSON string representation of the object
print(BatchAIError.to_json())

# convert the object into a dict
batch_ai_error_dict = batch_ai_error_instance.to_dict()
# create an instance of BatchAIError from a dict
batch_ai_error_from_dict = BatchAIError.from_dict(batch_ai_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


