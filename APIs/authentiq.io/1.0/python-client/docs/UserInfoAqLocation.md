# UserInfoAqLocation

Geolocation structure

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**Address**](Address.md) |  | [optional] 
**latitude** | **float** |  | [optional] 
**longitude** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.user_info_aq_location import UserInfoAqLocation

# TODO update the JSON string below
json = "{}"
# create an instance of UserInfoAqLocation from a JSON string
user_info_aq_location_instance = UserInfoAqLocation.from_json(json)
# print the JSON string representation of the object
print(UserInfoAqLocation.to_json())

# convert the object into a dict
user_info_aq_location_dict = user_info_aq_location_instance.to_dict()
# create an instance of UserInfoAqLocation from a dict
user_info_aq_location_from_dict = UserInfoAqLocation.from_dict(user_info_aq_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


