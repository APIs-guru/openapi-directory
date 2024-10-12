# CopyLogDetails

Details for log generated during copy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**copy_log_details_type** | **str** | Indicates the type of job details. | [optional] [readonly] 

## Example

```python
from openapi_client.models.copy_log_details import CopyLogDetails

# TODO update the JSON string below
json = "{}"
# create an instance of CopyLogDetails from a JSON string
copy_log_details_instance = CopyLogDetails.from_json(json)
# print the JSON string representation of the object
print(CopyLogDetails.to_json())

# convert the object into a dict
copy_log_details_dict = copy_log_details_instance.to_dict()
# create an instance of CopyLogDetails from a dict
copy_log_details_from_dict = CopyLogDetails.from_dict(copy_log_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


