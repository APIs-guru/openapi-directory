# RerunTriggerListResponse

A list of rerun triggers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The continuation token for getting the next page of results, if any remaining results exist, null otherwise. | [optional] [readonly] 
**value** | [**List[RerunTriggerResource]**](RerunTriggerResource.md) | List of rerun triggers. | 

## Example

```python
from openapi_client.models.rerun_trigger_list_response import RerunTriggerListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RerunTriggerListResponse from a JSON string
rerun_trigger_list_response_instance = RerunTriggerListResponse.from_json(json)
# print the JSON string representation of the object
print(RerunTriggerListResponse.to_json())

# convert the object into a dict
rerun_trigger_list_response_dict = rerun_trigger_list_response_instance.to_dict()
# create an instance of RerunTriggerListResponse from a dict
rerun_trigger_list_response_from_dict = RerunTriggerListResponse.from_dict(rerun_trigger_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


