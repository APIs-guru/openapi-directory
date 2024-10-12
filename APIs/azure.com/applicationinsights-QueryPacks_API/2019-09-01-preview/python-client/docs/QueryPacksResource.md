# QueryPacksResource

An azure resource object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Azure resource Id | [optional] [readonly] 
**location** | **str** | Resource location | 
**name** | **str** | Azure resource name | [optional] [readonly] 
**tags** | **object** | Resource tags | [optional] 
**type** | **str** | Azure resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.query_packs_resource import QueryPacksResource

# TODO update the JSON string below
json = "{}"
# create an instance of QueryPacksResource from a JSON string
query_packs_resource_instance = QueryPacksResource.from_json(json)
# print the JSON string representation of the object
print(QueryPacksResource.to_json())

# convert the object into a dict
query_packs_resource_dict = query_packs_resource_instance.to_dict()
# create an instance of QueryPacksResource from a dict
query_packs_resource_from_dict = QueryPacksResource.from_dict(query_packs_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


