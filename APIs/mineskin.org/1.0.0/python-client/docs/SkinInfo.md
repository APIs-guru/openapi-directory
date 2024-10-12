# SkinInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | **int** |  | [optional] 
**account_id** | **int** |  | [optional] 
**data** | [**SkinData**](SkinData.md) |  | 
**duration** | **float** |  | [optional] 
**id** | **int** |  | 
**id_str** | **str** |  | [optional] 
**model** | **str** |  | 
**name** | **str** |  | [optional] 
**private** | **bool** |  | [optional] 
**server** | **str** |  | [optional] 
**timestamp** | **float** |  | [optional] 
**uuid** | **str** |  | [optional] 
**variant** | **str** |  | [optional] 
**views** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.skin_info import SkinInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SkinInfo from a JSON string
skin_info_instance = SkinInfo.from_json(json)
# print the JSON string representation of the object
print(SkinInfo.to_json())

# convert the object into a dict
skin_info_dict = skin_info_instance.to_dict()
# create an instance of SkinInfo from a dict
skin_info_from_dict = SkinInfo.from_dict(skin_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


