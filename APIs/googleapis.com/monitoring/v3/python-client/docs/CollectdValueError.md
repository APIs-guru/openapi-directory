# CollectdValueError

Describes the error status for values that were not written.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**Status**](Status.md) |  | [optional] 
**index** | **int** | The zero-based index in CollectdPayload.values within the parent CreateCollectdTimeSeriesRequest.collectd_payloads. | [optional] 

## Example

```python
from openapi_client.models.collectd_value_error import CollectdValueError

# TODO update the JSON string below
json = "{}"
# create an instance of CollectdValueError from a JSON string
collectd_value_error_instance = CollectdValueError.from_json(json)
# print the JSON string representation of the object
print(CollectdValueError.to_json())

# convert the object into a dict
collectd_value_error_dict = collectd_value_error_instance.to_dict()
# create an instance of CollectdValueError from a dict
collectd_value_error_from_dict = CollectdValueError.from_dict(collectd_value_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


