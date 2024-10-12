# CrmConnectorProperties

The CRM connector properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** | The access token. | [optional] 
**connection_string** | **str** | The connection string. | [optional] 
**entities** | [**List[CrmConnectorEntities]**](CrmConnectorEntities.md) | The entities like account, contact, opportunity. | 
**organization_id** | **str** | The organization ID. | 
**organization_url** | **str** | The organization URL. | 

## Example

```python
from openapi_client.models.crm_connector_properties import CrmConnectorProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CrmConnectorProperties from a JSON string
crm_connector_properties_instance = CrmConnectorProperties.from_json(json)
# print the JSON string representation of the object
print(CrmConnectorProperties.to_json())

# convert the object into a dict
crm_connector_properties_dict = crm_connector_properties_instance.to_dict()
# create an instance of CrmConnectorProperties from a dict
crm_connector_properties_from_dict = CrmConnectorProperties.from_dict(crm_connector_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


