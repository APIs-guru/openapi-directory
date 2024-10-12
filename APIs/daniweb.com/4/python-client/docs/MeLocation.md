# MeLocation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** |  | [optional] 
**country** | **float** |  | [optional] 
**ip_address** | **str** |  | [optional] 
**latitude** | **str** |  | [optional] 
**longitude** | **str** |  | [optional] 
**region** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.me_location import MeLocation

# TODO update the JSON string below
json = "{}"
# create an instance of MeLocation from a JSON string
me_location_instance = MeLocation.from_json(json)
# print the JSON string representation of the object
print(MeLocation.to_json())

# convert the object into a dict
me_location_dict = me_location_instance.to_dict()
# create an instance of MeLocation from a dict
me_location_from_dict = MeLocation.from_dict(me_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


