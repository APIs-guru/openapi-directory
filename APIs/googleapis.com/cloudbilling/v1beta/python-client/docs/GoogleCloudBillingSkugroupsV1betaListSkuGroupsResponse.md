# GoogleCloudBillingSkugroupsV1betaListSkuGroupsResponse

Response message for ListSkuGroups.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token that can be sent as &#x60;page_token&#x60; in the subsequent request to retrieve the next page. If this field is empty, there are no subsequent pages. | [optional] 
**sku_groups** | [**List[GoogleCloudBillingSkugroupsV1betaSkuGroup]**](GoogleCloudBillingSkugroupsV1betaSkuGroup.md) | The returned publicly listed SKU groups. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_billing_skugroups_v1beta_list_sku_groups_response import GoogleCloudBillingSkugroupsV1betaListSkuGroupsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBillingSkugroupsV1betaListSkuGroupsResponse from a JSON string
google_cloud_billing_skugroups_v1beta_list_sku_groups_response_instance = GoogleCloudBillingSkugroupsV1betaListSkuGroupsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBillingSkugroupsV1betaListSkuGroupsResponse.to_json())

# convert the object into a dict
google_cloud_billing_skugroups_v1beta_list_sku_groups_response_dict = google_cloud_billing_skugroups_v1beta_list_sku_groups_response_instance.to_dict()
# create an instance of GoogleCloudBillingSkugroupsV1betaListSkuGroupsResponse from a dict
google_cloud_billing_skugroups_v1beta_list_sku_groups_response_from_dict = GoogleCloudBillingSkugroupsV1betaListSkuGroupsResponse.from_dict(google_cloud_billing_skugroups_v1beta_list_sku_groups_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


