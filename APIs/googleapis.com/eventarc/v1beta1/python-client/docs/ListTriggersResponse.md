# ListTriggersResponse

The response message for the ListTriggers method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A page token that can be sent to ListTriggers to request the next page. If this is empty, then there are no more pages. | [optional] 
**triggers** | [**List[Trigger]**](Trigger.md) | The requested triggers, up to the number specified in &#x60;page_size&#x60;. | [optional] 
**unreachable** | **List[str]** | Unreachable resources, if any. | [optional] 

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


