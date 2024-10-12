# OBReadDataTransaction6



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transaction** | [**List[OBTransaction6]**](OBTransaction6.md) | Provides further details on an entry in the report. | [optional] 

## Example

```python
from openapi_client.models.ob_read_data_transaction6 import OBReadDataTransaction6

# TODO update the JSON string below
json = "{}"
# create an instance of OBReadDataTransaction6 from a JSON string
ob_read_data_transaction6_instance = OBReadDataTransaction6.from_json(json)
# print the JSON string representation of the object
print(OBReadDataTransaction6.to_json())

# convert the object into a dict
ob_read_data_transaction6_dict = ob_read_data_transaction6_instance.to_dict()
# create an instance of OBReadDataTransaction6 from a dict
ob_read_data_transaction6_from_dict = OBReadDataTransaction6.from_dict(ob_read_data_transaction6_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


