# ShippingQuery

This object contains information about an incoming shipping query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_from** | [**User**](User.md) |  | 
**id** | **str** | Unique query identifier | 
**invoice_payload** | **str** | Bot specified invoice payload | 
**shipping_address** | [**ShippingAddress**](ShippingAddress.md) |  | 

## Example

```python
from openapi_client.models.shipping_query import ShippingQuery

# TODO update the JSON string below
json = "{}"
# create an instance of ShippingQuery from a JSON string
shipping_query_instance = ShippingQuery.from_json(json)
# print the JSON string representation of the object
print(ShippingQuery.to_json())

# convert the object into a dict
shipping_query_dict = shipping_query_instance.to_dict()
# create an instance of ShippingQuery from a dict
shipping_query_from_dict = ShippingQuery.from_dict(shipping_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


