# GoogleCloudRetailV2alphaMerchantCenterLink

Represents a link between a Merchant Center account and a branch. After a link is established, products from the linked Merchant Center account are streamed to the linked branch.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branch_id** | **str** | The branch ID (e.g. 0/1/2) within this catalog that products from merchant_center_account_id are streamed to. When updating this field, an empty value will use the currently configured default branch. However, changing the default branch later on won&#39;t change the linked branch here. A single branch ID can only have one linked Merchant Center account ID. | [optional] 
**destinations** | **List[str]** | String representing the destination to import for, all if left empty. List of possible values is given in [Included destination](https://support.google.com/merchants/answer/7501026). List of allowed string values: \&quot;Shopping_ads\&quot;, \&quot;Buy_on_google_listings\&quot;, \&quot;Display_ads\&quot;, \&quot;Local_inventory _ads\&quot;, \&quot;Free_listings\&quot;, \&quot;Free_local_listings\&quot; NOTE: The string values are case sensitive. | [optional] 
**feeds** | [**List[GoogleCloudRetailV2alphaMerchantCenterFeedFilter]**](GoogleCloudRetailV2alphaMerchantCenterFeedFilter.md) | Criteria for the Merchant Center feeds to be ingested via the link. All offers will be ingested if the list is empty. Otherwise the offers will be ingested from selected feeds. | [optional] 
**language_code** | **str** | Language of the title/description and other string attributes. Use language tags defined by [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). ISO 639-1. This specifies the language of offers in Merchant Center that will be accepted. If empty no language filtering will be performed. Example value: &#x60;en&#x60;. | [optional] 
**merchant_center_account_id** | **str** | Required. The linked [Merchant Center account ID](https://developers.google.com/shopping-content/guides/accountstatuses). The account must be a standalone account or a sub-account of a MCA. | [optional] 
**region_code** | **str** | Region code of offers to accept. 2-letter Uppercase ISO 3166-1 alpha-2 code. List of values can be found [here](https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry) under the &#x60;region&#x60; tag. If left blank no region filtering will be performed. Example value: &#x60;US&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_merchant_center_link import GoogleCloudRetailV2alphaMerchantCenterLink

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaMerchantCenterLink from a JSON string
google_cloud_retail_v2alpha_merchant_center_link_instance = GoogleCloudRetailV2alphaMerchantCenterLink.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaMerchantCenterLink.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_merchant_center_link_dict = google_cloud_retail_v2alpha_merchant_center_link_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaMerchantCenterLink from a dict
google_cloud_retail_v2alpha_merchant_center_link_from_dict = GoogleCloudRetailV2alphaMerchantCenterLink.from_dict(google_cloud_retail_v2alpha_merchant_center_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


