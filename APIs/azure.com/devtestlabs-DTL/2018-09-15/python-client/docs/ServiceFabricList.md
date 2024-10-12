# ServiceFabricList

The response of a list operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next set of results. | [optional] 
**value** | [**List[ServiceFabric]**](ServiceFabric.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.service_fabric_list import ServiceFabricList

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceFabricList from a JSON string
service_fabric_list_instance = ServiceFabricList.from_json(json)
# print the JSON string representation of the object
print(ServiceFabricList.to_json())

# convert the object into a dict
service_fabric_list_dict = service_fabric_list_instance.to_dict()
# create an instance of ServiceFabricList from a dict
service_fabric_list_from_dict = ServiceFabricList.from_dict(service_fabric_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


