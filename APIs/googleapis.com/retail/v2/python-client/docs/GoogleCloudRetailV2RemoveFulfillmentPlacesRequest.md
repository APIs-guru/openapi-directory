# GoogleCloudRetailV2RemoveFulfillmentPlacesRequest

Request message for ProductService.RemoveFulfillmentPlaces method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_missing** | **bool** | If set to true, and the Product is not found, the fulfillment information will still be processed and retained for at most 1 day and processed once the Product is created. If set to false, a NOT_FOUND error is returned if the Product is not found. | [optional] 
**place_ids** | **List[str]** | Required. The IDs for this type, such as the store IDs for \&quot;pickup-in-store\&quot; or the region IDs for \&quot;same-day-delivery\&quot;, to be removed for this type. At least 1 value is required, and a maximum of 2000 values are allowed. Each value must be a string with a length limit of 10 characters, matching the pattern &#x60;[a-zA-Z0-9_-]+&#x60;, such as \&quot;store1\&quot; or \&quot;REGION-2\&quot;. Otherwise, an INVALID_ARGUMENT error is returned. | [optional] 
**remove_time** | **str** | The time when the fulfillment updates are issued, used to prevent out-of-order updates on fulfillment information. If not provided, the internal system time will be used. | [optional] 
**type** | **str** | Required. The fulfillment type, including commonly used types (such as pickup in store and same day delivery), and custom types. Supported values: * \&quot;pickup-in-store\&quot; * \&quot;ship-to-store\&quot; * \&quot;same-day-delivery\&quot; * \&quot;next-day-delivery\&quot; * \&quot;custom-type-1\&quot; * \&quot;custom-type-2\&quot; * \&quot;custom-type-3\&quot; * \&quot;custom-type-4\&quot; * \&quot;custom-type-5\&quot; If this field is set to an invalid value other than these, an INVALID_ARGUMENT error is returned. This field directly corresponds to Product.fulfillment_info.type. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2_remove_fulfillment_places_request import GoogleCloudRetailV2RemoveFulfillmentPlacesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2RemoveFulfillmentPlacesRequest from a JSON string
google_cloud_retail_v2_remove_fulfillment_places_request_instance = GoogleCloudRetailV2RemoveFulfillmentPlacesRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2RemoveFulfillmentPlacesRequest.to_json())

# convert the object into a dict
google_cloud_retail_v2_remove_fulfillment_places_request_dict = google_cloud_retail_v2_remove_fulfillment_places_request_instance.to_dict()
# create an instance of GoogleCloudRetailV2RemoveFulfillmentPlacesRequest from a dict
google_cloud_retail_v2_remove_fulfillment_places_request_from_dict = GoogleCloudRetailV2RemoveFulfillmentPlacesRequest.from_dict(google_cloud_retail_v2_remove_fulfillment_places_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


