# ListRestorePlansResponse

Response message for ListRestorePlans.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token which may be sent as page_token in a subsequent &#x60;ListRestorePlans&#x60; call to retrieve the next page of results. If this field is omitted or empty, then there are no more results to return. | [optional] 
**restore_plans** | [**List[RestorePlan]**](RestorePlan.md) | The list of RestorePlans matching the given criteria. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_restore_plans_response import ListRestorePlansResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListRestorePlansResponse from a JSON string
list_restore_plans_response_instance = ListRestorePlansResponse.from_json(json)
# print the JSON string representation of the object
print(ListRestorePlansResponse.to_json())

# convert the object into a dict
list_restore_plans_response_dict = list_restore_plans_response_instance.to_dict()
# create an instance of ListRestorePlansResponse from a dict
list_restore_plans_response_from_dict = ListRestorePlansResponse.from_dict(list_restore_plans_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


