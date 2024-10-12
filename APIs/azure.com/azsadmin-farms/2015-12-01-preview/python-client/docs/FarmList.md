# FarmList

Pageable list of storage farms.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] [readonly] 
**value** | [**List[Farm]**](Farm.md) | List of storage farms. | [optional] 

## Example

```python
from openapi_client.models.farm_list import FarmList

# TODO update the JSON string below
json = "{}"
# create an instance of FarmList from a JSON string
farm_list_instance = FarmList.from_json(json)
# print the JSON string representation of the object
print(FarmList.to_json())

# convert the object into a dict
farm_list_dict = farm_list_instance.to_dict()
# create an instance of FarmList from a dict
farm_list_from_dict = FarmList.from_dict(farm_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


