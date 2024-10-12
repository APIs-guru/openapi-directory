# SubscribeWithGoogleInfo

Information associated with purchases made with 'Subscribe with Google'.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_address** | **str** | The email address of the user when the subscription was purchased. | [optional] 
**family_name** | **str** | The family name of the user when the subscription was purchased. | [optional] 
**given_name** | **str** | The given name of the user when the subscription was purchased. | [optional] 
**profile_id** | **str** | The Google profile id of the user when the subscription was purchased. | [optional] 
**profile_name** | **str** | The profile name of the user when the subscription was purchased. | [optional] 

## Example

```python
from openapi_client.models.subscribe_with_google_info import SubscribeWithGoogleInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SubscribeWithGoogleInfo from a JSON string
subscribe_with_google_info_instance = SubscribeWithGoogleInfo.from_json(json)
# print the JSON string representation of the object
print(SubscribeWithGoogleInfo.to_json())

# convert the object into a dict
subscribe_with_google_info_dict = subscribe_with_google_info_instance.to_dict()
# create an instance of SubscribeWithGoogleInfo from a dict
subscribe_with_google_info_from_dict = SubscribeWithGoogleInfo.from_dict(subscribe_with_google_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


