# OBReadDataAccount5



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**List[OBAccount6]**](OBAccount6.md) | Unambiguous identification of the account to which credit and debit entries are made. | [optional] 

## Example

```python
from openapi_client.models.ob_read_data_account5 import OBReadDataAccount5

# TODO update the JSON string below
json = "{}"
# create an instance of OBReadDataAccount5 from a JSON string
ob_read_data_account5_instance = OBReadDataAccount5.from_json(json)
# print the JSON string representation of the object
print(OBReadDataAccount5.to_json())

# convert the object into a dict
ob_read_data_account5_dict = ob_read_data_account5_instance.to_dict()
# create an instance of OBReadDataAccount5 from a dict
ob_read_data_account5_from_dict = OBReadDataAccount5.from_dict(ob_read_data_account5_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


