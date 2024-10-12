# ShippingsettingsCustomBatchResponseEntry

A batch entry encoding a single non-batch shipping settings response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_id** | **int** | The ID of the request entry to which this entry responds. | [optional] 
**errors** | [**Errors**](Errors.md) |  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#shippingsettingsCustomBatchResponseEntry&#x60;\&quot; | [optional] 
**shipping_settings** | [**ShippingSettings**](ShippingSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.shippingsettings_custom_batch_response_entry import ShippingsettingsCustomBatchResponseEntry

# TODO update the JSON string below
json = "{}"
# create an instance of ShippingsettingsCustomBatchResponseEntry from a JSON string
shippingsettings_custom_batch_response_entry_instance = ShippingsettingsCustomBatchResponseEntry.from_json(json)
# print the JSON string representation of the object
print(ShippingsettingsCustomBatchResponseEntry.to_json())

# convert the object into a dict
shippingsettings_custom_batch_response_entry_dict = shippingsettings_custom_batch_response_entry_instance.to_dict()
# create an instance of ShippingsettingsCustomBatchResponseEntry from a dict
shippingsettings_custom_batch_response_entry_from_dict = ShippingsettingsCustomBatchResponseEntry.from_dict(shippingsettings_custom_batch_response_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


