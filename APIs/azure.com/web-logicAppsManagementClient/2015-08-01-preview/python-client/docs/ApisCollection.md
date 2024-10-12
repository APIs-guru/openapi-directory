# ApisCollection

Collection of Apis

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources | [optional] 
**value** | [**List[ApiEntity]**](ApiEntity.md) | Collection of resources | [optional] 

## Example

```python
from openapi_client.models.apis_collection import ApisCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ApisCollection from a JSON string
apis_collection_instance = ApisCollection.from_json(json)
# print the JSON string representation of the object
print(ApisCollection.to_json())

# convert the object into a dict
apis_collection_dict = apis_collection_instance.to_dict()
# create an instance of ApisCollection from a dict
apis_collection_from_dict = ApisCollection.from_dict(apis_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


