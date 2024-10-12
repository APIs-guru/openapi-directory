# BulkEditAdvertiserAssignedTargetingOptionsRequest

Request message for BulkEditAdvertiserAssignedTargetingOptions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_requests** | [**List[CreateAssignedTargetingOptionsRequest]**](CreateAssignedTargetingOptionsRequest.md) | The assigned targeting options to create in batch, specified as a list of &#x60;CreateAssignedTargetingOptionsRequest&#x60;. Supported targeting types: * &#x60;TARGETING_TYPE_CHANNEL&#x60; * &#x60;TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION&#x60; * &#x60;TARGETING_TYPE_OMID&#x60; * &#x60;TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION&#x60; | [optional] 
**delete_requests** | [**List[DeleteAssignedTargetingOptionsRequest]**](DeleteAssignedTargetingOptionsRequest.md) | The assigned targeting options to delete in batch, specified as a list of &#x60;DeleteAssignedTargetingOptionsRequest&#x60;. Supported targeting types: * &#x60;TARGETING_TYPE_CHANNEL&#x60; * &#x60;TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION&#x60; * &#x60;TARGETING_TYPE_OMID&#x60; * &#x60;TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION&#x60; | [optional] 

## Example

```python
from openapi_client.models.bulk_edit_advertiser_assigned_targeting_options_request import BulkEditAdvertiserAssignedTargetingOptionsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BulkEditAdvertiserAssignedTargetingOptionsRequest from a JSON string
bulk_edit_advertiser_assigned_targeting_options_request_instance = BulkEditAdvertiserAssignedTargetingOptionsRequest.from_json(json)
# print the JSON string representation of the object
print(BulkEditAdvertiserAssignedTargetingOptionsRequest.to_json())

# convert the object into a dict
bulk_edit_advertiser_assigned_targeting_options_request_dict = bulk_edit_advertiser_assigned_targeting_options_request_instance.to_dict()
# create an instance of BulkEditAdvertiserAssignedTargetingOptionsRequest from a dict
bulk_edit_advertiser_assigned_targeting_options_request_from_dict = BulkEditAdvertiserAssignedTargetingOptionsRequest.from_dict(bulk_edit_advertiser_assigned_targeting_options_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


