# IntegrationAccountMapProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**changed_time** | **datetime** | The changed time. | [optional] [readonly] 
**content** | **object** | The content. | [optional] 
**content_link** | [**IntegrationAccountContentLink**](IntegrationAccountContentLink.md) |  | [optional] 
**content_type** | **str** | The content type. | [optional] 
**created_time** | **datetime** | The created time. | [optional] [readonly] 
**map_type** | [**MapType**](MapType.md) |  | [optional] 
**metadata** | **object** | The metadata. | [optional] 

## Example

```python
from openapi_client.models.integration_account_map_properties import IntegrationAccountMapProperties

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationAccountMapProperties from a JSON string
integration_account_map_properties_instance = IntegrationAccountMapProperties.from_json(json)
# print the JSON string representation of the object
print(IntegrationAccountMapProperties.to_json())

# convert the object into a dict
integration_account_map_properties_dict = integration_account_map_properties_instance.to_dict()
# create an instance of IntegrationAccountMapProperties from a dict
integration_account_map_properties_from_dict = IntegrationAccountMapProperties.from_dict(integration_account_map_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


