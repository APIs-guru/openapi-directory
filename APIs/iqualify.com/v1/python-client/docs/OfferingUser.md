# OfferingUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | 
**first_name** | **str** |  | [optional] 
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
from openapi_client.models.offering_user import OfferingUser

# TODO update the JSON string below
json = "{}"
# create an instance of OfferingUser from a JSON string
offering_user_instance = OfferingUser.from_json(json)
# print the JSON string representation of the object
print(OfferingUser.to_json())

# convert the object into a dict
offering_user_dict = offering_user_instance.to_dict()
# create an instance of OfferingUser from a dict
offering_user_from_dict = OfferingUser.from_dict(offering_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


