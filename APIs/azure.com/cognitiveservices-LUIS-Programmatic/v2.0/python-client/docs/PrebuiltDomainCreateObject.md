# PrebuiltDomainCreateObject

A prebuilt domain create object containing the name and culture of the domain.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**culture** | **str** | The culture of the new domain. | [optional] 
**domain_name** | **str** | The domain name. | [optional] 

## Example

```python
from openapi_client.models.prebuilt_domain_create_object import PrebuiltDomainCreateObject

# TODO update the JSON string below
json = "{}"
# create an instance of PrebuiltDomainCreateObject from a JSON string
prebuilt_domain_create_object_instance = PrebuiltDomainCreateObject.from_json(json)
# print the JSON string representation of the object
print(PrebuiltDomainCreateObject.to_json())

# convert the object into a dict
prebuilt_domain_create_object_dict = prebuilt_domain_create_object_instance.to_dict()
# create an instance of PrebuiltDomainCreateObject from a dict
prebuilt_domain_create_object_from_dict = PrebuiltDomainCreateObject.from_dict(prebuilt_domain_create_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


