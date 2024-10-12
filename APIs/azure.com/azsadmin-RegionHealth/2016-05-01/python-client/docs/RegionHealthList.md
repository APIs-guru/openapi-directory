# RegionHealthList

Pageable list of region health items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to next page. | [optional] 
**value** | [**List[RegionHealth]**](RegionHealth.md) | Array of region health items | [optional] 

## Example

```python
from openapi_client.models.region_health_list import RegionHealthList

# TODO update the JSON string below
json = "{}"
# create an instance of RegionHealthList from a JSON string
region_health_list_instance = RegionHealthList.from_json(json)
# print the JSON string representation of the object
print(RegionHealthList.to_json())

# convert the object into a dict
region_health_list_dict = region_health_list_instance.to_dict()
# create an instance of RegionHealthList from a dict
region_health_list_from_dict = RegionHealthList.from_dict(region_health_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


