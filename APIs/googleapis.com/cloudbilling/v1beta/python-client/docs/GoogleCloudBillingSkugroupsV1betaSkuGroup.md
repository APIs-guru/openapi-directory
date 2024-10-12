# GoogleCloudBillingSkugroupsV1betaSkuGroup

Encapsulates a publicly listed stock keeping unit (SKU) group. A SKU group represents a collection of SKUs that are related to each other. For example, the `AI Platform APIs` SKU group includes SKUs from the Cloud Dialogflow API, the Cloud Text-to-Speech API, and additional related APIs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Description of the SKU group. Example: \&quot;A2 VMs (1 Year CUD)\&quot;. | [optional] 
**name** | **str** | Resource name for the SKU group. Example: \&quot;skuGroups/0e6403d1-4694-44d2-a696-7a78b1a69301\&quot;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_billing_skugroups_v1beta_sku_group import GoogleCloudBillingSkugroupsV1betaSkuGroup

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBillingSkugroupsV1betaSkuGroup from a JSON string
google_cloud_billing_skugroups_v1beta_sku_group_instance = GoogleCloudBillingSkugroupsV1betaSkuGroup.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBillingSkugroupsV1betaSkuGroup.to_json())

# convert the object into a dict
google_cloud_billing_skugroups_v1beta_sku_group_dict = google_cloud_billing_skugroups_v1beta_sku_group_instance.to_dict()
# create an instance of GoogleCloudBillingSkugroupsV1betaSkuGroup from a dict
google_cloud_billing_skugroups_v1beta_sku_group_from_dict = GoogleCloudBillingSkugroupsV1betaSkuGroup.from_dict(google_cloud_billing_skugroups_v1beta_sku_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


