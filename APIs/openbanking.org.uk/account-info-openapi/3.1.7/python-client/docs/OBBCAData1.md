# OBBCAData1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit_interest** | [**CreditInterest**](CreditInterest.md) |  | [optional] 
**other_fees_charges** | [**List[OtherFeesChargesInner]**](OtherFeesChargesInner.md) | Contains details of fees and charges which are not associated with either Overdraft or features/benefits | [optional] 
**overdraft** | [**Overdraft**](Overdraft.md) |  | [optional] 
**product_details** | [**ProductDetails**](ProductDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.obbca_data1 import OBBCAData1

# TODO update the JSON string below
json = "{}"
# create an instance of OBBCAData1 from a JSON string
obbca_data1_instance = OBBCAData1.from_json(json)
# print the JSON string representation of the object
print(OBBCAData1.to_json())

# convert the object into a dict
obbca_data1_dict = obbca_data1_instance.to_dict()
# create an instance of OBBCAData1 from a dict
obbca_data1_from_dict = OBBCAData1.from_dict(obbca_data1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


