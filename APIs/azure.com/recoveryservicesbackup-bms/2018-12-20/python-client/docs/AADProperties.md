# AADProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audience** | **str** |  | [optional] 
**authority** | **str** |  | [optional] 
**service_principal_client_id** | **str** |  | [optional] 
**service_principal_object_id** | **str** |  | [optional] 
**tenant_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.aad_properties import AADProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AADProperties from a JSON string
aad_properties_instance = AADProperties.from_json(json)
# print the JSON string representation of the object
print(AADProperties.to_json())

# convert the object into a dict
aad_properties_dict = aad_properties_instance.to_dict()
# create an instance of AADProperties from a dict
aad_properties_from_dict = AADProperties.from_dict(aad_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


