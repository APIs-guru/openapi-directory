# FacetItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Facet item count | [optional] 
**item** | **str** | Facet item | [optional] 

## Example

```python
from openapi_client.models.facet_item import FacetItem

# TODO update the JSON string below
json = "{}"
# create an instance of FacetItem from a JSON string
facet_item_instance = FacetItem.from_json(json)
# print the JSON string representation of the object
print(FacetItem.to_json())

# convert the object into a dict
facet_item_dict = facet_item_instance.to_dict()
# create an instance of FacetItem from a dict
facet_item_from_dict = FacetItem.from_dict(facet_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


