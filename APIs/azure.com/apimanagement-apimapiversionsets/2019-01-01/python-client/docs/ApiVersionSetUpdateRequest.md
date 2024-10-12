# ApiVersionSetUpdateRequest

Parameters to update or create an Api Version Set Contract.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ApiVersionSetUpdateRequestProperties**](ApiVersionSetUpdateRequestProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_version_set_update_request import ApiVersionSetUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiVersionSetUpdateRequest from a JSON string
api_version_set_update_request_instance = ApiVersionSetUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(ApiVersionSetUpdateRequest.to_json())

# convert the object into a dict
api_version_set_update_request_dict = api_version_set_update_request_instance.to_dict()
# create an instance of ApiVersionSetUpdateRequest from a dict
api_version_set_update_request_from_dict = ApiVersionSetUpdateRequest.from_dict(api_version_set_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


