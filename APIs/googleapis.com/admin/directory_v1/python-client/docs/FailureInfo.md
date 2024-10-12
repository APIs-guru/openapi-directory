# FailureInfo

Info about failures

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_code** | **str** | Canonical code for why the update failed to apply. | [optional] 
**error_message** | **str** | Failure reason message. | [optional] 
**printer** | [**Printer**](Printer.md) |  | [optional] 
**printer_id** | **str** | Id of a failed printer. | [optional] 

## Example

```python
from openapi_client.models.failure_info import FailureInfo

# TODO update the JSON string below
json = "{}"
# create an instance of FailureInfo from a JSON string
failure_info_instance = FailureInfo.from_json(json)
# print the JSON string representation of the object
print(FailureInfo.to_json())

# convert the object into a dict
failure_info_dict = failure_info_instance.to_dict()
# create an instance of FailureInfo from a dict
failure_info_from_dict = FailureInfo.from_dict(failure_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


