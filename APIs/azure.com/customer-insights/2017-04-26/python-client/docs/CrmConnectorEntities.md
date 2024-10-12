# CrmConnectorEntities

The CRM connector entities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The display name. | [optional] 
**is_profile** | **bool** | Indicating whether this is profile. | [optional] 
**logical_name** | **str** | The logical name. | 

## Example

```python
from openapi_client.models.crm_connector_entities import CrmConnectorEntities

# TODO update the JSON string below
json = "{}"
# create an instance of CrmConnectorEntities from a JSON string
crm_connector_entities_instance = CrmConnectorEntities.from_json(json)
# print the JSON string representation of the object
print(CrmConnectorEntities.to_json())

# convert the object into a dict
crm_connector_entities_dict = crm_connector_entities_instance.to_dict()
# create an instance of CrmConnectorEntities from a dict
crm_connector_entities_from_dict = CrmConnectorEntities.from_dict(crm_connector_entities_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


