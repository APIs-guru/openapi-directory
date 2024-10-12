# AppServicePlansListWebApps200ResponseValueInnerPropertiesSiteConfigAzureStorageAccountsValue

Azure Files or Blob Storage access information value for dictionary storage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_key** | **str** | Access key for the storage account. | [optional] 
**account_name** | **str** | Name of the storage account. | [optional] 
**mount_path** | **str** | Path to mount the storage within the site&#39;s runtime environment. | [optional] 
**share_name** | **str** | Name of the file share (container name, for Blob storage). | [optional] 
**state** | **str** | State of the storage account. | [optional] [readonly] 
**type** | **str** | Type of storage. | [optional] 

## Example

```python
from openapi_client.models.app_service_plans_list_web_apps200_response_value_inner_properties_site_config_azure_storage_accounts_value import AppServicePlansListWebApps200ResponseValueInnerPropertiesSiteConfigAzureStorageAccountsValue

# TODO update the JSON string below
json = "{}"
# create an instance of AppServicePlansListWebApps200ResponseValueInnerPropertiesSiteConfigAzureStorageAccountsValue from a JSON string
app_service_plans_list_web_apps200_response_value_inner_properties_site_config_azure_storage_accounts_value_instance = AppServicePlansListWebApps200ResponseValueInnerPropertiesSiteConfigAzureStorageAccountsValue.from_json(json)
# print the JSON string representation of the object
print(AppServicePlansListWebApps200ResponseValueInnerPropertiesSiteConfigAzureStorageAccountsValue.to_json())

# convert the object into a dict
app_service_plans_list_web_apps200_response_value_inner_properties_site_config_azure_storage_accounts_value_dict = app_service_plans_list_web_apps200_response_value_inner_properties_site_config_azure_storage_accounts_value_instance.to_dict()
# create an instance of AppServicePlansListWebApps200ResponseValueInnerPropertiesSiteConfigAzureStorageAccountsValue from a dict
app_service_plans_list_web_apps200_response_value_inner_properties_site_config_azure_storage_accounts_value_from_dict = AppServicePlansListWebApps200ResponseValueInnerPropertiesSiteConfigAzureStorageAccountsValue.from_dict(app_service_plans_list_web_apps200_response_value_inner_properties_site_config_azure_storage_accounts_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


