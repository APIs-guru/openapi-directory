# Resources

The system resources for the pipeline run. At least one zone or region must be specified or the pipeline run will fail.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**project_id** | **str** | The project ID to allocate resources in. | [optional] 
**regions** | **List[str]** | The list of regions allowed for VM allocation. If set, the &#x60;zones&#x60; field must not be set. | [optional] 
**virtual_machine** | [**VirtualMachine**](VirtualMachine.md) |  | [optional] 
**zones** | **List[str]** | The list of zones allowed for VM allocation. If set, the &#x60;regions&#x60; field must not be set. | [optional] 

## Example

```python
from openapi_client.models.resources import Resources

# TODO update the JSON string below
json = "{}"
# create an instance of Resources from a JSON string
resources_instance = Resources.from_json(json)
# print the JSON string representation of the object
print(Resources.to_json())

# convert the object into a dict
resources_dict = resources_instance.to_dict()
# create an instance of Resources from a dict
resources_from_dict = Resources.from_dict(resources_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


