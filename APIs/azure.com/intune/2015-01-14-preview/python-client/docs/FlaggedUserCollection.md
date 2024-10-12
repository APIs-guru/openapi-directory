# FlaggedUserCollection

Flagged user collection for the given tenant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nextlink** | **str** | Gets the URL to get the next set of results. | [optional] [readonly] 
**value** | [**List[FlaggedUser]**](FlaggedUser.md) |  | 

## Example

```python
from openapi_client.models.flagged_user_collection import FlaggedUserCollection

# TODO update the JSON string below
json = "{}"
# create an instance of FlaggedUserCollection from a JSON string
flagged_user_collection_instance = FlaggedUserCollection.from_json(json)
# print the JSON string representation of the object
print(FlaggedUserCollection.to_json())

# convert the object into a dict
flagged_user_collection_dict = flagged_user_collection_instance.to_dict()
# create an instance of FlaggedUserCollection from a dict
flagged_user_collection_from_dict = FlaggedUserCollection.from_dict(flagged_user_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


