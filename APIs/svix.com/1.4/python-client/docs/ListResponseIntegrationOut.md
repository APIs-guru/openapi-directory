# ListResponseIntegrationOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[IntegrationOut]**](IntegrationOut.md) |  | 
**done** | **bool** |  | 
**iterator** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.list_response_integration_out import ListResponseIntegrationOut

# TODO update the JSON string below
json = "{}"
# create an instance of ListResponseIntegrationOut from a JSON string
list_response_integration_out_instance = ListResponseIntegrationOut.from_json(json)
# print the JSON string representation of the object
print(ListResponseIntegrationOut.to_json())

# convert the object into a dict
list_response_integration_out_dict = list_response_integration_out_instance.to_dict()
# create an instance of ListResponseIntegrationOut from a dict
list_response_integration_out_from_dict = ListResponseIntegrationOut.from_dict(list_response_integration_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


