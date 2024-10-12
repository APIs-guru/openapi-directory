# FailedData

Further data for the failed state.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**Status**](Status.md) |  | [optional] 

## Example

```python
from openapi_client.models.failed_data import FailedData

# TODO update the JSON string below
json = "{}"
# create an instance of FailedData from a JSON string
failed_data_instance = FailedData.from_json(json)
# print the JSON string representation of the object
print(FailedData.to_json())

# convert the object into a dict
failed_data_dict = failed_data_instance.to_dict()
# create an instance of FailedData from a dict
failed_data_from_dict = FailedData.from_dict(failed_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


