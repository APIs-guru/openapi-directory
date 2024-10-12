# GetConnectorResourceExampleResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**example_response** | **object** |  | [optional] 
**resource** | [**LinkedConnectorResource**](LinkedConnectorResource.md) |  | [optional] 
**service_id** | **str** | Service provider identifier | [optional] 
**unified_api** | [**UnifiedApiId**](UnifiedApiId.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_connector_resource_example_response_data import GetConnectorResourceExampleResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of GetConnectorResourceExampleResponseData from a JSON string
get_connector_resource_example_response_data_instance = GetConnectorResourceExampleResponseData.from_json(json)
# print the JSON string representation of the object
print(GetConnectorResourceExampleResponseData.to_json())

# convert the object into a dict
get_connector_resource_example_response_data_dict = get_connector_resource_example_response_data_instance.to_dict()
# create an instance of GetConnectorResourceExampleResponseData from a dict
get_connector_resource_example_response_data_from_dict = GetConnectorResourceExampleResponseData.from_dict(get_connector_resource_example_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


