# GetConnectorResourceExampleResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**GetConnectorResourceExampleResponseData**](GetConnectorResourceExampleResponseData.md) |  | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_connector_resource_example_response import GetConnectorResourceExampleResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetConnectorResourceExampleResponse from a JSON string
get_connector_resource_example_response_instance = GetConnectorResourceExampleResponse.from_json(json)
# print the JSON string representation of the object
print(GetConnectorResourceExampleResponse.to_json())

# convert the object into a dict
get_connector_resource_example_response_dict = get_connector_resource_example_response_instance.to_dict()
# create an instance of GetConnectorResourceExampleResponse from a dict
get_connector_resource_example_response_from_dict = GetConnectorResourceExampleResponse.from_dict(get_connector_resource_example_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


