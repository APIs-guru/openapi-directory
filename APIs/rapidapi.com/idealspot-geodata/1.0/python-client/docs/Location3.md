# Location3


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
from openapi_client.models.location3 import Location3

# TODO update the JSON string below
json = "{}"
# create an instance of Location3 from a JSON string
location3_instance = Location3.from_json(json)
# print the JSON string representation of the object
print(Location3.to_json())

# convert the object into a dict
location3_dict = location3_instance.to_dict()
# create an instance of Location3 from a dict
location3_from_dict = Location3.from_dict(location3_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


