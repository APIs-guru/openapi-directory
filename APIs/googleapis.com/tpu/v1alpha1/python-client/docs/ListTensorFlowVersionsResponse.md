# ListTensorFlowVersionsResponse

Response for ListTensorFlowVersions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The next page token or empty if none. | [optional] 
**tensorflow_versions** | [**List[TensorFlowVersion]**](TensorFlowVersion.md) | The listed nodes. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_tensor_flow_versions_response import ListTensorFlowVersionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListTensorFlowVersionsResponse from a JSON string
list_tensor_flow_versions_response_instance = ListTensorFlowVersionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListTensorFlowVersionsResponse.to_json())

# convert the object into a dict
list_tensor_flow_versions_response_dict = list_tensor_flow_versions_response_instance.to_dict()
# create an instance of ListTensorFlowVersionsResponse from a dict
list_tensor_flow_versions_response_from_dict = ListTensorFlowVersionsResponse.from_dict(list_tensor_flow_versions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


