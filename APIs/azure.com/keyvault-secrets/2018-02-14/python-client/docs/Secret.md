# Secret

Resource information with extended details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SecretProperties**](SecretProperties.md) |  | 
**id** | **str** | The Azure Resource Manager resource ID for the key vault. | [optional] [readonly] 
**location** | **str** | The supported Azure location where the key vault should be created. | 
**name** | **str** | The name of the key vault. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The tags that will be assigned to the key vault.  | [optional] 
**type** | **str** | The resource type of the key vault. | [optional] [readonly] 

## Example

```python
from openapi_client.models.secret import Secret

# TODO update the JSON string below
json = "{}"
# create an instance of Secret from a JSON string
secret_instance = Secret.from_json(json)
# print the JSON string representation of the object
print(Secret.to_json())

# convert the object into a dict
secret_dict = secret_instance.to_dict()
# create an instance of Secret from a dict
secret_from_dict = Secret.from_dict(secret_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


