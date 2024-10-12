# OBPCAData1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit_interest** | [**CreditInterest1**](CreditInterest1.md) |  | [optional] 
**other_fees_charges** | [**OtherFeesCharges**](OtherFeesCharges.md) |  | [optional] 
**overdraft** | [**Overdraft1**](Overdraft1.md) |  | [optional] 
**product_details** | [**ProductDetails1**](ProductDetails1.md) |  | [optional] 

## Example

```python
from openapi_client.models.obpca_data1 import OBPCAData1

# TODO update the JSON string below
json = "{}"
# create an instance of OBPCAData1 from a JSON string
obpca_data1_instance = OBPCAData1.from_json(json)
# print the JSON string representation of the object
print(OBPCAData1.to_json())

# convert the object into a dict
obpca_data1_dict = obpca_data1_instance.to_dict()
# create an instance of OBPCAData1 from a dict
obpca_data1_from_dict = OBPCAData1.from_dict(obpca_data1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


