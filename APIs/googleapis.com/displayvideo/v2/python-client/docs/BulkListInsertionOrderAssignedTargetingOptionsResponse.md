# BulkListInsertionOrderAssignedTargetingOptionsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigned_targeting_options** | [**List[AssignedTargetingOption]**](AssignedTargetingOption.md) | The list of assigned targeting options. This list will be absent if empty. | [optional] 
**next_page_token** | **str** | A token identifying the next page of results. This value should be specified as the pageToken in a subsequent BulkListInsertionOrderAssignedTargetingOptionsRequest to fetch the next page of results. This token will be absent if there are no more assigned_targeting_options to return. | [optional] 

## Example

```python
from openapi_client.models.bulk_list_insertion_order_assigned_targeting_options_response import BulkListInsertionOrderAssignedTargetingOptionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BulkListInsertionOrderAssignedTargetingOptionsResponse from a JSON string
bulk_list_insertion_order_assigned_targeting_options_response_instance = BulkListInsertionOrderAssignedTargetingOptionsResponse.from_json(json)
# print the JSON string representation of the object
print(BulkListInsertionOrderAssignedTargetingOptionsResponse.to_json())

# convert the object into a dict
bulk_list_insertion_order_assigned_targeting_options_response_dict = bulk_list_insertion_order_assigned_targeting_options_response_instance.to_dict()
# create an instance of BulkListInsertionOrderAssignedTargetingOptionsResponse from a dict
bulk_list_insertion_order_assigned_targeting_options_response_from_dict = BulkListInsertionOrderAssignedTargetingOptionsResponse.from_dict(bulk_list_insertion_order_assigned_targeting_options_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


