# IntegrationAccountMap


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**IntegrationAccountMapProperties**](IntegrationAccountMapProperties.md) |  | [optional] 
**id** | **str** | The resource id. | [optional] 
**location** | **str** | The resource location. | [optional] 
**name** | **str** | The resource name. | [optional] 
**tags** | **Dict[str, str]** | The resource tags. | [optional] 
**type** | **str** | The resource type. | [optional] 

## Example

```python
from openapi_client.models.integration_account_map import IntegrationAccountMap

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationAccountMap from a JSON string
integration_account_map_instance = IntegrationAccountMap.from_json(json)
# print the JSON string representation of the object
print(IntegrationAccountMap.to_json())

# convert the object into a dict
integration_account_map_dict = integration_account_map_instance.to_dict()
# create an instance of IntegrationAccountMap from a dict
integration_account_map_from_dict = IntegrationAccountMap.from_dict(integration_account_map_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


