# SecretValueResourceDescriptionList

A pageable list of values of a secret resource. The information does not include only the name of the value and not the actual unencrypted value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to fetch the next page of the list. | [optional] 
**value** | [**List[SecretValueResourceDescription]**](SecretValueResourceDescription.md) | One page of the list. | [optional] 

## Example

```python
from openapi_client.models.secret_value_resource_description_list import SecretValueResourceDescriptionList

# TODO update the JSON string below
json = "{}"
# create an instance of SecretValueResourceDescriptionList from a JSON string
secret_value_resource_description_list_instance = SecretValueResourceDescriptionList.from_json(json)
# print the JSON string representation of the object
print(SecretValueResourceDescriptionList.to_json())

# convert the object into a dict
secret_value_resource_description_list_dict = secret_value_resource_description_list_instance.to_dict()
# create an instance of SecretValueResourceDescriptionList from a dict
secret_value_resource_description_list_from_dict = SecretValueResourceDescriptionList.from_dict(secret_value_resource_description_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


