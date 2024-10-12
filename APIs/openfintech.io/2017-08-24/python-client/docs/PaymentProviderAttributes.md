# PaymentProviderAttributes

Array of Payment-provider attributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Payment-provider&#x60;s code | [optional] 
**features** | **List[str]** |  | [optional] 
**name** | **str** | Payment-provider&#x60;s name | [optional] 
**sales_channels** | **List[str]** |  | [optional] 
**types** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.payment_provider_attributes import PaymentProviderAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentProviderAttributes from a JSON string
payment_provider_attributes_instance = PaymentProviderAttributes.from_json(json)
# print the JSON string representation of the object
print(PaymentProviderAttributes.to_json())

# convert the object into a dict
payment_provider_attributes_dict = payment_provider_attributes_instance.to_dict()
# create an instance of PaymentProviderAttributes from a dict
payment_provider_attributes_from_dict = PaymentProviderAttributes.from_dict(payment_provider_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


