# DeleteLocationResponse


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
from openapi_client.models.delete_location_response import DeleteLocationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteLocationResponse from a JSON string
delete_location_response_instance = DeleteLocationResponse.from_json(json)
# print the JSON string representation of the object
print(DeleteLocationResponse.to_json())

# convert the object into a dict
delete_location_response_dict = delete_location_response_instance.to_dict()
# create an instance of DeleteLocationResponse from a dict
delete_location_response_from_dict = DeleteLocationResponse.from_dict(delete_location_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


