# BigOvenModelAPIUserInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**first_name** | **str** |  | [optional] 
**image_url48** | **str** |  | [optional] 
**is_kitchen_helper** | **bool** |  | [optional] 
**is_premium** | **bool** |  | [optional] 
**is_using_recurly** | **bool** |  | [optional] 
**last_name** | **str** |  | [optional] 
**member_since** | **datetime** |  | [optional] 
**photo_url** | **str** |  | [optional] 
**photo_url48** | **str** |  | [optional] [readonly] 
**premium_expiry_date** | **datetime** |  | [optional] 
**user_id** | **int** |  | [optional] 
**user_name** | **str** |  | [optional] 
**web_url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.big_oven_model_api_user_info import BigOvenModelAPIUserInfo

# TODO update the JSON string below
json = "{}"
# create an instance of BigOvenModelAPIUserInfo from a JSON string
big_oven_model_api_user_info_instance = BigOvenModelAPIUserInfo.from_json(json)
# print the JSON string representation of the object
print(BigOvenModelAPIUserInfo.to_json())

# convert the object into a dict
big_oven_model_api_user_info_dict = big_oven_model_api_user_info_instance.to_dict()
# create an instance of BigOvenModelAPIUserInfo from a dict
big_oven_model_api_user_info_from_dict = BigOvenModelAPIUserInfo.from_dict(big_oven_model_api_user_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


