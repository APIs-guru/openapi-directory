# Province

A Canadian province or territory 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Canadian province abbreviations | 
**name_en** | **str** | English name | 
**name_fr** | **str** | French name | 
**next_holiday** | [**Holiday**](Holiday.md) |  | [optional] 
**optional** | **int** | Whether this province optionally observes a given holiday. | [optional] 
**provinces** | [**List[Holiday]**](Holiday.md) |  | [optional] 
**source_en** | **str** | Name of reference page with public holidays for this region | 
**source_link** | **str** | URL to public holidays reference for this region | 

## Example

```python
from openapi_client.models.province import Province

# TODO update the JSON string below
json = "{}"
# create an instance of Province from a JSON string
province_instance = Province.from_json(json)
# print the JSON string representation of the object
print(Province.to_json())

# convert the object into a dict
province_dict = province_instance.to_dict()
# create an instance of Province from a dict
province_from_dict = Province.from_dict(province_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


