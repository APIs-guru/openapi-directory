# CxListTools


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tools** | **List[str]** | the list of tools available for the given language pair | [optional] 

## Example

```python
from openapi_client.models.cx_list_tools import CxListTools

# TODO update the JSON string below
json = "{}"
# create an instance of CxListTools from a JSON string
cx_list_tools_instance = CxListTools.from_json(json)
# print the JSON string representation of the object
print(CxListTools.to_json())

# convert the object into a dict
cx_list_tools_dict = cx_list_tools_instance.to_dict()
# create an instance of CxListTools from a dict
cx_list_tools_from_dict = CxListTools.from_dict(cx_list_tools_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


