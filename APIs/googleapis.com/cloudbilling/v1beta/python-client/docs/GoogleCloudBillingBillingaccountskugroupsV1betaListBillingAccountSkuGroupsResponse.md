# GoogleCloudBillingBillingaccountskugroupsV1betaListBillingAccountSkuGroupsResponse

Response message for ListBillingAccountSkuGroups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_account_sku_groups** | [**List[GoogleCloudBillingBillingaccountskugroupsV1betaBillingAccountSkuGroup]**](GoogleCloudBillingBillingaccountskugroupsV1betaBillingAccountSkuGroup.md) | The returned publicly listed billing account SKU groups. | [optional] 
**next_page_token** | **str** | Token that can be sent as &#x60;page_token&#x60; in the subsequent request to retrieve the next page. If this field is empty, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_billing_billingaccountskugroups_v1beta_list_billing_account_sku_groups_response import GoogleCloudBillingBillingaccountskugroupsV1betaListBillingAccountSkuGroupsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBillingBillingaccountskugroupsV1betaListBillingAccountSkuGroupsResponse from a JSON string
google_cloud_billing_billingaccountskugroups_v1beta_list_billing_account_sku_groups_response_instance = GoogleCloudBillingBillingaccountskugroupsV1betaListBillingAccountSkuGroupsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBillingBillingaccountskugroupsV1betaListBillingAccountSkuGroupsResponse.to_json())

# convert the object into a dict
google_cloud_billing_billingaccountskugroups_v1beta_list_billing_account_sku_groups_response_dict = google_cloud_billing_billingaccountskugroups_v1beta_list_billing_account_sku_groups_response_instance.to_dict()
# create an instance of GoogleCloudBillingBillingaccountskugroupsV1betaListBillingAccountSkuGroupsResponse from a dict
google_cloud_billing_billingaccountskugroups_v1beta_list_billing_account_sku_groups_response_from_dict = GoogleCloudBillingBillingaccountskugroupsV1betaListBillingAccountSkuGroupsResponse.from_dict(google_cloud_billing_billingaccountskugroups_v1beta_list_billing_account_sku_groups_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


