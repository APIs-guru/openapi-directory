# LinksPercentilesItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avg** | **int** |  | 
**id** | **int** |  | 
**max** | **int** |  | 
**metric_total** | **int** |  | 
**min** | **int** |  | 
**url_total** | **int** |  | 

## Example

```python
from openapi_client.models.links_percentiles_item import LinksPercentilesItem

# TODO update the JSON string below
json = "{}"
# create an instance of LinksPercentilesItem from a JSON string
links_percentiles_item_instance = LinksPercentilesItem.from_json(json)
# print the JSON string representation of the object
print(LinksPercentilesItem.to_json())

# convert the object into a dict
links_percentiles_item_dict = links_percentiles_item_instance.to_dict()
# create an instance of LinksPercentilesItem from a dict
links_percentiles_item_from_dict = LinksPercentilesItem.from_dict(links_percentiles_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


