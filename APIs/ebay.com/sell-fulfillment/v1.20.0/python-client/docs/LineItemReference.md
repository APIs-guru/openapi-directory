# LineItemReference

This type identifies the line item and quantity of that line item that comprises one fulfillment, such as a shipping package.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**line_item_id** | **str** | This is the unique identifier of the eBay order line item that is part of the shipping fulfillment. The line item ID is created as soon as there is a commitment to buy from the seller. | [optional] 
**quantity** | **int** | This is the number of lineItems associated with the &lt;a href&#x3D;\&quot;#request.trackingNumber\&quot;&gt;trackingNumber&lt;/a&gt; specified by the seller. This must be a whole number greater than zero (0). | [optional] 

## Example

```python
from openapi_client.models.line_item_reference import LineItemReference

# TODO update the JSON string below
json = "{}"
# create an instance of LineItemReference from a JSON string
line_item_reference_instance = LineItemReference.from_json(json)
# print the JSON string representation of the object
print(LineItemReference.to_json())

# convert the object into a dict
line_item_reference_dict = line_item_reference_instance.to_dict()
# create an instance of LineItemReference from a dict
line_item_reference_from_dict = LineItemReference.from_dict(line_item_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


