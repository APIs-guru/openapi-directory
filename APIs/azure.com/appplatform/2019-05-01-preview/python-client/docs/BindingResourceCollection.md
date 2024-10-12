# BindingResourceCollection

Object that includes an array of Binding resources and a possible link for next set

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL client should use to fetch the next page (per server side paging).  It&#39;s null for now, added for future use. | [optional] 
**value** | [**List[BindingResource]**](BindingResource.md) | Collection of Binding resources | [optional] 

## Example

```python
from openapi_client.models.binding_resource_collection import BindingResourceCollection

# TODO update the JSON string below
json = "{}"
# create an instance of BindingResourceCollection from a JSON string
binding_resource_collection_instance = BindingResourceCollection.from_json(json)
# print the JSON string representation of the object
print(BindingResourceCollection.to_json())

# convert the object into a dict
binding_resource_collection_dict = binding_resource_collection_instance.to_dict()
# create an instance of BindingResourceCollection from a dict
binding_resource_collection_from_dict = BindingResourceCollection.from_dict(binding_resource_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


