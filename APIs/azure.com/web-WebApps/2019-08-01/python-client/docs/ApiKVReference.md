# ApiKVReference

Description of site key vault references.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**details** | **str** |  | [optional] 
**identity_type** | **str** |  | [optional] 
**location** | **str** |  | [optional] 
**reference** | **str** |  | [optional] 
**secret_name** | **str** |  | [optional] 
**secret_version** | **str** |  | [optional] 
**source** | **str** |  | [optional] 
**status** | **str** |  | [optional] 
**vault_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.api_kv_reference import ApiKVReference

# TODO update the JSON string below
json = "{}"
# create an instance of ApiKVReference from a JSON string
api_kv_reference_instance = ApiKVReference.from_json(json)
# print the JSON string representation of the object
print(ApiKVReference.to_json())

# convert the object into a dict
api_kv_reference_dict = api_kv_reference_instance.to_dict()
# create an instance of ApiKVReference from a dict
api_kv_reference_from_dict = ApiKVReference.from_dict(api_kv_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


