# PartialSkinInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**name** | **str** |  | 
**time** | **int** |  | 
**url** | **str** |  | 

## Example

```python
from openapi_client.models.partial_skin_info import PartialSkinInfo

# TODO update the JSON string below
json = "{}"
# create an instance of PartialSkinInfo from a JSON string
partial_skin_info_instance = PartialSkinInfo.from_json(json)
# print the JSON string representation of the object
print(PartialSkinInfo.to_json())

# convert the object into a dict
partial_skin_info_dict = partial_skin_info_instance.to_dict()
# create an instance of PartialSkinInfo from a dict
partial_skin_info_from_dict = PartialSkinInfo.from_dict(partial_skin_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


