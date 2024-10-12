# GoogleAdsSearchads360V0ResourcesCustomerManagerLink

Represents customer-manager link relationship.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**manager_customer** | **str** | Output only. The manager customer linked to the customer. | [optional] [readonly] 
**manager_link_id** | **str** | Output only. ID of the customer-manager link. This field is read only. | [optional] [readonly] 
**resource_name** | **str** | Immutable. Name of the resource. CustomerManagerLink resource names have the form: &#x60;customers/{customer_id}/customerManagerLinks/{manager_customer_id}~{manager_link_id}&#x60; | [optional] 
**status** | **str** | Status of the link between the customer and the manager. | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_resources_customer_manager_link import GoogleAdsSearchads360V0ResourcesCustomerManagerLink

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ResourcesCustomerManagerLink from a JSON string
google_ads_searchads360_v0_resources_customer_manager_link_instance = GoogleAdsSearchads360V0ResourcesCustomerManagerLink.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ResourcesCustomerManagerLink.to_json())

# convert the object into a dict
google_ads_searchads360_v0_resources_customer_manager_link_dict = google_ads_searchads360_v0_resources_customer_manager_link_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ResourcesCustomerManagerLink from a dict
google_ads_searchads360_v0_resources_customer_manager_link_from_dict = GoogleAdsSearchads360V0ResourcesCustomerManagerLink.from_dict(google_ads_searchads360_v0_resources_customer_manager_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


