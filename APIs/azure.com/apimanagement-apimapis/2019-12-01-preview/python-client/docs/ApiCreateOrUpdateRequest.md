# ApiCreateOrUpdateRequest

API Create or Update Parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ApiCreateOrUpdateRequestProperties**](ApiCreateOrUpdateRequestProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_create_or_update_request import ApiCreateOrUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiCreateOrUpdateRequest from a JSON string
api_create_or_update_request_instance = ApiCreateOrUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(ApiCreateOrUpdateRequest.to_json())

# convert the object into a dict
api_create_or_update_request_dict = api_create_or_update_request_instance.to_dict()
# create an instance of ApiCreateOrUpdateRequest from a dict
api_create_or_update_request_from_dict = ApiCreateOrUpdateRequest.from_dict(api_create_or_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


