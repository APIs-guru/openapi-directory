# SalesforceConnectorProperties

The Salesforce connector properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**salesforcetables** | [**List[SalesforceTable]**](SalesforceTable.md) | The Salesforce tables. | 
**usersetting** | [**SalesforceDiscoverSetting**](SalesforceDiscoverSetting.md) |  | 

## Example

```python
from openapi_client.models.salesforce_connector_properties import SalesforceConnectorProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SalesforceConnectorProperties from a JSON string
salesforce_connector_properties_instance = SalesforceConnectorProperties.from_json(json)
# print the JSON string representation of the object
print(SalesforceConnectorProperties.to_json())

# convert the object into a dict
salesforce_connector_properties_dict = salesforce_connector_properties_instance.to_dict()
# create an instance of SalesforceConnectorProperties from a dict
salesforce_connector_properties_from_dict = SalesforceConnectorProperties.from_dict(salesforce_connector_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


