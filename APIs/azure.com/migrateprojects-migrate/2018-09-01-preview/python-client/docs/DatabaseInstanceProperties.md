# DatabaseInstanceProperties

Properties of the database instance resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discovery_data** | [**List[DatabaseInstanceDiscoveryDetails]**](DatabaseInstanceDiscoveryDetails.md) | Gets or sets the assessment details of the database instance published by various sources. | [optional] 
**last_updated_time** | **datetime** | Gets or sets the time of the last modification of the database. | [optional] 
**summary** | [**Dict[str, DatabaseInstanceSummary]**](DatabaseInstanceSummary.md) | Gets or sets the database instances summary per solution. The key of dictionary is the solution name and value is the corresponding database instance summary object. | [optional] 

## Example

```python
from openapi_client.models.database_instance_properties import DatabaseInstanceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DatabaseInstanceProperties from a JSON string
database_instance_properties_instance = DatabaseInstanceProperties.from_json(json)
# print the JSON string representation of the object
print(DatabaseInstanceProperties.to_json())

# convert the object into a dict
database_instance_properties_dict = database_instance_properties_instance.to_dict()
# create an instance of DatabaseInstanceProperties from a dict
database_instance_properties_from_dict = DatabaseInstanceProperties.from_dict(database_instance_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


