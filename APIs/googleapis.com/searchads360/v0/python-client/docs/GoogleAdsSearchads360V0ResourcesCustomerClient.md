# GoogleAdsSearchads360V0ResourcesCustomerClient

A link between the given customer and a client customer. CustomerClients only exist for manager customers. All direct and indirect client customers are included, as well as the manager itself.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applied_labels** | **List[str]** | Output only. The resource names of the labels owned by the requesting customer that are applied to the client customer. Label resource names have the form: &#x60;customers/{customer_id}/labels/{label_id}&#x60; | [optional] [readonly] 
**client_customer** | **str** | Output only. The resource name of the client-customer which is linked to the given customer. Read only. | [optional] [readonly] 
**currency_code** | **str** | Output only. Currency code (for example, &#39;USD&#39;, &#39;EUR&#39;) for the client. Read only. | [optional] [readonly] 
**descriptive_name** | **str** | Output only. Descriptive name for the client. Read only. | [optional] [readonly] 
**hidden** | **bool** | Output only. Specifies whether this is a hidden account. Read only. | [optional] [readonly] 
**id** | **str** | Output only. The ID of the client customer. Read only. | [optional] [readonly] 
**level** | **str** | Output only. Distance between given customer and client. For self link, the level value will be 0. Read only. | [optional] [readonly] 
**manager** | **bool** | Output only. Identifies if the client is a manager. Read only. | [optional] [readonly] 
**resource_name** | **str** | Output only. The resource name of the customer client. CustomerClient resource names have the form: &#x60;customers/{customer_id}/customerClients/{client_customer_id}&#x60; | [optional] [readonly] 
**status** | **str** | Output only. The status of the client customer. Read only. | [optional] [readonly] 
**test_account** | **bool** | Output only. Identifies if the client is a test account. Read only. | [optional] [readonly] 
**time_zone** | **str** | Output only. Common Locale Data Repository (CLDR) string representation of the time zone of the client, for example, America/Los_Angeles. Read only. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_customer_client import GoogleAdsSearchads360V0ResourcesCustomerClient

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesCustomerClient from a JSON string
google_ads_searchads360_v0_resources_customer_client_instance = GoogleAdsSearchads360V0ResourcesCustomerClient.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesCustomerClient.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_customer_client_dict = google_ads_searchads360_v0_resources_customer_client_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesCustomerClient from a dict
google_ads_searchads360_v0_resources_customer_client_from_dict = GoogleAdsSearchads360V0ResourcesCustomerClient.from_dict(google_ads_searchads360_v0_resources_customer_client_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


