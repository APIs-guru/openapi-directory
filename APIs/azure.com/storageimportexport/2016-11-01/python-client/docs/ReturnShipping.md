# ReturnShipping

Specifies the return carrier and customer's account with the carrier.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**carrier_account_number** | **str** | The customer&#39;s account number with the carrier. | 
**carrier_name** | **str** | The carrier&#39;s name. | 

## Example

```python
from openapi_client.models.return_shipping import ReturnShipping

# TODO update the JSON string below
json = "{}"
# create an instance of ReturnShipping from a JSON string
return_shipping_instance = ReturnShipping.from_json(json)
# print the JSON string representation of the object
print(ReturnShipping.to_json())

# convert the object into a dict
return_shipping_dict = return_shipping_instance.to_dict()
# create an instance of ReturnShipping from a dict
return_shipping_from_dict = ReturnShipping.from_dict(return_shipping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


