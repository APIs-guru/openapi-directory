# DomainCreationModel



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**return_path_domain** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.domain_creation_model import DomainCreationModel

# TODO update the JSON string below
json = "{}"
# create an instance of DomainCreationModel from a JSON string
domain_creation_model_instance = DomainCreationModel.from_json(json)
# print the JSON string representation of the object
print(DomainCreationModel.to_json())

# convert the object into a dict
domain_creation_model_dict = domain_creation_model_instance.to_dict()
# create an instance of DomainCreationModel from a dict
domain_creation_model_from_dict = DomainCreationModel.from_dict(domain_creation_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


