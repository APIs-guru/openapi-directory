# BulkEditAssignedTargetingOptionsRequest

Request message for BulkEditLineItemsAssignedTargetingOptions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_requests** | [**List[CreateAssignedTargetingOptionsRequest]**](CreateAssignedTargetingOptionsRequest.md) | The assigned targeting options to create in batch, specified as a list of CreateAssignedTargetingOptionsRequest. Supported targeting types include: * &#x60;TARGETING_TYPE_AGE_RANGE&#x60; * &#x60;TARGETING_TYPE_APP&#x60; * &#x60;TARGETING_TYPE_APP_CATEGORY&#x60; * &#x60;TARGETING_TYPE_AUDIENCE_GROUP&#x60; * &#x60;TARGETING_TYPE_AUDIO_CONTENT_TYPE&#x60; * &#x60;TARGETING_TYPE_AUTHORIZED_SELLER_STATUS&#x60; * &#x60;TARGETING_TYPE_BROWSER&#x60; * &#x60;TARGETING_TYPE_BUSINESS_CHAIN&#x60; * &#x60;TARGETING_TYPE_CARRIER_AND_ISP&#x60; * &#x60;TARGETING_TYPE_CATEGORY&#x60; * &#x60;TARGETING_TYPE_CHANNEL&#x60; * &#x60;TARGETING_TYPE_CONTENT_DURATION&#x60; * &#x60;TARGETING_TYPE_CONTENT_GENRE&#x60; * &#x60;TARGETING_TYPE_CONTENT_INSTREAM_POSITION&#x60; * &#x60;TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION&#x60; * &#x60;TARGETING_TYPE_CONTENT_STREAM_TYPE&#x60; * &#x60;TARGETING_TYPE_DAY_AND_TIME&#x60; * &#x60;TARGETING_TYPE_DEVICE_MAKE_MODEL&#x60; * &#x60;TARGETING_TYPE_DEVICE_TYPE&#x60; * &#x60;TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION&#x60; * &#x60;TARGETING_TYPE_ENVIRONMENT&#x60; * &#x60;TARGETING_TYPE_EXCHANGE&#x60; * &#x60;TARGETING_TYPE_GENDER&#x60; * &#x60;TARGETING_TYPE_GEO_REGION&#x60; * &#x60;TARGETING_TYPE_HOUSEHOLD_INCOME&#x60; * &#x60;TARGETING_TYPE_INVENTORY_SOURCE&#x60; * &#x60;TARGETING_TYPE_INVENTORY_SOURCE_GROUP&#x60; * &#x60;TARGETING_TYPE_KEYWORD&#x60; * &#x60;TARGETING_TYPE_LANGUAGE&#x60; * &#x60;TARGETING_TYPE_NATIVE_CONTENT_POSITION&#x60; * &#x60;TARGETING_TYPE_NEGATIVE_KEYWORD_LIST&#x60; * &#x60;TARGETING_TYPE_OMID&#x60; * &#x60;TARGETING_TYPE_ON_SCREEN_POSITION&#x60; * &#x60;TARGETING_TYPE_OPERATING_SYSTEM&#x60; * &#x60;TARGETING_TYPE_PARENTAL_STATUS&#x60; * &#x60;TARGETING_TYPE_POI&#x60; * &#x60;TARGETING_TYPE_PROXIMITY_LOCATION_LIST&#x60; * &#x60;TARGETING_TYPE_REGIONAL_LOCATION_LIST&#x60; * &#x60;TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION&#x60; * &#x60;TARGETING_TYPE_SUB_EXCHANGE&#x60; * &#x60;TARGETING_TYPE_THIRD_PARTY_VERIFIER&#x60; * &#x60;TARGETING_TYPE_URL&#x60; * &#x60;TARGETING_TYPE_USER_REWARDED_CONTENT&#x60; * &#x60;TARGETING_TYPE_VIDEO_PLAYER_SIZE&#x60; * &#x60;TARGETING_TYPE_VIEWABILITY&#x60; | [optional] 
**delete_requests** | [**List[DeleteAssignedTargetingOptionsRequest]**](DeleteAssignedTargetingOptionsRequest.md) | The assigned targeting options to delete in batch, specified as a list of DeleteAssignedTargetingOptionsRequest. Supported targeting types include: * &#x60;TARGETING_TYPE_AGE_RANGE&#x60; * &#x60;TARGETING_TYPE_APP&#x60; * &#x60;TARGETING_TYPE_APP_CATEGORY&#x60; * &#x60;TARGETING_TYPE_AUDIENCE_GROUP&#x60; * &#x60;TARGETING_TYPE_AUDIO_CONTENT_TYPE&#x60; * &#x60;TARGETING_TYPE_AUTHORIZED_SELLER_STATUS&#x60; * &#x60;TARGETING_TYPE_BROWSER&#x60; * &#x60;TARGETING_TYPE_BUSINESS_CHAIN&#x60; * &#x60;TARGETING_TYPE_CARRIER_AND_ISP&#x60; * &#x60;TARGETING_TYPE_CATEGORY&#x60; * &#x60;TARGETING_TYPE_CHANNEL&#x60; * &#x60;TARGETING_TYPE_CONTENT_DURATION&#x60; * &#x60;TARGETING_TYPE_CONTENT_GENRE&#x60; * &#x60;TARGETING_TYPE_CONTENT_INSTREAM_POSITION&#x60; * &#x60;TARGETING_TYPE_CONTENT_OUTSTREAM_POSITION&#x60; * &#x60;TARGETING_TYPE_CONTENT_STREAM_TYPE&#x60; * &#x60;TARGETING_TYPE_DAY_AND_TIME&#x60; * &#x60;TARGETING_TYPE_DEVICE_MAKE_MODEL&#x60; * &#x60;TARGETING_TYPE_DEVICE_TYPE&#x60; * &#x60;TARGETING_TYPE_DIGITAL_CONTENT_LABEL_EXCLUSION&#x60; * &#x60;TARGETING_TYPE_ENVIRONMENT&#x60; * &#x60;TARGETING_TYPE_EXCHANGE&#x60; * &#x60;TARGETING_TYPE_GENDER&#x60; * &#x60;TARGETING_TYPE_GEO_REGION&#x60; * &#x60;TARGETING_TYPE_HOUSEHOLD_INCOME&#x60; * &#x60;TARGETING_TYPE_INVENTORY_SOURCE&#x60; * &#x60;TARGETING_TYPE_INVENTORY_SOURCE_GROUP&#x60; * &#x60;TARGETING_TYPE_KEYWORD&#x60; * &#x60;TARGETING_TYPE_LANGUAGE&#x60; * &#x60;TARGETING_TYPE_NATIVE_CONTENT_POSITION&#x60; * &#x60;TARGETING_TYPE_NEGATIVE_KEYWORD_LIST&#x60; * &#x60;TARGETING_TYPE_OMID&#x60; * &#x60;TARGETING_TYPE_ON_SCREEN_POSITION&#x60; * &#x60;TARGETING_TYPE_OPERATING_SYSTEM&#x60; * &#x60;TARGETING_TYPE_PARENTAL_STATUS&#x60; * &#x60;TARGETING_TYPE_POI&#x60; * &#x60;TARGETING_TYPE_PROXIMITY_LOCATION_LIST&#x60; * &#x60;TARGETING_TYPE_REGIONAL_LOCATION_LIST&#x60; * &#x60;TARGETING_TYPE_SENSITIVE_CATEGORY_EXCLUSION&#x60; * &#x60;TARGETING_TYPE_SUB_EXCHANGE&#x60; * &#x60;TARGETING_TYPE_THIRD_PARTY_VERIFIER&#x60; * &#x60;TARGETING_TYPE_URL&#x60; * &#x60;TARGETING_TYPE_USER_REWARDED_CONTENT&#x60; * &#x60;TARGETING_TYPE_VIDEO_PLAYER_SIZE&#x60; * &#x60;TARGETING_TYPE_VIEWABILITY&#x60; | [optional] 
**line_item_ids** | **List[str]** | Required. The ID of the line items whose targeting is being updated. | [optional] 

## Example

```python
from openapi_client.models.bulk_edit_assigned_targeting_options_request import BulkEditAssignedTargetingOptionsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BulkEditAssignedTargetingOptionsRequest from a JSON string
bulk_edit_assigned_targeting_options_request_instance = BulkEditAssignedTargetingOptionsRequest.from_json(json)
# print the JSON string representation of the object
print(BulkEditAssignedTargetingOptionsRequest.to_json())

# convert the object into a dict
bulk_edit_assigned_targeting_options_request_dict = bulk_edit_assigned_targeting_options_request_instance.to_dict()
# create an instance of BulkEditAssignedTargetingOptionsRequest from a dict
bulk_edit_assigned_targeting_options_request_from_dict = BulkEditAssignedTargetingOptionsRequest.from_dict(bulk_edit_assigned_targeting_options_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


