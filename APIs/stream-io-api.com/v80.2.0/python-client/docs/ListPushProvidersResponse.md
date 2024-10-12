# ListPushProvidersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | Duration of the request in human-readable format | 
**push_providers** | [**List[PushProvider]**](PushProvider.md) |  | 

## Example

```python
from openapi_client.models.list_push_providers_response import ListPushProvidersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListPushProvidersResponse from a JSON string
list_push_providers_response_instance = ListPushProvidersResponse.from_json(json)
# print the JSON string representation of the object
print(ListPushProvidersResponse.to_json())

# convert the object into a dict
list_push_providers_response_dict = list_push_providers_response_instance.to_dict()
# create an instance of ListPushProvidersResponse from a dict
list_push_providers_response_from_dict = ListPushProvidersResponse.from_dict(list_push_providers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


