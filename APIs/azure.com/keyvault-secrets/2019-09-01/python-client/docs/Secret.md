# Secret

Resource information with extended details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SecretProperties**](SecretProperties.md) |  | 
**id** | **str** | Fully qualified identifier of the key vault resource. | [optional] [readonly] 
**location** | **str** | Azure location of the key vault resource. | [optional] [readonly] 
**name** | **str** | Name of the key vault resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Tags assigned to the key vault resource. | [optional] [readonly] 
**type** | **str** | Resource type of the key vault resource. | [optional] [readonly] 

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


