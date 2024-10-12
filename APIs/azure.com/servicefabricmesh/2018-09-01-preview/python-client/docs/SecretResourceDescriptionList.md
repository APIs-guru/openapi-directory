# SecretResourceDescriptionList

A pageable list of secret resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to fetch the next page of the list. | [optional] 
**value** | [**List[SecretResourceDescription]**](SecretResourceDescription.md) | One page of the list. | [optional] 

## Example

```python
from openapi_client.models.secret_resource_description_list import SecretResourceDescriptionList

# TODO update the JSON string below
json = "{}"
# create an instance of SecretResourceDescriptionList from a JSON string
secret_resource_description_list_instance = SecretResourceDescriptionList.from_json(json)
# print the JSON string representation of the object
print(SecretResourceDescriptionList.to_json())

# convert the object into a dict
secret_resource_description_list_dict = secret_resource_description_list_instance.to_dict()
# create an instance of SecretResourceDescriptionList from a dict
secret_resource_description_list_from_dict = SecretResourceDescriptionList.from_dict(secret_resource_description_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


