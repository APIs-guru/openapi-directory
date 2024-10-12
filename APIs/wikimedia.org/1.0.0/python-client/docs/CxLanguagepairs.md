# CxLanguagepairs


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | **List[str]** | the list of available source languages | [optional] 
**target** | **List[str]** | the list of available destination languages | [optional] 

## Example

```python
from openapi_client.models.cx_languagepairs import CxLanguagepairs

# TODO update the JSON string below
json = "{}"
# create an instance of CxLanguagepairs from a JSON string
cx_languagepairs_instance = CxLanguagepairs.from_json(json)
# print the JSON string representation of the object
print(CxLanguagepairs.to_json())

# convert the object into a dict
cx_languagepairs_dict = cx_languagepairs_instance.to_dict()
# create an instance of CxLanguagepairs from a dict
cx_languagepairs_from_dict = CxLanguagepairs.from_dict(cx_languagepairs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


