# MonitoringDetails

Details needed to monitor a Hana Instance

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hana_db_name** | **str** | Name of the database itself. | [optional] 
**hana_db_password** | **str** | Password for the HANA database to login for monitoring | [optional] 
**hana_db_sql_port** | **int** | The port number of the tenant DB. Used to connect to the DB. | [optional] 
**hana_db_username** | **str** | Username for the HANA database to login to for monitoring | [optional] 
**hana_hostname** | **str** | Hostname of the HANA Instance blade. | [optional] 
**hana_subnet** | **str** | ARM ID of an Azure Subnet with access to the HANA instance. | [optional] 

## Example

```python
from openapi_client.models.monitoring_details import MonitoringDetails

# TODO update the JSON string below
json = "{}"
# create an instance of MonitoringDetails from a JSON string
monitoring_details_instance = MonitoringDetails.from_json(json)
# print the JSON string representation of the object
print(MonitoringDetails.to_json())

# convert the object into a dict
monitoring_details_dict = monitoring_details_instance.to_dict()
# create an instance of MonitoringDetails from a dict
monitoring_details_from_dict = MonitoringDetails.from_dict(monitoring_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


