# SecurityEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_rights** | **List[str]** |  | [optional] 
**deny_rights** | **List[str]** |  | [optional] 
**links** | [**SecurityEntryLinks**](SecurityEntryLinks.md) |  | [optional] 
**name** | **str** |  | [optional] 
**security_identity_name** | **str** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 

## Example

```python
from openapi_client.models.security_entry import SecurityEntry

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityEntry from a JSON string
security_entry_instance = SecurityEntry.from_json(json)
# print the JSON string representation of the object
print(SecurityEntry.to_json())

# convert the object into a dict
security_entry_dict = security_entry_instance.to_dict()
# create an instance of SecurityEntry from a dict
security_entry_from_dict = SecurityEntry.from_dict(security_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


