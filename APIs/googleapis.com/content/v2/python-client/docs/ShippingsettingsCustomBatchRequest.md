# ShippingsettingsCustomBatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[ShippingsettingsCustomBatchRequestEntry]**](ShippingsettingsCustomBatchRequestEntry.md) | The request entries to be processed in the batch. | [optional] 

## Example

```python
from openapi_client.models.shippingsettings_custom_batch_request import ShippingsettingsCustomBatchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ShippingsettingsCustomBatchRequest from a JSON string
shippingsettings_custom_batch_request_instance = ShippingsettingsCustomBatchRequest.from_json(json)
# print the JSON string representation of the object
print(ShippingsettingsCustomBatchRequest.to_json())

# convert the object into a dict
shippingsettings_custom_batch_request_dict = shippingsettings_custom_batch_request_instance.to_dict()
# create an instance of ShippingsettingsCustomBatchRequest from a dict
shippingsettings_custom_batch_request_from_dict = ShippingsettingsCustomBatchRequest.from_dict(shippingsettings_custom_batch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


