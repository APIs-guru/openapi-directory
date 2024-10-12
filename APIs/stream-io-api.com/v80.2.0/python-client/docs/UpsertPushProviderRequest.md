# UpsertPushProviderRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**push_provider** | [**PushProviderRequest**](PushProviderRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.upsert_push_provider_request import UpsertPushProviderRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpsertPushProviderRequest from a JSON string
upsert_push_provider_request_instance = UpsertPushProviderRequest.from_json(json)
# print the JSON string representation of the object
print(UpsertPushProviderRequest.to_json())

# convert the object into a dict
upsert_push_provider_request_dict = upsert_push_provider_request_instance.to_dict()
# create an instance of UpsertPushProviderRequest from a dict
upsert_push_provider_request_from_dict = UpsertPushProviderRequest.from_dict(upsert_push_provider_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


