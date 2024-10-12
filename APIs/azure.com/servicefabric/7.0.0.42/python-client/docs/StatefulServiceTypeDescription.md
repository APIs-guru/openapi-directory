# StatefulServiceTypeDescription

Describes a stateful service type defined in the service manifest of a provisioned application type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_persisted_state** | **bool** | A flag indicating whether this is a persistent service which stores states on the local disk. If it is then the value of this property is true, if not it is false. | [optional] 

## Example

```python
from openapi_client.models.stateful_service_type_description import StatefulServiceTypeDescription

# TODO update the JSON string below
json = "{}"
# create an instance of StatefulServiceTypeDescription from a JSON string
stateful_service_type_description_instance = StatefulServiceTypeDescription.from_json(json)
# print the JSON string representation of the object
print(StatefulServiceTypeDescription.to_json())

# convert the object into a dict
stateful_service_type_description_dict = stateful_service_type_description_instance.to_dict()
# create an instance of StatefulServiceTypeDescription from a dict
stateful_service_type_description_from_dict = StatefulServiceTypeDescription.from_dict(stateful_service_type_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


