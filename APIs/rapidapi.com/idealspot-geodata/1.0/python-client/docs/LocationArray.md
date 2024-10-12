# LocationArray


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**areatype** | **str** |  | 
**latitude** | **float** |  | 
**longitude** | **float** |  | 
**radius** | **str** |  | 
**type** | **str** |  | 
**units** | **str** |  | 

## Example

```python
from openapi_client.models.location_array import LocationArray

# TODO update the JSON string below
json = "{}"
# create an instance of LocationArray from a JSON string
location_array_instance = LocationArray.from_json(json)
# print the JSON string representation of the object
print(LocationArray.to_json())

# convert the object into a dict
location_array_dict = location_array_instance.to_dict()
# create an instance of LocationArray from a dict
location_array_from_dict = LocationArray.from_dict(location_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


