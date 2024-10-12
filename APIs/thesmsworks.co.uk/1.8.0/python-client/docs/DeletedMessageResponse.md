# DeletedMessageResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messageid** | **str** |  | 
**status** | **str** |  | 

## Example

```python
from openapi_client.models.deleted_message_response import DeletedMessageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeletedMessageResponse from a JSON string
deleted_message_response_instance = DeletedMessageResponse.from_json(json)
# print the JSON string representation of the object
print(DeletedMessageResponse.to_json())

# convert the object into a dict
deleted_message_response_dict = deleted_message_response_instance.to_dict()
# create an instance of DeletedMessageResponse from a dict
deleted_message_response_from_dict = DeletedMessageResponse.from_dict(deleted_message_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


