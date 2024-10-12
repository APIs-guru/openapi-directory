# CopyMessagePost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | [default to True]
**result** | [**MessageId**](MessageId.md) |  | 

## Example

```python
from openapi_client.models.copy_message_post200_response import CopyMessagePost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CopyMessagePost200Response from a JSON string
copy_message_post200_response_instance = CopyMessagePost200Response.from_json(json)
# print the JSON string representation of the object
print(CopyMessagePost200Response.to_json())

# convert the object into a dict
copy_message_post200_response_dict = copy_message_post200_response_instance.to_dict()
# create an instance of CopyMessagePost200Response from a dict
copy_message_post200_response_from_dict = CopyMessagePost200Response.from_dict(copy_message_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


