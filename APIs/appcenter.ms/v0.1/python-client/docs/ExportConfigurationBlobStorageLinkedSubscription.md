# ExportConfigurationBlobStorageLinkedSubscription

Configuration for export to Blob Storage with customer linked subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**subscription_id** | **str** | Id of customer subscription linked in App Center | 
**blob_path_format_kind** | **str** | The path to the blob when enum set to &#39;WithoutAppId&#39; is &#39;year/month/day/hour/minute&#39; and when set to &#39;WithAppId&#39; is &#39;appId/year/month/day/hour/minute&#39; | [optional] 
**backfill** | **bool** | Field to determine if backfilling should occur. The default value is true. If set to false export starts from date and time of config creation. | [optional] 
**export_entities** | **List[str]** |  | [optional] 
**resource_group** | **str** | The resource group name on azure | [optional] 
**resource_name** | **str** | The resource name on azure | [optional] 
**type** | **str** | Type of export configuration | 

## Example

```python
from openapi_client.models.export_configuration_blob_storage_linked_subscription import ExportConfigurationBlobStorageLinkedSubscription

# TODO update the JSON string below
json = "{}"
# create an instance of ExportConfigurationBlobStorageLinkedSubscription from a JSON string
export_configuration_blob_storage_linked_subscription_instance = ExportConfigurationBlobStorageLinkedSubscription.from_json(json)
# print the JSON string representation of the object
print(ExportConfigurationBlobStorageLinkedSubscription.to_json())

# convert the object into a dict
export_configuration_blob_storage_linked_subscription_dict = export_configuration_blob_storage_linked_subscription_instance.to_dict()
# create an instance of ExportConfigurationBlobStorageLinkedSubscription from a dict
export_configuration_blob_storage_linked_subscription_from_dict = ExportConfigurationBlobStorageLinkedSubscription.from_dict(export_configuration_blob_storage_linked_subscription_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


