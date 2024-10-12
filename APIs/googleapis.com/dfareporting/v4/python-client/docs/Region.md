# Region

Contains information about a region that can be targeted by ads.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_code** | **str** | Country code of the country to which this region belongs. | [optional] 
**country_dart_id** | **str** | DART ID of the country to which this region belongs. | [optional] 
**dart_id** | **str** | DART ID of this region. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#region\&quot;. | [optional] 
**name** | **str** | Name of this region. | [optional] 
**region_code** | **str** | Region code. | [optional] 

## Example

```python
from openapi_client.models.region import Region

# TODO update the JSON string below
json = "{}"
# create an instance of Region from a JSON string
region_instance = Region.from_json(json)
# print the JSON string representation of the object
print(Region.to_json())

# convert the object into a dict
region_dict = region_instance.to_dict()
# create an instance of Region from a dict
region_from_dict = Region.from_dict(region_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


