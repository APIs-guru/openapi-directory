# ServiceConfiguration

The service configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_account** | **str** | The service account. | [optional] 
**service_type** | **int** | The service type of the server. | [optional] 
**sql_database_name** | **str** | The SQL database. | [optional] 
**sql_database_size** | **int** | The SQL database size. | [optional] 
**sql_edition** | **str** | The SQL edition | [optional] 
**sql_instance** | **str** | The SQL instance details. | [optional] 
**sql_server** | **str** | The SQL server information. | [optional] 
**sql_version** | **str** | The SQL version. | [optional] 
**version** | **str** | The version of the sync service. | [optional] 

## Example

```python
from openapi_client.models.service_configuration import ServiceConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceConfiguration from a JSON string
service_configuration_instance = ServiceConfiguration.from_json(json)
# print the JSON string representation of the object
print(ServiceConfiguration.to_json())

# convert the object into a dict
service_configuration_dict = service_configuration_instance.to_dict()
# create an instance of ServiceConfiguration from a dict
service_configuration_from_dict = ServiceConfiguration.from_dict(service_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


