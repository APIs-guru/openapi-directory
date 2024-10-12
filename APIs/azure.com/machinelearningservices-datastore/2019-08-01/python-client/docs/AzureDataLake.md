# AzureDataLake


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authority_url** | **str** | The authority URL used for authentication | [optional] 
**certificate** | **str** | The content of the certificate used for authentication | [optional] 
**client_id** | **str** | The Client ID/Application ID | [optional] 
**client_secret** | **str** | The client secret | [optional] 
**is_cert_auth** | **bool** | Is it using certificate to authenticate. If false then use client secret | [optional] 
**resource_group** | **str** | Resource Group Name | [optional] 
**resource_uri** | **str** | The resource the service principal/app has access to | [optional] 
**store_name** | **str** | The Azure Data Lake store name | [optional] 
**subscription_id** | **str** | Subscription Id | [optional] 
**tenant_id** | **str** | The ID of the tenant the service principal/app belongs to | [optional] 
**thumbprint** | **str** | The thumbprint of the certificate above | [optional] 

## Example

```python
from openapi_client.models.azure_data_lake import AzureDataLake

# TODO update the JSON string below
json = "{}"
# create an instance of AzureDataLake from a JSON string
azure_data_lake_instance = AzureDataLake.from_json(json)
# print the JSON string representation of the object
print(AzureDataLake.to_json())

# convert the object into a dict
azure_data_lake_dict = azure_data_lake_instance.to_dict()
# create an instance of AzureDataLake from a dict
azure_data_lake_from_dict = AzureDataLake.from_dict(azure_data_lake_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


