# KeyDescriptionList

The list of the EngagementFabric account keys

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[KeyDescription]**](KeyDescription.md) | Account keys | [optional] [readonly] 

## Example

```python
from openapi_client.models.key_description_list import KeyDescriptionList

# TODO update the JSON string below
json = "{}"
# create an instance of KeyDescriptionList from a JSON string
key_description_list_instance = KeyDescriptionList.from_json(json)
# print the JSON string representation of the object
print(KeyDescriptionList.to_json())

# convert the object into a dict
key_description_list_dict = key_description_list_instance.to_dict()
# create an instance of KeyDescriptionList from a dict
key_description_list_from_dict = KeyDescriptionList.from_dict(key_description_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


