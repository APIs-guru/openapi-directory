# LinksPercentiles


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **str** |  | 
**percentiles** | [**List[LinksPercentilesItem]**](LinksPercentilesItem.md) |  | 

## Example

```python
from openapi_client.models.links_percentiles import LinksPercentiles

# TODO update the JSON string below
json = "{}"
# create an instance of LinksPercentiles from a JSON string
links_percentiles_instance = LinksPercentiles.from_json(json)
# print the JSON string representation of the object
print(LinksPercentiles.to_json())

# convert the object into a dict
links_percentiles_dict = links_percentiles_instance.to_dict()
# create an instance of LinksPercentiles from a dict
links_percentiles_from_dict = LinksPercentiles.from_dict(links_percentiles_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


