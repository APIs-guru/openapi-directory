# CustomMpiSettings

Custom MPI job settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command_line** | **str** | The command line to be executed by mpi runtime on each compute node. | 
**process_count** | **int** | Number of processes to launch for the job execution. The default value for this property is equal to nodeCount property | [optional] 

## Example

```python
from openapi_client.models.custom_mpi_settings import CustomMpiSettings

# TODO update the JSON string below
json = "{}"
# create an instance of CustomMpiSettings from a JSON string
custom_mpi_settings_instance = CustomMpiSettings.from_json(json)
# print the JSON string representation of the object
print(CustomMpiSettings.to_json())

# convert the object into a dict
custom_mpi_settings_dict = custom_mpi_settings_instance.to_dict()
# create an instance of CustomMpiSettings from a dict
custom_mpi_settings_from_dict = CustomMpiSettings.from_dict(custom_mpi_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


