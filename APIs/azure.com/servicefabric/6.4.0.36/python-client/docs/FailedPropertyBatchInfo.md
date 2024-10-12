# FailedPropertyBatchInfo

Derived from PropertyBatchInfo. Represents the property batch failing. Contains information about the specific batch failure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_message** | **str** | The error message of the failed operation. Describes the exception thrown due to the first unsuccessful operation in the property batch. | [optional] 
**operation_index** | **int** | The index of the unsuccessful operation in the property batch. | [optional] 

## Example

```python
from openapi_client.models.failed_property_batch_info import FailedPropertyBatchInfo

# TODO update the JSON string below
json = "{}"
# create an instance of FailedPropertyBatchInfo from a JSON string
failed_property_batch_info_instance = FailedPropertyBatchInfo.from_json(json)
# print the JSON string representation of the object
print(FailedPropertyBatchInfo.to_json())

# convert the object into a dict
failed_property_batch_info_dict = failed_property_batch_info_instance.to_dict()
# create an instance of FailedPropertyBatchInfo from a dict
failed_property_batch_info_from_dict = FailedPropertyBatchInfo.from_dict(failed_property_batch_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


