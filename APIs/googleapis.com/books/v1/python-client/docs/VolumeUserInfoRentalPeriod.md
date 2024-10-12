# VolumeUserInfoRentalPeriod

Period during this book is/was a valid rental.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_utc_sec** | **str** |  | [optional] 
**start_utc_sec** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.volume_user_info_rental_period import VolumeUserInfoRentalPeriod

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeUserInfoRentalPeriod from a JSON string
volume_user_info_rental_period_instance = VolumeUserInfoRentalPeriod.from_json(json)
# print the JSON string representation of the object
print(VolumeUserInfoRentalPeriod.to_json())

# convert the object into a dict
volume_user_info_rental_period_dict = volume_user_info_rental_period_instance.to_dict()
# create an instance of VolumeUserInfoRentalPeriod from a dict
volume_user_info_rental_period_from_dict = VolumeUserInfoRentalPeriod.from_dict(volume_user_info_rental_period_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


