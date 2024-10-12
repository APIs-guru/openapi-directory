# EnumerationSetLinks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_server** | **str** |  | [optional] 
**database** | **str** |  | [optional] 
**security** | **str** |  | [optional] 
**security_entries** | **str** |  | [optional] 
**var_self** | **str** |  | [optional] 
**values** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.enumeration_set_links import EnumerationSetLinks

# TODO update the JSON string below
json = "{}"
# create an instance of EnumerationSetLinks from a JSON string
enumeration_set_links_instance = EnumerationSetLinks.from_json(json)
# print the JSON string representation of the object
print(EnumerationSetLinks.to_json())

# convert the object into a dict
enumeration_set_links_dict = enumeration_set_links_instance.to_dict()
# create an instance of EnumerationSetLinks from a dict
enumeration_set_links_from_dict = EnumerationSetLinks.from_dict(enumeration_set_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


