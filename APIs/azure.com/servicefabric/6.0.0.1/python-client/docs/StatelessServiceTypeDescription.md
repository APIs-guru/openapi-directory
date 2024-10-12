# StatelessServiceTypeDescription

Describes a stateless service type defined in the service manifest of a provisioned application type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**use_implicit_host** | **bool** | A flag indicating if this type is not implemented and hosted by a user service process, but is implicitly hosted by a system created process. This value is true for services using the guest executable services, false otherwise. | [optional] 

## Example

```python
from openapi_client.models.stateless_service_type_description import StatelessServiceTypeDescription

# TODO update the JSON string below
json = "{}"
# create an instance of StatelessServiceTypeDescription from a JSON string
stateless_service_type_description_instance = StatelessServiceTypeDescription.from_json(json)
# print the JSON string representation of the object
print(StatelessServiceTypeDescription.to_json())

# convert the object into a dict
stateless_service_type_description_dict = stateless_service_type_description_instance.to_dict()
# create an instance of StatelessServiceTypeDescription from a dict
stateless_service_type_description_from_dict = StatelessServiceTypeDescription.from_dict(stateless_service_type_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


