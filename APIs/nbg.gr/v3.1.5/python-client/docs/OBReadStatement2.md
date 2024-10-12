# OBReadStatement2



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**OBReadDataStatement2**](OBReadDataStatement2.md) |  | 
**links** | [**Links**](Links.md) |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 

## Example

```python
from openapi_client.models.ob_read_statement2 import OBReadStatement2

# TODO update the JSON string below
json = "{}"
# create an instance of OBReadStatement2 from a JSON string
ob_read_statement2_instance = OBReadStatement2.from_json(json)
# print the JSON string representation of the object
print(OBReadStatement2.to_json())

# convert the object into a dict
ob_read_statement2_dict = ob_read_statement2_instance.to_dict()
# create an instance of OBReadStatement2 from a dict
ob_read_statement2_from_dict = OBReadStatement2.from_dict(ob_read_statement2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


