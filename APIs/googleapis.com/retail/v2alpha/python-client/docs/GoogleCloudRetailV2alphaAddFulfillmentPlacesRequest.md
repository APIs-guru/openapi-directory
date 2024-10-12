# GoogleCloudRetailV2alphaAddFulfillmentPlacesRequest

Request message for ProductService.AddFulfillmentPlaces method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**add_time** | **str** | The time when the fulfillment updates are issued, used to prevent out-of-order updates on fulfillment information. If not provided, the internal system time will be used. | [optional] 
**allow_missing** | **bool** | If set to true, and the Product is not found, the fulfillment information will still be processed and retained for at most 1 day and processed once the Product is created. If set to false, a NOT_FOUND error is returned if the Product is not found. | [optional] 
**place_ids** | **List[str]** | Required. The IDs for this type, such as the store IDs for \&quot;pickup-in-store\&quot; or the region IDs for \&quot;same-day-delivery\&quot; to be added for this type. Duplicate IDs will be automatically ignored. At least 1 value is required, and a maximum of 2000 values are allowed. Each value must be a string with a length limit of 10 characters, matching the pattern &#x60;[a-zA-Z0-9_-]+&#x60;, such as \&quot;store1\&quot; or \&quot;REGION-2\&quot;. Otherwise, an INVALID_ARGUMENT error is returned. If the total number of place IDs exceeds 2000 for this type after adding, then the update will be rejected. | [optional] 
**type** | **str** | Required. The fulfillment type, including commonly used types (such as pickup in store and same day delivery), and custom types. Supported values: * \&quot;pickup-in-store\&quot; * \&quot;ship-to-store\&quot; * \&quot;same-day-delivery\&quot; * \&quot;next-day-delivery\&quot; * \&quot;custom-type-1\&quot; * \&quot;custom-type-2\&quot; * \&quot;custom-type-3\&quot; * \&quot;custom-type-4\&quot; * \&quot;custom-type-5\&quot; If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned. This field directly corresponds to Product.fulfillment_info.type. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_add_fulfillment_places_request import GoogleCloudRetailV2alphaAddFulfillmentPlacesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaAddFulfillmentPlacesRequest from a JSON string
google_cloud_retail_v2alpha_add_fulfillment_places_request_instance = GoogleCloudRetailV2alphaAddFulfillmentPlacesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaAddFulfillmentPlacesRequest.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_add_fulfillment_places_request_dict = google_cloud_retail_v2alpha_add_fulfillment_places_request_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaAddFulfillmentPlacesRequest from a dict
google_cloud_retail_v2alpha_add_fulfillment_places_request_from_dict = GoogleCloudRetailV2alphaAddFulfillmentPlacesRequest.from_dict(google_cloud_retail_v2alpha_add_fulfillment_places_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


