# OfferingUserAddResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | [optional] 
**first_name** | **str** |  | [optional] 
**invite** | [**Invite**](Invite.md) |  | [optional] 
**is_facilitator** | **bool** |  | [optional] [default to False]
**is_marker** | **bool** |  | [optional] [default to False]
**is_readonly** | **bool** |  | [optional] [default to False]
**last_name** | **str** |  | [optional] 
**metadata** | [**UserMetadata**](UserMetadata.md) |  | [optional] 
**person_id** | **str** |  | [optional] 
**profile** | [**UserProfileRequest**](UserProfileRequest.md) |  | [optional] 
**send_invite** | **bool** |  | [optional] [default to True]
**send_notification_email** | **bool** |  | [optional] [default to True]

## Example

```python
from openapi_client.models.offering_user_add_response import OfferingUserAddResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OfferingUserAddResponse from a JSON string
offering_user_add_response_instance = OfferingUserAddResponse.from_json(json)
# print the JSON string representation of the object
print(OfferingUserAddResponse.to_json())

# convert the object into a dict
offering_user_add_response_dict = offering_user_add_response_instance.to_dict()
# create an instance of OfferingUserAddResponse from a dict
offering_user_add_response_from_dict = OfferingUserAddResponse.from_dict(offering_user_add_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


