# DomainInformation



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dkim_verified** | **bool** |  | [optional] 
**id** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**return_path_domain_verified** | **bool** |  | [optional] 
**spf_verified** | **bool** |  | [optional] 
**weak_dkim** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.domain_information import DomainInformation

# TODO update the JSON string below
json = "{}"
# create an instance of DomainInformation from a JSON string
domain_information_instance = DomainInformation.from_json(json)
# print the JSON string representation of the object
print(DomainInformation.to_json())

# convert the object into a dict
domain_information_dict = domain_information_instance.to_dict()
# create an instance of DomainInformation from a dict
domain_information_from_dict = DomainInformation.from_dict(domain_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


