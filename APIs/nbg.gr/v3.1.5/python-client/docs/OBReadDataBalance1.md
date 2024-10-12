# OBReadDataBalance1



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**balance** | [**List[OBCashBalance1]**](OBCashBalance1.md) | Set of elements used to define the balance details. | 

## Example

```python
from openapi_client.models.ob_read_data_balance1 import OBReadDataBalance1

# TODO update the JSON string below
json = "{}"
# create an instance of OBReadDataBalance1 from a JSON string
ob_read_data_balance1_instance = OBReadDataBalance1.from_json(json)
# print the JSON string representation of the object
print(OBReadDataBalance1.to_json())

# convert the object into a dict
ob_read_data_balance1_dict = ob_read_data_balance1_instance.to_dict()
# create an instance of OBReadDataBalance1 from a dict
ob_read_data_balance1_from_dict = OBReadDataBalance1.from_dict(ob_read_data_balance1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


