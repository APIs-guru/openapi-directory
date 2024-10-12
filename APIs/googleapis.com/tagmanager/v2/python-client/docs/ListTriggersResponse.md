# ListTriggersResponse

List triggers response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Continuation token for fetching the next page of results. | [optional] 
**trigger** | [**List[Trigger]**](Trigger.md) | All GTM Triggers of a GTM Container. | [optional] 

## Example

```python
from openapi_client.models.list_triggers_response import ListTriggersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListTriggersResponse from a JSON string
list_triggers_response_instance = ListTriggersResponse.from_json(json)
# print the JSON string representation of the object
print(ListTriggersResponse.to_json())

# convert the object into a dict
list_triggers_response_dict = list_triggers_response_instance.to_dict()
# create an instance of ListTriggersResponse from a dict
list_triggers_response_from_dict = ListTriggersResponse.from_dict(list_triggers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


