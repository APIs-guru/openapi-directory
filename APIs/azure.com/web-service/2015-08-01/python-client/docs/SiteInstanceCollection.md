# SiteInstanceCollection

Collection of site instances

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources | [optional] 
**value** | [**List[SiteInstance]**](SiteInstance.md) | Collection of resources | [optional] 

## Example

```python
from openapi_client.models.site_instance_collection import SiteInstanceCollection

# TODO update the JSON string below
json = "{}"
# create an instance of SiteInstanceCollection from a JSON string
site_instance_collection_instance = SiteInstanceCollection.from_json(json)
# print the JSON string representation of the object
print(SiteInstanceCollection.to_json())

# convert the object into a dict
site_instance_collection_dict = site_instance_collection_instance.to_dict()
# create an instance of SiteInstanceCollection from a dict
site_instance_collection_from_dict = SiteInstanceCollection.from_dict(site_instance_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


