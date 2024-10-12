# SiteCollection

Collection of sites

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources | [optional] 
**value** | [**List[Site]**](Site.md) | Collection of resources | [optional] 

## Example

```python
from openapi_client.models.site_collection import SiteCollection

# TODO update the JSON string below
json = "{}"
# create an instance of SiteCollection from a JSON string
site_collection_instance = SiteCollection.from_json(json)
# print the JSON string representation of the object
print(SiteCollection.to_json())

# convert the object into a dict
site_collection_dict = site_collection_instance.to_dict()
# create an instance of SiteCollection from a dict
site_collection_from_dict = SiteCollection.from_dict(site_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


