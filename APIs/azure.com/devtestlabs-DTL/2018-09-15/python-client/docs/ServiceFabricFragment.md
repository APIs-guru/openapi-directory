# ServiceFabricFragment

A Service Fabric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ServiceFabricPropertiesFragment**](ServiceFabricPropertiesFragment.md) |  | [optional] 
**tags** | **Dict[str, str]** | The tags of the resource. | [optional] 

## Example

```python
from openapi_client.models.service_fabric_fragment import ServiceFabricFragment

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceFabricFragment from a JSON string
service_fabric_fragment_instance = ServiceFabricFragment.from_json(json)
# print the JSON string representation of the object
print(ServiceFabricFragment.to_json())

# convert the object into a dict
service_fabric_fragment_dict = service_fabric_fragment_instance.to_dict()
# create an instance of ServiceFabricFragment from a dict
service_fabric_fragment_from_dict = ServiceFabricFragment.from_dict(service_fabric_fragment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


