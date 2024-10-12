# OfferingsOfferingIdUsersPost207ResponseInner


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
**error** | [**ErrorError**](ErrorError.md) |  | [optional] 

## Example

```python
from openapi_client.models.offerings_offering_id_users_post207_response_inner import OfferingsOfferingIdUsersPost207ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of OfferingsOfferingIdUsersPost207ResponseInner from a JSON string
offerings_offering_id_users_post207_response_inner_instance = OfferingsOfferingIdUsersPost207ResponseInner.from_json(json)
# print the JSON string representation of the object
print(OfferingsOfferingIdUsersPost207ResponseInner.to_json())

# convert the object into a dict
offerings_offering_id_users_post207_response_inner_dict = offerings_offering_id_users_post207_response_inner_instance.to_dict()
# create an instance of OfferingsOfferingIdUsersPost207ResponseInner from a dict
offerings_offering_id_users_post207_response_inner_from_dict = OfferingsOfferingIdUsersPost207ResponseInner.from_dict(offerings_offering_id_users_post207_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


