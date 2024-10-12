# ServiceRunner

A container for a managed identity to execute DevTest lab services.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**IdentityProperties**](IdentityProperties.md) |  | [optional] 
**id** | **str** | The identifier of the resource. | [optional] [readonly] 
**location** | **str** | The location of the resource. | [optional] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The tags of the resource. | [optional] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.service_runner import ServiceRunner

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceRunner from a JSON string
service_runner_instance = ServiceRunner.from_json(json)
# print the JSON string representation of the object
print(ServiceRunner.to_json())

# convert the object into a dict
service_runner_dict = service_runner_instance.to_dict()
# create an instance of ServiceRunner from a dict
service_runner_from_dict = ServiceRunner.from_dict(service_runner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


