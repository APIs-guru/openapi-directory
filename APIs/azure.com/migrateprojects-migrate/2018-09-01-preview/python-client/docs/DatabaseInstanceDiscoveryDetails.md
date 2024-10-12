# DatabaseInstanceDiscoveryDetails

Discovery properties that can be shared by various publishers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enqueue_time** | **str** | Gets or sets the time the message was enqueued. | [optional] 
**extended_info** | **Dict[str, str]** | Gets or sets the extended properties of the database server. | [optional] 
**host_name** | **str** | Gets or sets the host name of the database server. | [optional] 
**instance_id** | **str** | Gets or sets the database instance Id. | [optional] 
**instance_name** | **str** | Gets or sets the database instance name. | [optional] 
**instance_type** | **str** | Gets or sets the database instance type. | [optional] 
**instance_version** | **str** | Gets or sets the database instance version. | [optional] 
**ip_address** | **str** | Gets or sets the IP addresses of the database server. IP addresses could be IP V4 or IP V6. | [optional] 
**last_updated_time** | **datetime** | Gets or sets the time of the last modification of the database instance details. | [optional] 
**port_number** | **int** | Gets or sets the port number of the database server. | [optional] 
**solution_name** | **str** | Gets or sets the name of the solution that sent the data. | [optional] 

## Example

```python
from openapi_client.models.database_instance_discovery_details import DatabaseInstanceDiscoveryDetails

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseInstanceDiscoveryDetails from a JSON string
database_instance_discovery_details_instance = DatabaseInstanceDiscoveryDetails.from_json(json)
# print the JSON string representation of the object
print(DatabaseInstanceDiscoveryDetails.to_json())

# convert the object into a dict
database_instance_discovery_details_dict = database_instance_discovery_details_instance.to_dict()
# create an instance of DatabaseInstanceDiscoveryDetails from a dict
database_instance_discovery_details_from_dict = DatabaseInstanceDiscoveryDetails.from_dict(database_instance_discovery_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


