# ShippingFulfillmentPagedCollection

This type contains the specifications for the entire collection of shipping fulfillments that are associated with the order specified by a <b>getShippingFulfillments</b> call. The <b>fulfillments</b> container returns an array of all the fulfillments in the collection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fulfillments** | [**List[ShippingFulfillment]**](ShippingFulfillment.md) | This array contains one or more fulfillments required for the order that was specified in method endpoint. | [optional] 
**total** | **int** | The total number of fulfillments in the specified order.&lt;br&gt;&lt;br&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt; If no fulfillments are found for the order, this field is returned with a value of &lt;code&gt;0&lt;/code&gt;.&lt;/span&gt; | [optional] 
**warnings** | [**List[Error]**](Error.md) | This array is only returned if one or more errors or warnings occur with the call request. | [optional] 

## Example

```python
from openapi_client.models.shipping_fulfillment_paged_collection import ShippingFulfillmentPagedCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ShippingFulfillmentPagedCollection from a JSON string
shipping_fulfillment_paged_collection_instance = ShippingFulfillmentPagedCollection.from_json(json)
# print the JSON string representation of the object
print(ShippingFulfillmentPagedCollection.to_json())

# convert the object into a dict
shipping_fulfillment_paged_collection_dict = shipping_fulfillment_paged_collection_instance.to_dict()
# create an instance of ShippingFulfillmentPagedCollection from a dict
shipping_fulfillment_paged_collection_from_dict = ShippingFulfillmentPagedCollection.from_dict(shipping_fulfillment_paged_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


