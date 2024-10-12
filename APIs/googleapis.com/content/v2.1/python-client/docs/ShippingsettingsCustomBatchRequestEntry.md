# ShippingsettingsCustomBatchRequestEntry

A batch entry encoding a single non-batch shippingsettings request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The ID of the account for which to get/update account shipping settings. | [optional] 
**batch_id** | **int** | An entry ID, unique within the batch request. | [optional] 
**merchant_id** | **str** | The ID of the managing account. | [optional] 
**method** | **str** | The method of the batch entry. Acceptable values are: - \&quot;&#x60;get&#x60;\&quot; - \&quot;&#x60;update&#x60;\&quot;  | [optional] 
**shipping_settings** | [**ShippingSettings**](ShippingSettings.md) |  | [optional] 

## Example

```python
from openapi_client.models.shippingsettings_custom_batch_request_entry import ShippingsettingsCustomBatchRequestEntry

# TODO update the JSON string below
json = "{}"
# create an instance of ShippingsettingsCustomBatchRequestEntry from a JSON string
shippingsettings_custom_batch_request_entry_instance = ShippingsettingsCustomBatchRequestEntry.from_json(json)
# print the JSON string representation of the object
print(ShippingsettingsCustomBatchRequestEntry.to_json())

# convert the object into a dict
shippingsettings_custom_batch_request_entry_dict = shippingsettings_custom_batch_request_entry_instance.to_dict()
# create an instance of ShippingsettingsCustomBatchRequestEntry from a dict
shippingsettings_custom_batch_request_entry_from_dict = ShippingsettingsCustomBatchRequestEntry.from_dict(shippingsettings_custom_batch_request_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


