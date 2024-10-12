# SecurityEntryLinks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**securable_object** | **str** |  | [optional] 
**security_identity** | **str** |  | [optional] 
**var_self** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.security_entry_links import SecurityEntryLinks

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityEntryLinks from a JSON string
security_entry_links_instance = SecurityEntryLinks.from_json(json)
# print the JSON string representation of the object
print(SecurityEntryLinks.to_json())

# convert the object into a dict
security_entry_links_dict = security_entry_links_instance.to_dict()
# create an instance of SecurityEntryLinks from a dict
security_entry_links_from_dict = SecurityEntryLinks.from_dict(security_entry_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


