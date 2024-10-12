# ListConsumerOverridesResponse

Response message for ListConsumerOverrides.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token identifying which result to start with; returned by a previous list call. | [optional] 
**overrides** | [**List[QuotaOverride]**](QuotaOverride.md) | Consumer overrides on this limit. | [optional] 

## Example

```python
from openapi_client.models.list_consumer_overrides_response import ListConsumerOverridesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListConsumerOverridesResponse from a JSON string
list_consumer_overrides_response_instance = ListConsumerOverridesResponse.from_json(json)
# print the JSON string representation of the object
print(ListConsumerOverridesResponse.to_json())

# convert the object into a dict
list_consumer_overrides_response_dict = list_consumer_overrides_response_instance.to_dict()
# create an instance of ListConsumerOverridesResponse from a dict
list_consumer_overrides_response_from_dict = ListConsumerOverridesResponse.from_dict(list_consumer_overrides_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


