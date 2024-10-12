# Resource

Key Vault resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The Azure Resource Manager resource ID for the key vault. | [optional] [readonly] 
**location** | **str** | The supported Azure location where the key vault should be created. | 
**name** | **str** | The name of the key vault. | 
**tags** | **Dict[str, str]** | The tags that will be assigned to the key vault.  | [optional] 
**type** | **str** | The resource type of the key vault. | [optional] [readonly] 

## Example

```python
from openapi_client.models.resource import Resource

# TODO update the JSON string below
json = "{}"
# create an instance of Resource from a JSON string
resource_instance = Resource.from_json(json)
# print the JSON string representation of the object
print(Resource.to_json())

# convert the object into a dict
resource_dict = resource_instance.to_dict()
# create an instance of Resource from a dict
resource_from_dict = Resource.from_dict(resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


