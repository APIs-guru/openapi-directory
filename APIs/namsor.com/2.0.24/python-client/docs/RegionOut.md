# RegionOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**countries_and_regions** | [**List[RegionISO]**](RegionISO.md) | List of countries and regions | [optional] 

## Example

```python
from openapi_client.models.region_out import RegionOut

# TODO update the JSON string below
json = "{}"
# create an instance of RegionOut from a JSON string
region_out_instance = RegionOut.from_json(json)
# print the JSON string representation of the object
print(RegionOut.to_json())

# convert the object into a dict
region_out_dict = region_out_instance.to_dict()
# create an instance of RegionOut from a dict
region_out_from_dict = RegionOut.from_dict(region_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


