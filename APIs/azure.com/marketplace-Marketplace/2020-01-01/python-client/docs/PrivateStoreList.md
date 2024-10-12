# PrivateStoreList

Describes the json payload for the list of available private stores (between zero and one, inclusive)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of PrivateStore list results if there are any. | [optional] 
**value** | [**List[PrivateStoreProperties]**](PrivateStoreProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.private_store_list import PrivateStoreList

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateStoreList from a JSON string
private_store_list_instance = PrivateStoreList.from_json(json)
# print the JSON string representation of the object
print(PrivateStoreList.to_json())

# convert the object into a dict
private_store_list_dict = private_store_list_instance.to_dict()
# create an instance of PrivateStoreList from a dict
private_store_list_from_dict = PrivateStoreList.from_dict(private_store_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


