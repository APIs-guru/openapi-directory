# IntegrationOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | 
**id** | **str** |  | 
**name** | **str** |  | 
**updated_at** | **datetime** |  | 

## Example

```python
from openapi_client.models.integration_out import IntegrationOut

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationOut from a JSON string
integration_out_instance = IntegrationOut.from_json(json)
# print the JSON string representation of the object
print(IntegrationOut.to_json())

# convert the object into a dict
integration_out_dict = integration_out_instance.to_dict()
# create an instance of IntegrationOut from a dict
integration_out_from_dict = IntegrationOut.from_dict(integration_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


