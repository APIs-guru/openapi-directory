# AppResourceCollection

Object that includes an array of App resources and a possible link for next set

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL client should use to fetch the next page (per server side paging).  It&#39;s null for now, added for future use. | [optional] 
**value** | [**List[AppResource]**](AppResource.md) | Collection of App resources | [optional] 

## Example

```python
from openapi_client.models.app_resource_collection import AppResourceCollection

# TODO update the JSON string below
json = "{}"
# create an instance of AppResourceCollection from a JSON string
app_resource_collection_instance = AppResourceCollection.from_json(json)
# print the JSON string representation of the object
print(AppResourceCollection.to_json())

# convert the object into a dict
app_resource_collection_dict = app_resource_collection_instance.to_dict()
# create an instance of AppResourceCollection from a dict
app_resource_collection_from_dict = AppResourceCollection.from_dict(app_resource_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


