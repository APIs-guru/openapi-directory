# ConnectorMetadataDetails

Details of the connector.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connector_display_name** | **str** | The Connector Display Name | [optional] 
**connector_id** | **str** | The Connector Id. | [optional] 

## Example

```python
from openapi_client.models.connector_metadata_details import ConnectorMetadataDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorMetadataDetails from a JSON string
connector_metadata_details_instance = ConnectorMetadataDetails.from_json(json)
# print the JSON string representation of the object
print(ConnectorMetadataDetails.to_json())

# convert the object into a dict
connector_metadata_details_dict = connector_metadata_details_instance.to_dict()
# create an instance of ConnectorMetadataDetails from a dict
connector_metadata_details_from_dict = ConnectorMetadataDetails.from_dict(connector_metadata_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


