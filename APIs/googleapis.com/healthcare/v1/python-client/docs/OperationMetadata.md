# OperationMetadata

OperationMetadata provides information about the operation execution. Returned in the long-running operation's metadata field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_method_name** | **str** | The name of the API method that initiated the operation. | [optional] 
**cancel_requested** | **bool** | Specifies if cancellation was requested for the operation. | [optional] 
**counter** | [**ProgressCounter**](ProgressCounter.md) |  | [optional] 
**create_time** | **str** | The time at which the operation was created by the API. | [optional] 
**end_time** | **str** | The time at which execution was completed. | [optional] 
**logs_url** | **str** | A link to audit and error logs in the log viewer. Error logs are generated only by some operations, listed at [Viewing error logs in Cloud Logging](https://cloud.google.com/healthcare/docs/how-tos/logging). | [optional] 

## Example

```python
from openapi_client.models.operation_metadata import OperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of OperationMetadata from a JSON string
operation_metadata_instance = OperationMetadata.from_json(json)
# print the JSON string representation of the object
print(OperationMetadata.to_json())

# convert the object into a dict
operation_metadata_dict = operation_metadata_instance.to_dict()
# create an instance of OperationMetadata from a dict
operation_metadata_from_dict = OperationMetadata.from_dict(operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


