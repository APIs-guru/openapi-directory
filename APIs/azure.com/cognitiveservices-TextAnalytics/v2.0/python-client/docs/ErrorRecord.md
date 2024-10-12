# ErrorRecord


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Input document unique identifier the error refers to. | [optional] 
**message** | **str** | Error message. | [optional] 

## Example

```python
from openapi_client.models.error_record import ErrorRecord

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorRecord from a JSON string
error_record_instance = ErrorRecord.from_json(json)
# print the JSON string representation of the object
print(ErrorRecord.to_json())

# convert the object into a dict
error_record_dict = error_record_instance.to_dict()
# create an instance of ErrorRecord from a dict
error_record_from_dict = ErrorRecord.from_dict(error_record_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


