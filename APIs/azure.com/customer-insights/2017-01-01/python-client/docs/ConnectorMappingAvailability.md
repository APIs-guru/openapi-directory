# ConnectorMappingAvailability

Connector mapping property availability.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**frequency** | **str** | The frequency to update. | [optional] 
**interval** | **int** | The interval of the given frequency to use. | 

## Example

```python
from openapi_client.models.connector_mapping_availability import ConnectorMappingAvailability

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorMappingAvailability from a JSON string
connector_mapping_availability_instance = ConnectorMappingAvailability.from_json(json)
# print the JSON string representation of the object
print(ConnectorMappingAvailability.to_json())

# convert the object into a dict
connector_mapping_availability_dict = connector_mapping_availability_instance.to_dict()
# create an instance of ConnectorMappingAvailability from a dict
connector_mapping_availability_from_dict = ConnectorMappingAvailability.from_dict(connector_mapping_availability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


