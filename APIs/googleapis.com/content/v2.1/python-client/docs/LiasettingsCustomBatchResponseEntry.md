# LiasettingsCustomBatchResponseEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**batch_id** | **int** | The ID of the request entry to which this entry responds. | [optional] 
**errors** | [**Errors**](Errors.md) |  | [optional] 
**gmb_accounts** | [**GmbAccounts**](GmbAccounts.md) |  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#liasettingsCustomBatchResponseEntry&#x60;\&quot; | [optional] 
**lia_settings** | [**LiaSettings**](LiaSettings.md) |  | [optional] 
**omnichannel_experience** | [**LiaOmnichannelExperience**](LiaOmnichannelExperience.md) |  | [optional] 
**pos_data_providers** | [**List[PosDataProviders]**](PosDataProviders.md) | The list of POS data providers. | [optional] 

## Example

```python
from openapi_client.models.liasettings_custom_batch_response_entry import LiasettingsCustomBatchResponseEntry

# TODO update the JSON string below
json = "{}"
# create an instance of LiasettingsCustomBatchResponseEntry from a JSON string
liasettings_custom_batch_response_entry_instance = LiasettingsCustomBatchResponseEntry.from_json(json)
# print the JSON string representation of the object
print(LiasettingsCustomBatchResponseEntry.to_json())

# convert the object into a dict
liasettings_custom_batch_response_entry_dict = liasettings_custom_batch_response_entry_instance.to_dict()
# create an instance of LiasettingsCustomBatchResponseEntry from a dict
liasettings_custom_batch_response_entry_from_dict = LiasettingsCustomBatchResponseEntry.from_dict(liasettings_custom_batch_response_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


