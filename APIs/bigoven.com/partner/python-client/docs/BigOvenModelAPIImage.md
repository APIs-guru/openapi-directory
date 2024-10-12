# BigOvenModelAPIImage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caption** | **str** |  | [optional] 
**creation_date** | **str** |  | [optional] 
**image_id** | **int** |  | [optional] 
**image_squares** | **List[int]** |  | [optional] 
**image_url** | **str** |  | [optional] 
**image_url120** | **str** |  | [optional] 
**image_url128** | **str** |  | [optional] 
**image_url200** | **str** |  | [optional] 
**image_url256** | **str** |  | [optional] 
**image_url48** | **str** |  | [optional] 
**image_url64** | **str** |  | [optional] 
**is_primary** | **bool** |  | [optional] 
**max_image_square** | **int** |  | [optional] 
**poster** | [**BigOvenModelAPIUserInfo**](BigOvenModelAPIUserInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.big_oven_model_api_image import BigOvenModelAPIImage

# TODO update the JSON string below
json = "{}"
# create an instance of BigOvenModelAPIImage from a JSON string
big_oven_model_api_image_instance = BigOvenModelAPIImage.from_json(json)
# print the JSON string representation of the object
print(BigOvenModelAPIImage.to_json())

# convert the object into a dict
big_oven_model_api_image_dict = big_oven_model_api_image_instance.to_dict()
# create an instance of BigOvenModelAPIImage from a dict
big_oven_model_api_image_from_dict = BigOvenModelAPIImage.from_dict(big_oven_model_api_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


