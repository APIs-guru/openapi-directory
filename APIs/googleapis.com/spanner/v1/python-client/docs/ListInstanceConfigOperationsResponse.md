# ListInstanceConfigOperationsResponse

The response for ListInstanceConfigOperations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | &#x60;next_page_token&#x60; can be sent in a subsequent ListInstanceConfigOperations call to fetch more of the matching metadata. | [optional] 
**operations** | [**List[Operation]**](Operation.md) | The list of matching instance config long-running operations. Each operation&#39;s name will be prefixed by the instance config&#39;s name. The operation&#39;s metadata field type &#x60;metadata.type_url&#x60; describes the type of the metadata. | [optional] 

## Example

```python
from openapi_client.models.list_instance_config_operations_response import ListInstanceConfigOperationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListInstanceConfigOperationsResponse from a JSON string
list_instance_config_operations_response_instance = ListInstanceConfigOperationsResponse.from_json(json)
# print the JSON string representation of the object
print(ListInstanceConfigOperationsResponse.to_json())

# convert the object into a dict
list_instance_config_operations_response_dict = list_instance_config_operations_response_instance.to_dict()
# create an instance of ListInstanceConfigOperationsResponse from a dict
list_instance_config_operations_response_from_dict = ListInstanceConfigOperationsResponse.from_dict(list_instance_config_operations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


