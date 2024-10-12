# BulkEditLineItemAssignedTargetingOptionsRequest

Request message for BulkEditLineItemAssignedTargetingOptions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_requests** | [**List[CreateAssignedTargetingOptionsRequest]**](CreateAssignedTargetingOptionsRequest.md) | The assigned targeting options to create in batch, specified as a list of &#x60;CreateAssignedTargetingOptionsRequest&#x60;. | [optional] 
**delete_requests** | [**List[DeleteAssignedTargetingOptionsRequest]**](DeleteAssignedTargetingOptionsRequest.md) | The assigned targeting options to delete in batch, specified as a list of &#x60;DeleteAssignedTargetingOptionsRequest&#x60;. | [optional] 

## Example

```python
from openapi_client.models.bulk_edit_line_item_assigned_targeting_options_request import BulkEditLineItemAssignedTargetingOptionsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BulkEditLineItemAssignedTargetingOptionsRequest from a JSON string
bulk_edit_line_item_assigned_targeting_options_request_instance = BulkEditLineItemAssignedTargetingOptionsRequest.from_json(json)
# print the JSON string representation of the object
print(BulkEditLineItemAssignedTargetingOptionsRequest.to_json())

# convert the object into a dict
bulk_edit_line_item_assigned_targeting_options_request_dict = bulk_edit_line_item_assigned_targeting_options_request_instance.to_dict()
# create an instance of BulkEditLineItemAssignedTargetingOptionsRequest from a dict
bulk_edit_line_item_assigned_targeting_options_request_from_dict = BulkEditLineItemAssignedTargetingOptionsRequest.from_dict(bulk_edit_line_item_assigned_targeting_options_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


