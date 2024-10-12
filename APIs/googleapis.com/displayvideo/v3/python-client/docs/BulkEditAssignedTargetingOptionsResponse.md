# BulkEditAssignedTargetingOptionsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[Status]**](Status.md) | The error information for each line item that failed to update. | [optional] 
**failed_line_item_ids** | **List[str]** | Output only. The IDs of the line items which failed. | [optional] [readonly] 
**updated_line_item_ids** | **List[str]** | Output only. The IDs of the line items which successfully updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.bulk_edit_assigned_targeting_options_response import BulkEditAssignedTargetingOptionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BulkEditAssignedTargetingOptionsResponse from a JSON string
bulk_edit_assigned_targeting_options_response_instance = BulkEditAssignedTargetingOptionsResponse.from_json(json)
# print the JSON string representation of the object
print(BulkEditAssignedTargetingOptionsResponse.to_json())

# convert the object into a dict
bulk_edit_assigned_targeting_options_response_dict = bulk_edit_assigned_targeting_options_response_instance.to_dict()
# create an instance of BulkEditAssignedTargetingOptionsResponse from a dict
bulk_edit_assigned_targeting_options_response_from_dict = BulkEditAssignedTargetingOptionsResponse.from_dict(bulk_edit_assigned_targeting_options_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


