# DeleteSharedLinkResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**UnifiedId**](UnifiedId.md) |  | 
**operation** | **str** | Operation performed | 
**resource** | **str** | Unified API resource name | 
**service** | **str** | Apideck ID of service provider | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.delete_shared_link_response import DeleteSharedLinkResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteSharedLinkResponse from a JSON string
delete_shared_link_response_instance = DeleteSharedLinkResponse.from_json(json)
# print the JSON string representation of the object
print(DeleteSharedLinkResponse.to_json())

# convert the object into a dict
delete_shared_link_response_dict = delete_shared_link_response_instance.to_dict()
# create an instance of DeleteSharedLinkResponse from a dict
delete_shared_link_response_from_dict = DeleteSharedLinkResponse.from_dict(delete_shared_link_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


