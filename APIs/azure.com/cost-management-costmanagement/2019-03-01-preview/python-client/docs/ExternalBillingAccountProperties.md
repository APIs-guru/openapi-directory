# ExternalBillingAccountProperties

The properties of a ExternalBillingAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collection_info** | [**ConnectorCollectionInfo**](ConnectorCollectionInfo.md) |  | [optional] 
**connector_id** | **str** | Underlying ConnectorId | [optional] [readonly] 
**display_name** | **str** | ExternalBillingAccount DisplayName | [optional] [readonly] 
**provider_billing_account_id** | **str** | Provider BillingAccountId (eg AWS Consolidated Account number) | [optional] [readonly] 

## Example

```python
from openapi_client.models.external_billing_account_properties import ExternalBillingAccountProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ExternalBillingAccountProperties from a JSON string
external_billing_account_properties_instance = ExternalBillingAccountProperties.from_json(json)
# print the JSON string representation of the object
print(ExternalBillingAccountProperties.to_json())

# convert the object into a dict
external_billing_account_properties_dict = external_billing_account_properties_instance.to_dict()
# create an instance of ExternalBillingAccountProperties from a dict
external_billing_account_properties_from_dict = ExternalBillingAccountProperties.from_dict(external_billing_account_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


