# CollectdPayloadError

Describes the error status for payloads that were not written.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**Status**](Status.md) |  | [optional] 
**index** | **int** | The zero-based index in CreateCollectdTimeSeriesRequest.collectd_payloads. | [optional] 
**value_errors** | [**List[CollectdValueError]**](CollectdValueError.md) | Records the error status for values that were not written due to an error.Failed payloads for which nothing is written will not include partial value errors. | [optional] 

## Example

```python
from openapi_client.models.collectd_payload_error import CollectdPayloadError

# TODO update the JSON string below
json = "{}"
# create an instance of CollectdPayloadError from a JSON string
collectd_payload_error_instance = CollectdPayloadError.from_json(json)
# print the JSON string representation of the object
print(CollectdPayloadError.to_json())

# convert the object into a dict
collectd_payload_error_dict = collectd_payload_error_instance.to_dict()
# create an instance of CollectdPayloadError from a dict
collectd_payload_error_from_dict = CollectdPayloadError.from_dict(collectd_payload_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


