# ListManualTriggersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**manual_triggers** | [**List[ManualTrigger]**](ManualTrigger.md) | The list of manual triggers. This list will be absent if empty. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to &#x60;ListManualTriggers&#x60; method to retrieve the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_manual_triggers_response import ListManualTriggersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListManualTriggersResponse from a JSON string
list_manual_triggers_response_instance = ListManualTriggersResponse.from_json(json)
# print the JSON string representation of the object
print(ListManualTriggersResponse.to_json())

# convert the object into a dict
list_manual_triggers_response_dict = list_manual_triggers_response_instance.to_dict()
# create an instance of ListManualTriggersResponse from a dict
list_manual_triggers_response_from_dict = ListManualTriggersResponse.from_dict(list_manual_triggers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


