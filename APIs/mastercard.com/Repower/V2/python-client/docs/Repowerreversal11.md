# Repowerreversal11

Response details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**original_request_id** | **str** | Unique identifier assigned to the original rePower transaction request. Details- Numeric value, 1-19 | [optional] 
**request_id** | **str** | This is the unique identifier for API Web service request. Details- Numeric value, variable length between 1 and 19 digits, without zero padding | [optional] 
**transaction_history** | [**Transactionhistory12**](Transactionhistory12.md) |  | [optional] 
**transaction_reference** | **str** | This is the Request ID for the original rePower transaction provided by the merchant or acquiring institution. Details- Alphanumeric value, 19 | [optional] 

## Example

```python
from openapi_client.models.repowerreversal11 import Repowerreversal11

# TODO update the JSON string below
json = "{}"
# create an instance of Repowerreversal11 from a JSON string
repowerreversal11_instance = Repowerreversal11.from_json(json)
# print the JSON string representation of the object
print(Repowerreversal11.to_json())

# convert the object into a dict
repowerreversal11_dict = repowerreversal11_instance.to_dict()
# create an instance of Repowerreversal11 from a dict
repowerreversal11_from_dict = Repowerreversal11.from_dict(repowerreversal11_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


