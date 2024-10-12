# ContainerServiceListResult

The response from the List Container Services operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ContainerService]**](ContainerService.md) | the list of container services. | [optional] 

## Example

```python
from openapi_client.models.container_service_list_result import ContainerServiceListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerServiceListResult from a JSON string
container_service_list_result_instance = ContainerServiceListResult.from_json(json)
# print the JSON string representation of the object
print(ContainerServiceListResult.to_json())

# convert the object into a dict
container_service_list_result_dict = container_service_list_result_instance.to_dict()
# create an instance of ContainerServiceListResult from a dict
container_service_list_result_from_dict = ContainerServiceListResult.from_dict(container_service_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


