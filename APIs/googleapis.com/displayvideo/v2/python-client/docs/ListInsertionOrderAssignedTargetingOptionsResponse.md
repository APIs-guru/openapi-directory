# ListInsertionOrderAssignedTargetingOptionsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigned_targeting_options** | [**List[AssignedTargetingOption]**](AssignedTargetingOption.md) | The list of assigned targeting options. This list will be absent if empty. | [optional] 
**next_page_token** | **str** | A token identifying the next page of results. This value should be specified as the pageToken in a subsequent ListInsertionOrderAssignedTargetingOptionsRequest to fetch the next page of results. This token will be absent if there are no more assigned_targeting_options to return. | [optional] 

## Example

```python
from openapi_client.models.list_insertion_order_assigned_targeting_options_response import ListInsertionOrderAssignedTargetingOptionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListInsertionOrderAssignedTargetingOptionsResponse from a JSON string
list_insertion_order_assigned_targeting_options_response_instance = ListInsertionOrderAssignedTargetingOptionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListInsertionOrderAssignedTargetingOptionsResponse.to_json())

# convert the object into a dict
list_insertion_order_assigned_targeting_options_response_dict = list_insertion_order_assigned_targeting_options_response_instance.to_dict()
# create an instance of ListInsertionOrderAssignedTargetingOptionsResponse from a dict
list_insertion_order_assigned_targeting_options_response_from_dict = ListInsertionOrderAssignedTargetingOptionsResponse.from_dict(list_insertion_order_assigned_targeting_options_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


