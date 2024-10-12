# RunConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arguments** | **List[str]** | Command line arguments for the python script file. | [optional] 
**communicator** | **str** | The supported communicators are None, ParameterServer, OpenMpi, and IntelMpi Keep in mind that OpenMpi requires a custom image with OpenMpi installed.  Use ParameterServer or OpenMpi for AmlCompute clusters. Use IntelMpi for distributed training jobs. | [optional] 
**data_references** | [**Dict[str, DataReferenceConfiguration]**](DataReferenceConfiguration.md) | All the data sources are made available to the run during execution based on each configuration. | [optional] 
**environment** | [**EnvironmentDefinition**](EnvironmentDefinition.md) |  | [optional] 
**framework** | **str** | The supported frameworks are Python, PySpark, CNTK, TensorFlow, and PyTorch. Use Tensorflow for AmlCompute clusters, and Python for distributed training jobs. | [optional] 
**hdi** | [**HdiConfiguration**](HdiConfiguration.md) |  | [optional] 
**history** | [**HistoryConfiguration**](HistoryConfiguration.md) |  | [optional] 
**job_name** | **str** | This is primarily intended for notebooks to override the default job name.  Defaults to ArgumentVector[0] if not specified. | [optional] 
**max_run_duration_seconds** | **int** | Maximum allowed time for the run. The system will attempt to automatically cancel the run if it took longer than this value.  MaxRunDurationSeconds&#x3D;null means infinite duration. | [optional] 
**mpi** | [**MpiConfiguration**](MpiConfiguration.md) |  | [optional] 
**node_count** | **int** | Number of compute nodes to run the job on. Only applies to AMLCompute. | [optional] 
**script** | **str** | The relative path to the python script file. The file path is relative to the source_directory passed to submit run. | [optional] 
**spark** | [**SparkConfiguration**](SparkConfiguration.md) |  | [optional] 
**target** | **str** | Target refers to compute where the job is scheduled for execution. The default target is \&quot;local\&quot; referring to the local machine. | [optional] 
**tensorflow** | [**TensorflowConfiguration**](TensorflowConfiguration.md) |  | [optional] 

## Example

```python
from openapi_client.models.run_configuration import RunConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of RunConfiguration from a JSON string
run_configuration_instance = RunConfiguration.from_json(json)
# print the JSON string representation of the object
print(RunConfiguration.to_json())

# convert the object into a dict
run_configuration_dict = run_configuration_instance.to_dict()
# create an instance of RunConfiguration from a dict
run_configuration_from_dict = RunConfiguration.from_dict(run_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


