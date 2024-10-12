# LiasettingsCustomBatchRequestEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The ID of the account for which to get/update account LIA settings. | [optional] 
**batch_id** | **int** | An entry ID, unique within the batch request. | [optional] 
**contact_email** | **str** | Inventory validation contact email. Required only for SetInventoryValidationContact. | [optional] 
**contact_name** | **str** | Inventory validation contact name. Required only for SetInventoryValidationContact. | [optional] 
**country** | **str** | The country code. Required only for RequestInventoryVerification. | [optional] 
**gmb_email** | **str** | The Business Profile. Required only for RequestGmbAccess. | [optional] 
**lia_settings** | [**LiaSettings**](LiaSettings.md) |  | [optional] 
**merchant_id** | **str** | The ID of the managing account. | [optional] 
**method** | **str** | The method of the batch entry. Acceptable values are: - \&quot;&#x60;get&#x60;\&quot; - \&quot;&#x60;getAccessibleGmbAccounts&#x60;\&quot; - \&quot;&#x60;requestGmbAccess&#x60;\&quot; - \&quot;&#x60;requestInventoryVerification&#x60;\&quot; - \&quot;&#x60;setInventoryVerificationContact&#x60;\&quot; - \&quot;&#x60;update&#x60;\&quot;  | [optional] 
**omnichannel_experience** | [**LiaOmnichannelExperience**](LiaOmnichannelExperience.md) |  | [optional] 
**pos_data_provider_id** | **str** | The ID of POS data provider. Required only for SetPosProvider. | [optional] 
**pos_external_account_id** | **str** | The account ID by which this merchant is known to the POS provider. | [optional] 

## Example

```python
from openapi_client.models.liasettings_custom_batch_request_entry import LiasettingsCustomBatchRequestEntry

# TODO update the JSON string below
json = "{}"
# create an instance of LiasettingsCustomBatchRequestEntry from a JSON string
liasettings_custom_batch_request_entry_instance = LiasettingsCustomBatchRequestEntry.from_json(json)
# print the JSON string representation of the object
print(LiasettingsCustomBatchRequestEntry.to_json())

# convert the object into a dict
liasettings_custom_batch_request_entry_dict = liasettings_custom_batch_request_entry_instance.to_dict()
# create an instance of LiasettingsCustomBatchRequestEntry from a dict
liasettings_custom_batch_request_entry_from_dict = LiasettingsCustomBatchRequestEntry.from_dict(liasettings_custom_batch_request_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


