# OBReadTransaction6


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**OBReadDataTransaction6**](OBReadDataTransaction6.md) |  | 
**links** | [**Links**](Links.md) |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 

## Example

```python
from openapi_client.models.ob_read_transaction6 import OBReadTransaction6

# TODO update the JSON string below
json = "{}"
# create an instance of OBReadTransaction6 from a JSON string
ob_read_transaction6_instance = OBReadTransaction6.from_json(json)
# print the JSON string representation of the object
print(OBReadTransaction6.to_json())

# convert the object into a dict
ob_read_transaction6_dict = ob_read_transaction6_instance.to_dict()
# create an instance of OBReadTransaction6 from a dict
ob_read_transaction6_from_dict = OBReadTransaction6.from_dict(ob_read_transaction6_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


