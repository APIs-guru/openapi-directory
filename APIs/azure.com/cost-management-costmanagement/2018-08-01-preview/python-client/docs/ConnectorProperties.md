# ConnectorProperties

The properties of a Connector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collection** | [**ConnectorCollectionInfo**](ConnectorCollectionInfo.md) |  | [optional] 
**created_on** | **datetime** | Connector definition creation datetime | [optional] [readonly] 
**credentials_key** | **str** | Credentials authentication key (eg AWS ARN) | [optional] 
**credentials_secret** | **str** | Credentials secret (eg AWS ExternalId) | [optional] 
**display_name** | **str** | Connector DisplayName (defaults to Name) | [optional] 
**modified_on** | **datetime** | Connector last modified datetime | [optional] [readonly] 
**provider_account_id** | **str** | Connector providerAccountId (determined from credentials) | [optional] [readonly] 
**report_id** | **str** | Identifying source report. (For AWS this is a CUR report name, defined with Daily and with Resources) | [optional] 
**status** | **str** | Connector status | [optional] 

## Example

```python
from openapi_client.models.connector_properties import ConnectorProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectorProperties from a JSON string
connector_properties_instance = ConnectorProperties.from_json(json)
# print the JSON string representation of the object
print(ConnectorProperties.to_json())

# convert the object into a dict
connector_properties_dict = connector_properties_instance.to_dict()
# create an instance of ConnectorProperties from a dict
connector_properties_from_dict = ConnectorProperties.from_dict(connector_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


