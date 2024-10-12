# WebAppInstanceCollection

Collection of app instances.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[SiteInstance]**](SiteInstance.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.web_app_instance_collection import WebAppInstanceCollection

# TODO update the JSON string below
json = "{}"
# create an instance of WebAppInstanceCollection from a JSON string
web_app_instance_collection_instance = WebAppInstanceCollection.from_json(json)
# print the JSON string representation of the object
print(WebAppInstanceCollection.to_json())

# convert the object into a dict
web_app_instance_collection_dict = web_app_instance_collection_instance.to_dict()
# create an instance of WebAppInstanceCollection from a dict
web_app_instance_collection_from_dict = WebAppInstanceCollection.from_dict(web_app_instance_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


