# ApiUpdateRequest

API update contract details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ApiUpdateRequestProperties**](ApiUpdateRequestProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_update_request import ApiUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiUpdateRequest from a JSON string
api_update_request_instance = ApiUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(ApiUpdateRequest.to_json())

# convert the object into a dict
api_update_request_dict = api_update_request_instance.to_dict()
# create an instance of ApiUpdateRequest from a dict
api_update_request_from_dict = ApiUpdateRequest.from_dict(api_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


