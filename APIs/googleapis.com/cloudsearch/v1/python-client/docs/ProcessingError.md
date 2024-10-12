# ProcessingError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code indicating the nature of the error. | [optional] 
**error_message** | **str** | The description of the error. | [optional] 
**field_violations** | [**List[FieldViolation]**](FieldViolation.md) | In case the item fields are invalid, this field contains the details about the validation errors. | [optional] 

## Example

```python
from openapi_client.models.processing_error import ProcessingError

# TODO update the JSON string below
json = "{}"
# create an instance of ProcessingError from a JSON string
processing_error_instance = ProcessingError.from_json(json)
# print the JSON string representation of the object
print(ProcessingError.to_json())

# convert the object into a dict
processing_error_dict = processing_error_instance.to_dict()
# create an instance of ProcessingError from a dict
processing_error_from_dict = ProcessingError.from_dict(processing_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


