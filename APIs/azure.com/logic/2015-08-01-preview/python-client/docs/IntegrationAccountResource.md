# IntegrationAccountResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The resource id. | [optional] 
**location** | **str** | The resource location. | [optional] 
**name** | **str** | The resource name. | [optional] 
**tags** | **Dict[str, str]** | The resource tags. | [optional] 
**type** | **str** | The resource type. | [optional] 

## Example

```python
from openapi_client.models.integration_account_resource import IntegrationAccountResource

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationAccountResource from a JSON string
integration_account_resource_instance = IntegrationAccountResource.from_json(json)
# print the JSON string representation of the object
print(IntegrationAccountResource.to_json())

# convert the object into a dict
integration_account_resource_dict = integration_account_resource_instance.to_dict()
# create an instance of IntegrationAccountResource from a dict
integration_account_resource_from_dict = IntegrationAccountResource.from_dict(integration_account_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


