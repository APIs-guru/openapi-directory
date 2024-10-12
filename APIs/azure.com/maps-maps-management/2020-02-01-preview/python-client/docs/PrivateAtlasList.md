# PrivateAtlasList

A list of Private Atlas resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[PrivateAtlas]**](PrivateAtlas.md) | a Private Atlas. | [optional] [readonly] 

## Example

```python
from openapi_client.models.private_atlas_list import PrivateAtlasList

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateAtlasList from a JSON string
private_atlas_list_instance = PrivateAtlasList.from_json(json)
# print the JSON string representation of the object
print(PrivateAtlasList.to_json())

# convert the object into a dict
private_atlas_list_dict = private_atlas_list_instance.to_dict()
# create an instance of PrivateAtlasList from a dict
private_atlas_list_from_dict = PrivateAtlasList.from_dict(private_atlas_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


