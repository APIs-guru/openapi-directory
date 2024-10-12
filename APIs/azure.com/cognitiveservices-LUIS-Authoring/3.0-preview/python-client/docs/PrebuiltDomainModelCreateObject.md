# PrebuiltDomainModelCreateObject

A model object containing the name of the custom prebuilt intent or entity and the name of the domain to which this model belongs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain_name** | **str** | The domain name. | [optional] 
**model_name** | **str** | The intent name or entity name. | [optional] 

## Example

```python
from openapi_client.models.prebuilt_domain_model_create_object import PrebuiltDomainModelCreateObject

# TODO update the JSON string below
json = "{}"
# create an instance of PrebuiltDomainModelCreateObject from a JSON string
prebuilt_domain_model_create_object_instance = PrebuiltDomainModelCreateObject.from_json(json)
# print the JSON string representation of the object
print(PrebuiltDomainModelCreateObject.to_json())

# convert the object into a dict
prebuilt_domain_model_create_object_dict = prebuilt_domain_model_create_object_instance.to_dict()
# create an instance of PrebuiltDomainModelCreateObject from a dict
prebuilt_domain_model_create_object_from_dict = PrebuiltDomainModelCreateObject.from_dict(prebuilt_domain_model_create_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


