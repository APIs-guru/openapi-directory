# Connector

The connect details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes_included** | **List[str]** | The attribute inclusion list of the connector. | [optional] 
**classes_included** | **List[str]** | The class inclusion list of the connector. | [optional] 
**connector_id** | **str** | The connector Id. | [optional] 
**description** | **str** | The connector description. | [optional] 
**id** | **str** | The connector Id. | [optional] 
**name** | **str** | The connector name. | [optional] 
**partitions** | [**List[Partition]**](Partition.md) | The partitions of the connector. | [optional] 
**password_hash_sync_configuration** | **object** | The password hash synchronization configuration of the connector. | [optional] 
**password_management_settings** | **object** | The password management settings of the connector. | [optional] 
**run_profiles** | [**List[RunProfile]**](RunProfile.md) | The run profiles of the connector. | [optional] 
**schema_xml** | **str** | The schema xml for the connector. | [optional] 
**time_created** | **datetime** | The date and time when this connector was created. | [optional] 
**time_last_modified** | **datetime** | The date and time when this connector was last modified. | [optional] 
**type** | **str** | The connector type. | [optional] 
**version** | **int** | The connector version | [optional] 

## Example

```python
from openapi_client.models.connector import Connector

# TODO update the JSON string below
json = "{}"
# create an instance of Connector from a JSON string
connector_instance = Connector.from_json(json)
# print the JSON string representation of the object
print(Connector.to_json())

# convert the object into a dict
connector_dict = connector_instance.to_dict()
# create an instance of Connector from a dict
connector_from_dict = Connector.from_dict(connector_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


