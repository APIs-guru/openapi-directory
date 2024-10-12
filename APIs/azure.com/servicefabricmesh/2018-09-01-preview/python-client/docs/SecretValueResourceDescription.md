# SecretValueResourceDescription

This type describes a value of a secret resource. The name of this resource is the version identifier corresponding to this secret value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SecretValueResourceProperties**](SecretValueResourceProperties.md) |  | 
**location** | **str** | The geo-location where the resource lives | 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**id** | **str** | Fully qualified identifier for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.secret_value_resource_description import SecretValueResourceDescription

# TODO update the JSON string below
json = "{}"
# create an instance of SecretValueResourceDescription from a JSON string
secret_value_resource_description_instance = SecretValueResourceDescription.from_json(json)
# print the JSON string representation of the object
print(SecretValueResourceDescription.to_json())

# convert the object into a dict
secret_value_resource_description_dict = secret_value_resource_description_instance.to_dict()
# create an instance of SecretValueResourceDescription from a dict
secret_value_resource_description_from_dict = SecretValueResourceDescription.from_dict(secret_value_resource_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


