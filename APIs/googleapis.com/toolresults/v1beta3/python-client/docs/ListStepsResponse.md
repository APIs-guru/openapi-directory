# ListStepsResponse

Response message for StepService.List.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A continuation token to resume the query at the next item. If set, indicates that there are more steps to read, by calling list again with this value in the page_token field. | [optional] 
**steps** | [**List[Step]**](Step.md) | Steps. | [optional] 

## Example

```python
from openapi_client.models.list_steps_response import ListStepsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListStepsResponse from a JSON string
list_steps_response_instance = ListStepsResponse.from_json(json)
# print the JSON string representation of the object
print(ListStepsResponse.to_json())

# convert the object into a dict
list_steps_response_dict = list_steps_response_instance.to_dict()
# create an instance of ListStepsResponse from a dict
list_steps_response_from_dict = ListStepsResponse.from_dict(list_steps_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


