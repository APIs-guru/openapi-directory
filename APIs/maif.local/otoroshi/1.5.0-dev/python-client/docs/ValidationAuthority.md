# ValidationAuthority

Settings to access a validation authority server

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**always_valid** | **bool** | Bypass http calls, every certificates are valids | 
**bad_ttl** | **int** | The TTL for invalid access response caching | 
**description** | **str** | The description of the settings | 
**good_ttl** | **int** | The TTL for valid access response caching | 
**headers** | **Dict[str, str]** | HTTP call headers | 
**host** | **str** | The host of the server | 
**id** | **str** | The id of the settings | 
**method** | **str** | The HTTP method | 
**name** | **str** | The name of the settings | 
**no_cache** | **bool** | Avoid caching responses | 
**path** | **str** | The URL path | 
**timeout** | **int** | The call timeout | 
**url** | **str** | The URL of the server | 

## Example

```python
from openapi_client.models.validation_authority import ValidationAuthority

# TODO update the JSON string below
json = "{}"
# create an instance of ValidationAuthority from a JSON string
validation_authority_instance = ValidationAuthority.from_json(json)
# print the JSON string representation of the object
print(ValidationAuthority.to_json())

# convert the object into a dict
validation_authority_dict = validation_authority_instance.to_dict()
# create an instance of ValidationAuthority from a dict
validation_authority_from_dict = ValidationAuthority.from_dict(validation_authority_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


