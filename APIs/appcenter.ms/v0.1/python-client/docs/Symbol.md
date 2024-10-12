# Symbol


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternate_symbol_ids** | **List[str]** | The other symbols in the same file | 
**app_id** | **str** | The application that this symbol belongs to | 
**build** | **str** | The build number. Optional for Apple. Required for Android. | [optional] 
**origin** | **str** | The origin of the symbol file | 
**platform** | **str** | The platform that this symbol is associated with | 
**status** | **str** | Whether the symbol is ignored. | 
**symbol_id** | **str** | The unique id for this symbol (uuid) | 
**symbol_upload_id** | **str** | The id of the symbol upload this symbol belongs to. | 
**type** | **str** | The type of the symbol for the current symbol upload | 
**url** | **str** | The path name of the symbol file in blob storage | 
**version** | **str** | The version number. Optional for Apple. Required for Android. | [optional] 

## Example

```python
from openapi_client.models.symbol import Symbol

# TODO update the JSON string below
json = "{}"
# create an instance of Symbol from a JSON string
symbol_instance = Symbol.from_json(json)
# print the JSON string representation of the object
print(Symbol.to_json())

# convert the object into a dict
symbol_dict = symbol_instance.to_dict()
# create an instance of Symbol from a dict
symbol_from_dict = Symbol.from_dict(symbol_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


