# ProcessDetails

Describes process metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command_line** | **str** | Process command line. | [optional] 
**company_name** | **str** | Name of company that created the process executable. | [optional] 
**description** | **str** | Process description. | [optional] 
**executable_path** | **str** | Process executable path. | [optional] 
**file_version** | **str** | File version. | [optional] 
**first_pid** | **int** | The Operating System Process Identifier (PID) of the first process in this process pool. | [optional] 
**internal_name** | **str** | Internal process name. | [optional] 
**persistent_key** | **str** | A unique identifier for a process, generally resilient to process restart, computed by Service Map. | [optional] 
**pool_id** | **int** | Represents the identity of the process pool assigned to the process by Dependency Agent. | [optional] 
**product_name** | **str** | Product name. | [optional] 
**product_version** | **str** | Product version. | [optional] 
**services** | [**List[ProcessHostedService]**](ProcessHostedService.md) | Collection of services hosted by this Process (Windows only). | [optional] 
**working_directory** | **str** | Process workingDirectory. | [optional] 
**zone_name** | **str** | Process zone name (Linux only). | [optional] 

## Example

```python
from openapi_client.models.process_details import ProcessDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ProcessDetails from a JSON string
process_details_instance = ProcessDetails.from_json(json)
# print the JSON string representation of the object
print(ProcessDetails.to_json())

# convert the object into a dict
process_details_dict = process_details_instance.to_dict()
# create an instance of ProcessDetails from a dict
process_details_from_dict = ProcessDetails.from_dict(process_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


