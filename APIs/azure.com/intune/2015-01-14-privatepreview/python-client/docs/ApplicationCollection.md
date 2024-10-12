# ApplicationCollection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nextlink** | **str** | Gets the URL to get the next set of results. | [optional] [readonly] 
**value** | [**List[Application]**](Application.md) |  | 

## Example

```python
from openapi_client.models.application_collection import ApplicationCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationCollection from a JSON string
application_collection_instance = ApplicationCollection.from_json(json)
# print the JSON string representation of the object
print(ApplicationCollection.to_json())

# convert the object into a dict
application_collection_dict = application_collection_instance.to_dict()
# create an instance of ApplicationCollection from a dict
application_collection_from_dict = ApplicationCollection.from_dict(application_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


