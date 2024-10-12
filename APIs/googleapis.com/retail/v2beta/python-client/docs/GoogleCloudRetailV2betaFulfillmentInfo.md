# GoogleCloudRetailV2betaFulfillmentInfo

Fulfillment information, such as the store IDs for in-store pickup or region IDs for different shipping methods.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**place_ids** | **List[str]** | The IDs for this type, such as the store IDs for FulfillmentInfo.type.pickup-in-store or the region IDs for FulfillmentInfo.type.same-day-delivery. A maximum of 3000 values are allowed. Each value must be a string with a length limit of 30 characters, matching the pattern &#x60;[a-zA-Z0-9_-]+&#x60;, such as \&quot;store1\&quot; or \&quot;REGION-2\&quot;. Otherwise, an INVALID_ARGUMENT error is returned. | [optional] 
**type** | **str** | The fulfillment type, including commonly used types (such as pickup in store and same day delivery), and custom types. Customers have to map custom types to their display names before rendering UI. Supported values: * \&quot;pickup-in-store\&quot; * \&quot;ship-to-store\&quot; * \&quot;same-day-delivery\&quot; * \&quot;next-day-delivery\&quot; * \&quot;custom-type-1\&quot; * \&quot;custom-type-2\&quot; * \&quot;custom-type-3\&quot; * \&quot;custom-type-4\&quot; * \&quot;custom-type-5\&quot; If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2beta_fulfillment_info import GoogleCloudRetailV2betaFulfillmentInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2betaFulfillmentInfo from a JSON string
google_cloud_retail_v2beta_fulfillment_info_instance = GoogleCloudRetailV2betaFulfillmentInfo.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2betaFulfillmentInfo.to_json())

# convert the object into a dict
google_cloud_retail_v2beta_fulfillment_info_dict = google_cloud_retail_v2beta_fulfillment_info_instance.to_dict()
# create an instance of GoogleCloudRetailV2betaFulfillmentInfo from a dict
google_cloud_retail_v2beta_fulfillment_info_from_dict = GoogleCloudRetailV2betaFulfillmentInfo.from_dict(google_cloud_retail_v2beta_fulfillment_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


