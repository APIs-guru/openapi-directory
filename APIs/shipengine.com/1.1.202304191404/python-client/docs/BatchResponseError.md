# BatchResponseError

A batch response error

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** | Error message associated with the shipment. | [optional] [readonly] 
**external_shipment_id** | **str** | An external shipment id associated with the shipment | [optional] [readonly] 
**shipment_id** | **str** | A string that uniquely identifies the shipment | [optional] [readonly] 

## Example

```python
from openapi_client.models.batch_response_error import BatchResponseError

# TODO update the JSON string below
json = "{}"
# create an instance of BatchResponseError from a JSON string
batch_response_error_instance = BatchResponseError.from_json(json)
# print the JSON string representation of the object
print(BatchResponseError.to_json())

# convert the object into a dict
batch_response_error_dict = batch_response_error_instance.to_dict()
# create an instance of BatchResponseError from a dict
batch_response_error_from_dict = BatchResponseError.from_dict(batch_response_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


