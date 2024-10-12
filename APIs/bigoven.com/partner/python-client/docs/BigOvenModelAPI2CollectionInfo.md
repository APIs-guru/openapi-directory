# BigOvenModelAPI2CollectionInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**id** | **int** |  | [optional] 
**is_filtered** | **bool** |  | [optional] 
**is_sponsored** | **bool** |  | [optional] 
**mobile_url** | **str** |  | [optional] 
**pro** | **bool** |  | [optional] 
**photo_url** | **str** |  | [optional] 
**results** | [**List[BigOvenModelAPI2RecipeInfox]**](BigOvenModelAPI2RecipeInfox.md) |  | [optional] 
**title** | **str** |  | [optional] 
**token** | **str** |  | [optional] 
**web_url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.big_oven_model_api2_collection_info import BigOvenModelAPI2CollectionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of BigOvenModelAPI2CollectionInfo from a JSON string
big_oven_model_api2_collection_info_instance = BigOvenModelAPI2CollectionInfo.from_json(json)
# print the JSON string representation of the object
print(BigOvenModelAPI2CollectionInfo.to_json())

# convert the object into a dict
big_oven_model_api2_collection_info_dict = big_oven_model_api2_collection_info_instance.to_dict()
# create an instance of BigOvenModelAPI2CollectionInfo from a dict
big_oven_model_api2_collection_info_from_dict = BigOvenModelAPI2CollectionInfo.from_dict(big_oven_model_api2_collection_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


