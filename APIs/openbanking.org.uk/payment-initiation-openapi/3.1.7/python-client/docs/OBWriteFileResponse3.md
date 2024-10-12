# OBWriteFileResponse3


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**OBWriteFileResponse3Data**](OBWriteFileResponse3Data.md) |  | 
**links** | [**Links**](Links.md) |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 

## Example

```python
from openapi_client.models.ob_write_file_response3 import OBWriteFileResponse3

# TODO update the JSON string below
json = "{}"
# create an instance of OBWriteFileResponse3 from a JSON string
ob_write_file_response3_instance = OBWriteFileResponse3.from_json(json)
# print the JSON string representation of the object
print(OBWriteFileResponse3.to_json())

# convert the object into a dict
ob_write_file_response3_dict = ob_write_file_response3_instance.to_dict()
# create an instance of OBWriteFileResponse3 from a dict
ob_write_file_response3_from_dict = OBWriteFileResponse3.from_dict(ob_write_file_response3_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


