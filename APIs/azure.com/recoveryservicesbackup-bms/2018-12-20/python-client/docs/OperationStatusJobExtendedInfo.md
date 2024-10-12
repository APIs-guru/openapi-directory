# OperationStatusJobExtendedInfo

Operation status job extended info.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_id** | **str** | ID of the job created for this protected item. | [optional] 

## Example

```python
from openapi_client.models.operation_status_job_extended_info import OperationStatusJobExtendedInfo

# TODO update the JSON string below
json = "{}"
# create an instance of OperationStatusJobExtendedInfo from a JSON string
operation_status_job_extended_info_instance = OperationStatusJobExtendedInfo.from_json(json)
# print the JSON string representation of the object
print(OperationStatusJobExtendedInfo.to_json())

# convert the object into a dict
operation_status_job_extended_info_dict = operation_status_job_extended_info_instance.to_dict()
# create an instance of OperationStatusJobExtendedInfo from a dict
operation_status_job_extended_info_from_dict = OperationStatusJobExtendedInfo.from_dict(operation_status_job_extended_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


