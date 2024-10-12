# Sites


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **List[bool]** |  | [optional] 
**description** | **List[str]** |  | [optional] 
**id** | **List[str]** |  | [optional] 
**lattitude** | **List[float]** |  | [optional] 
**longitude** | **List[float]** |  | [optional] 
**site_id** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.sites import Sites

# TODO update the JSON string below
json = "{}"
# create an instance of Sites from a JSON string
sites_instance = Sites.from_json(json)
# print the JSON string representation of the object
print(Sites.to_json())

# convert the object into a dict
sites_dict = sites_instance.to_dict()
# create an instance of Sites from a dict
sites_from_dict = Sites.from_dict(sites_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


