# GetConnectorResourceResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ConnectorResource**](ConnectorResource.md) |  | 
**links** | [**Links**](Links.md) |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_connector_resource_response import GetConnectorResourceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetConnectorResourceResponse from a JSON string
get_connector_resource_response_instance = GetConnectorResourceResponse.from_json(json)
# print the JSON string representation of the object
print(GetConnectorResourceResponse.to_json())

# convert the object into a dict
get_connector_resource_response_dict = get_connector_resource_response_instance.to_dict()
# create an instance of GetConnectorResourceResponse from a dict
get_connector_resource_response_from_dict = GetConnectorResourceResponse.from_dict(get_connector_resource_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


