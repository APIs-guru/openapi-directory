# AzureProperties

Container for connection properties specific to Azure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application** | **str** | Output only. The name of the Azure Active Directory Application. | [optional] [readonly] 
**client_id** | **str** | Output only. The client id of the Azure Active Directory Application. | [optional] [readonly] 
**customer_tenant_id** | **str** | The id of customer&#39;s directory that host the data. | [optional] 
**federated_application_client_id** | **str** | The client ID of the user&#39;s Azure Active Directory Application used for a federated connection. | [optional] 
**identity** | **str** | Output only. A unique Google-owned and Google-generated identity for the Connection. This identity will be used to access the user&#39;s Azure Active Directory Application. | [optional] [readonly] 
**object_id** | **str** | Output only. The object id of the Azure Active Directory Application. | [optional] [readonly] 
**redirect_uri** | **str** | The URL user will be redirected to after granting consent during connection setup. | [optional] 

## Example

```python
from openapi_client.models.azure_properties import AzureProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AzureProperties from a JSON string
azure_properties_instance = AzureProperties.from_json(json)
# print the JSON string representation of the object
print(AzureProperties.to_json())

# convert the object into a dict
azure_properties_dict = azure_properties_instance.to_dict()
# create an instance of AzureProperties from a dict
azure_properties_from_dict = AzureProperties.from_dict(azure_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


