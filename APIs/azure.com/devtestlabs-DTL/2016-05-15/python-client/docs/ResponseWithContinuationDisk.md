# ResponseWithContinuationDisk

The response of a list operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next set of results. | [optional] 
**value** | [**List[Disk]**](Disk.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.response_with_continuation_disk import ResponseWithContinuationDisk

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseWithContinuationDisk from a JSON string
response_with_continuation_disk_instance = ResponseWithContinuationDisk.from_json(json)
# print the JSON string representation of the object
print(ResponseWithContinuationDisk.to_json())

# convert the object into a dict
response_with_continuation_disk_dict = response_with_continuation_disk_instance.to_dict()
# create an instance of ResponseWithContinuationDisk from a dict
response_with_continuation_disk_from_dict = ResponseWithContinuationDisk.from_dict(response_with_continuation_disk_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


