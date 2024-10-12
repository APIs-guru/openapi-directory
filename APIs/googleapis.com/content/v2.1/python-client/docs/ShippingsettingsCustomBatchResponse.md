# ShippingsettingsCustomBatchResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[ShippingsettingsCustomBatchResponseEntry]**](ShippingsettingsCustomBatchResponseEntry.md) | The result of the execution of the batch requests. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#shippingsettingsCustomBatchResponse&#x60;\&quot;. | [optional] 

## Example

```python
from openapi_client.models.shippingsettings_custom_batch_response import ShippingsettingsCustomBatchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ShippingsettingsCustomBatchResponse from a JSON string
shippingsettings_custom_batch_response_instance = ShippingsettingsCustomBatchResponse.from_json(json)
# print the JSON string representation of the object
print(ShippingsettingsCustomBatchResponse.to_json())

# convert the object into a dict
shippingsettings_custom_batch_response_dict = shippingsettings_custom_batch_response_instance.to_dict()
# create an instance of ShippingsettingsCustomBatchResponse from a dict
shippingsettings_custom_batch_response_from_dict = ShippingsettingsCustomBatchResponse.from_dict(shippingsettings_custom_batch_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


