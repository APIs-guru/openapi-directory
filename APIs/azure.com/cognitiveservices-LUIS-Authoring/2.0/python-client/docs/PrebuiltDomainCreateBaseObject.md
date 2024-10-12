# PrebuiltDomainCreateBaseObject

A model object containing the name of the custom prebuilt entity and the name of the domain to which this model belongs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain_name** | **str** | The domain name. | [optional] 

## Example

```python
from openapi_client.models.prebuilt_domain_create_base_object import PrebuiltDomainCreateBaseObject

# TODO update the JSON string below
json = "{}"
# create an instance of PrebuiltDomainCreateBaseObject from a JSON string
prebuilt_domain_create_base_object_instance = PrebuiltDomainCreateBaseObject.from_json(json)
# print the JSON string representation of the object
print(PrebuiltDomainCreateBaseObject.to_json())

# convert the object into a dict
prebuilt_domain_create_base_object_dict = prebuilt_domain_create_base_object_instance.to_dict()
# create an instance of PrebuiltDomainCreateBaseObject from a dict
prebuilt_domain_create_base_object_from_dict = PrebuiltDomainCreateBaseObject.from_dict(prebuilt_domain_create_base_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


