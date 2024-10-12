# SecurityMapping


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**links** | [**SecurityMappingLinks**](SecurityMappingLinks.md) |  | [optional] 
**name** | **str** |  | [optional] 
**path** | **str** |  | [optional] 
**security_identity_web_id** | **str** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 
**web_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.security_mapping import SecurityMapping

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityMapping from a JSON string
security_mapping_instance = SecurityMapping.from_json(json)
# print the JSON string representation of the object
print(SecurityMapping.to_json())

# convert the object into a dict
security_mapping_dict = security_mapping_instance.to_dict()
# create an instance of SecurityMapping from a dict
security_mapping_from_dict = SecurityMapping.from_dict(security_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


