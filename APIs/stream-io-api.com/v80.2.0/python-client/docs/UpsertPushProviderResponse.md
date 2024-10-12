# UpsertPushProviderResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | Duration of the request in human-readable format | 
**push_provider** | [**PushProvider**](PushProvider.md) |  | 

## Example

```python
from openapi_client.models.upsert_push_provider_response import UpsertPushProviderResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpsertPushProviderResponse from a JSON string
upsert_push_provider_response_instance = UpsertPushProviderResponse.from_json(json)
# print the JSON string representation of the object
print(UpsertPushProviderResponse.to_json())

# convert the object into a dict
upsert_push_provider_response_dict = upsert_push_provider_response_instance.to_dict()
# create an instance of UpsertPushProviderResponse from a dict
upsert_push_provider_response_from_dict = UpsertPushProviderResponse.from_dict(upsert_push_provider_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


