# MpiConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**process_count_per_node** | **int** | Number of processes per node. | [optional] 

## Example

```python
from openapi_client.models.mpi_configuration import MpiConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of MpiConfiguration from a JSON string
mpi_configuration_instance = MpiConfiguration.from_json(json)
# print the JSON string representation of the object
print(MpiConfiguration.to_json())

# convert the object into a dict
mpi_configuration_dict = mpi_configuration_instance.to_dict()
# create an instance of MpiConfiguration from a dict
mpi_configuration_from_dict = MpiConfiguration.from_dict(mpi_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


