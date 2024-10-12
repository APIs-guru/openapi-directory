# NodeCountInformationGetDefaultResponse

Error response of an operation failure

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error code | [optional] 
**message** | **str** | Error message indicating why the operation failed. | [optional] 

## Example

```python
from openapi_client.models.node_count_information_get_default_response import NodeCountInformationGetDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of NodeCountInformationGetDefaultResponse from a JSON string
node_count_information_get_default_response_instance = NodeCountInformationGetDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(NodeCountInformationGetDefaultResponse.to_json())

# convert the object into a dict
node_count_information_get_default_response_dict = node_count_information_get_default_response_instance.to_dict()
# create an instance of NodeCountInformationGetDefaultResponse from a dict
node_count_information_get_default_response_from_dict = NodeCountInformationGetDefaultResponse.from_dict(node_count_information_get_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


