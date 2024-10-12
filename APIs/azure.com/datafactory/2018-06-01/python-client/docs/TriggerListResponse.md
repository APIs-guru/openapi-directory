# TriggerListResponse

A list of trigger resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link to the next page of results, if any remaining results exist. | [optional] 
**value** | [**List[TriggerResource]**](TriggerResource.md) | List of triggers. | 

## Example

```python
from openapi_client.models.trigger_list_response import TriggerListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of TriggerListResponse from a JSON string
trigger_list_response_instance = TriggerListResponse.from_json(json)
# print the JSON string representation of the object
print(TriggerListResponse.to_json())

# convert the object into a dict
trigger_list_response_dict = trigger_list_response_instance.to_dict()
# create an instance of TriggerListResponse from a dict
trigger_list_response_from_dict = TriggerListResponse.from_dict(trigger_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


