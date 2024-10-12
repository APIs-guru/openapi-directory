# Region

Class representing a region in the Geographic hierarchy used with the Geographic traffic routing method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The code of the region | [optional] 
**name** | **str** | The name of the region | [optional] 
**regions** | [**List[Region]**](Region.md) | The list of Regions grouped under this Region in the Geographic Hierarchy. | [optional] 

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


