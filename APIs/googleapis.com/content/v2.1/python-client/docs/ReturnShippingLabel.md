# ReturnShippingLabel

Return shipping label for a Buy on Google merchant-managed return.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier** | **str** | Name of the carrier. | [optional] 
**label_uri** | **str** | The URL for the return shipping label in PDF format | [optional] 
**tracking_id** | **str** | The tracking id of this return label. | [optional] 

## Example

```python
from openapi_client.models.return_shipping_label import ReturnShippingLabel

# TODO update the JSON string below
json = "{}"
# create an instance of ReturnShippingLabel from a JSON string
return_shipping_label_instance = ReturnShippingLabel.from_json(json)
# print the JSON string representation of the object
print(ReturnShippingLabel.to_json())

# convert the object into a dict
return_shipping_label_dict = return_shipping_label_instance.to_dict()
# create an instance of ReturnShippingLabel from a dict
return_shipping_label_from_dict = ReturnShippingLabel.from_dict(return_shipping_label_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


