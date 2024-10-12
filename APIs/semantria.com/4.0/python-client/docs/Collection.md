# Collection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documents** | **List[str]** | List of documents text that need to be analyzed by the service | 
**id** | **str** | Up to 32 symbols unique identifier of document assigned and tracked by client | 
**job_id** | **str** | Specific marker of incoming job that can be used then for collections retrieving | 
**tag** | **str** | Any text of up to 50 characters used like marker | 

## Example

```python
from openapi_client.models.collection import Collection

# TODO update the JSON string below
json = "{}"
# create an instance of Collection from a JSON string
collection_instance = Collection.from_json(json)
# print the JSON string representation of the object
print(Collection.to_json())

# convert the object into a dict
collection_dict = collection_instance.to_dict()
# create an instance of Collection from a dict
collection_from_dict = Collection.from_dict(collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


