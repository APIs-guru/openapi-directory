# UserDeliveryStatusInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status_code** | [**UserDeliveryStatusInfoCodes**](UserDeliveryStatusInfoCodes.md) |  | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.user_delivery_status_info import UserDeliveryStatusInfo

# TODO update the JSON string below
json = "{}"
# create an instance of UserDeliveryStatusInfo from a JSON string
user_delivery_status_info_instance = UserDeliveryStatusInfo.from_json(json)
# print the JSON string representation of the object
print(UserDeliveryStatusInfo.to_json())

# convert the object into a dict
user_delivery_status_info_dict = user_delivery_status_info_instance.to_dict()
# create an instance of UserDeliveryStatusInfo from a dict
user_delivery_status_info_from_dict = UserDeliveryStatusInfo.from_dict(user_delivery_status_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


