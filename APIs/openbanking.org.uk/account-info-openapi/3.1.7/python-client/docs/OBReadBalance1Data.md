# OBReadBalance1Data


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**balance** | [**List[OBReadBalance1DataBalanceInner]**](OBReadBalance1DataBalanceInner.md) |  | 

## Example

```python
from openapi_client.models.ob_read_balance1_data import OBReadBalance1Data

# TODO update the JSON string below
json = "{}"
# create an instance of OBReadBalance1Data from a JSON string
ob_read_balance1_data_instance = OBReadBalance1Data.from_json(json)
# print the JSON string representation of the object
print(OBReadBalance1Data.to_json())

# convert the object into a dict
ob_read_balance1_data_dict = ob_read_balance1_data_instance.to_dict()
# create an instance of OBReadBalance1Data from a dict
ob_read_balance1_data_from_dict = OBReadBalance1Data.from_dict(ob_read_balance1_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


