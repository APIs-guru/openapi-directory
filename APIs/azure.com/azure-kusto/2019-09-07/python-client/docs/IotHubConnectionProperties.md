# IotHubConnectionProperties

Class representing the Kusto iot hub connection properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_group** | **str** | The iot hub consumer group. | 
**data_format** | [**DataFormat**](DataFormat.md) |  | [optional] 
**event_system_properties** | **List[str]** | System properties of the iot hub | [optional] 
**iot_hub_resource_id** | **str** | The resource ID of the Iot hub to be used to create a data connection. | 
**mapping_rule_name** | **str** | The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message. | [optional] 
**shared_access_policy_name** | **str** | The name of the share access policy name | 
**table_name** | **str** | The table where the data should be ingested. Optionally the table information can be added to each message. | [optional] 

## Example

```python
from openapi_client.models.iot_hub_connection_properties import IotHubConnectionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of IotHubConnectionProperties from a JSON string
iot_hub_connection_properties_instance = IotHubConnectionProperties.from_json(json)
# print the JSON string representation of the object
print(IotHubConnectionProperties.to_json())

# convert the object into a dict
iot_hub_connection_properties_dict = iot_hub_connection_properties_instance.to_dict()
# create an instance of IotHubConnectionProperties from a dict
iot_hub_connection_properties_from_dict = IotHubConnectionProperties.from_dict(iot_hub_connection_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


