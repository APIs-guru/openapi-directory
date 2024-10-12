# PaymentData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_data** | **str** |  | [optional] 
**token** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.payment_data import PaymentData

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentData from a JSON string
payment_data_instance = PaymentData.from_json(json)
# print the JSON string representation of the object
print(PaymentData.to_json())

# convert the object into a dict
payment_data_dict = payment_data_instance.to_dict()
# create an instance of PaymentData from a dict
payment_data_from_dict = PaymentData.from_dict(payment_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


