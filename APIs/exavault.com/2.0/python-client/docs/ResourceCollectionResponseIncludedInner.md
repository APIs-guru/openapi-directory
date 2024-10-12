# ResourceCollectionResponseIncludedInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**ShareAttributes**](ShareAttributes.md) |  | [optional] 
**id** | **int** | ID of the share. | [optional] 
**relationships** | [**ShareRelationships**](ShareRelationships.md) |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.resource_collection_response_included_inner import ResourceCollectionResponseIncludedInner

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceCollectionResponseIncludedInner from a JSON string
resource_collection_response_included_inner_instance = ResourceCollectionResponseIncludedInner.from_json(json)
# print the JSON string representation of the object
print(ResourceCollectionResponseIncludedInner.to_json())

# convert the object into a dict
resource_collection_response_included_inner_dict = resource_collection_response_included_inner_instance.to_dict()
# create an instance of ResourceCollectionResponseIncludedInner from a dict
resource_collection_response_included_inner_from_dict = ResourceCollectionResponseIncludedInner.from_dict(resource_collection_response_included_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


