# ConsentAccessorScope

The accessor scope that describes who can access, for what purpose, in which environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actor** | **str** | An individual, group, or access role that identifies the accessor or a characteristic of the accessor. This can be a resource ID (such as &#x60;{resourceType}/{id}&#x60;) or an external URI. This value must be present. | [optional] 
**environment** | **str** | An abstract identifier that describes the environment or conditions under which the accessor is acting. Can be “*” if it applies to all environments. | [optional] 
**purpose** | **str** | The intent of data use. Can be “*” if it applies to all purposes. | [optional] 

## Example

```python
from openapi_client.models.consent_accessor_scope import ConsentAccessorScope

# TODO update the JSON string below
json = "{}"
# create an instance of ConsentAccessorScope from a JSON string
consent_accessor_scope_instance = ConsentAccessorScope.from_json(json)
# print the JSON string representation of the object
print(ConsentAccessorScope.to_json())

# convert the object into a dict
consent_accessor_scope_dict = consent_accessor_scope_instance.to_dict()
# create an instance of ConsentAccessorScope from a dict
consent_accessor_scope_from_dict = ConsentAccessorScope.from_dict(consent_accessor_scope_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


