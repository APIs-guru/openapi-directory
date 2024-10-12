# ServiceFabricPropertiesFragment

Properties of a service fabric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environment_id** | **str** | The resource id of the environment under which the service fabric resource is present | [optional] 
**external_service_fabric_id** | **str** | The backing service fabric resource&#39;s id | [optional] 

## Example

```python
from openapi_client.models.service_fabric_properties_fragment import ServiceFabricPropertiesFragment

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceFabricPropertiesFragment from a JSON string
service_fabric_properties_fragment_instance = ServiceFabricPropertiesFragment.from_json(json)
# print the JSON string representation of the object
print(ServiceFabricPropertiesFragment.to_json())

# convert the object into a dict
service_fabric_properties_fragment_dict = service_fabric_properties_fragment_instance.to_dict()
# create an instance of ServiceFabricPropertiesFragment from a dict
service_fabric_properties_fragment_from_dict = ServiceFabricPropertiesFragment.from_dict(service_fabric_properties_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


