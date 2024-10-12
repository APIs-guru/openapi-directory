# SecurityMappingLinks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_server** | **str** |  | [optional] 
**security** | **str** |  | [optional] 
**security_entries** | **str** |  | [optional] 
**security_identity** | **str** |  | [optional] 
**var_self** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.security_mapping_links import SecurityMappingLinks

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityMappingLinks from a JSON string
security_mapping_links_instance = SecurityMappingLinks.from_json(json)
# print the JSON string representation of the object
print(SecurityMappingLinks.to_json())

# convert the object into a dict
security_mapping_links_dict = security_mapping_links_instance.to_dict()
# create an instance of SecurityMappingLinks from a dict
security_mapping_links_from_dict = SecurityMappingLinks.from_dict(security_mapping_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


