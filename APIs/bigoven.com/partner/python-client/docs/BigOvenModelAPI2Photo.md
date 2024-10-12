# BigOvenModelAPI2Photo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caption** | **str** |  | [optional] 
**creation_date** | **str** |  | [optional] 
**image_id** | **int** |  | [optional] 
**is_primary** | **bool** |  | [optional] 
**max_image_square** | **int** |  | [optional] 
**photo_url** | **str** |  | [optional] 
**poster** | [**BigOvenModelAPI2UserInfoTinyx**](BigOvenModelAPI2UserInfoTinyx.md) |  | [optional] 

## Example

```python
from openapi_client.models.big_oven_model_api2_photo import BigOvenModelAPI2Photo

# TODO update the JSON string below
json = "{}"
# create an instance of BigOvenModelAPI2Photo from a JSON string
big_oven_model_api2_photo_instance = BigOvenModelAPI2Photo.from_json(json)
# print the JSON string representation of the object
print(BigOvenModelAPI2Photo.to_json())

# convert the object into a dict
big_oven_model_api2_photo_dict = big_oven_model_api2_photo_instance.to_dict()
# create an instance of BigOvenModelAPI2Photo from a dict
big_oven_model_api2_photo_from_dict = BigOvenModelAPI2Photo.from_dict(big_oven_model_api2_photo_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


