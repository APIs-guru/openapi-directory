# BulkEditAdvertiserAssignedTargetingOptionsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_assigned_targeting_options** | [**List[AssignedTargetingOption]**](AssignedTargetingOption.md) | The list of assigned targeting options that have been successfully created. This list will be absent if empty. | [optional] 

## Example

```python
from openapi_client.models.bulk_edit_advertiser_assigned_targeting_options_response import BulkEditAdvertiserAssignedTargetingOptionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BulkEditAdvertiserAssignedTargetingOptionsResponse from a JSON string
bulk_edit_advertiser_assigned_targeting_options_response_instance = BulkEditAdvertiserAssignedTargetingOptionsResponse.from_json(json)
# print the JSON string representation of the object
print(BulkEditAdvertiserAssignedTargetingOptionsResponse.to_json())

# convert the object into a dict
bulk_edit_advertiser_assigned_targeting_options_response_dict = bulk_edit_advertiser_assigned_targeting_options_response_instance.to_dict()
# create an instance of BulkEditAdvertiserAssignedTargetingOptionsResponse from a dict
bulk_edit_advertiser_assigned_targeting_options_response_from_dict = BulkEditAdvertiserAssignedTargetingOptionsResponse.from_dict(bulk_edit_advertiser_assigned_targeting_options_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


