# CrashGroupPlaces


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crash_count** | **int** |  | [optional] 
**places** | [**List[CrashGroupPlacesPlacesInner]**](CrashGroupPlacesPlacesInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.crash_group_places import CrashGroupPlaces

# TODO update the JSON string below
json = "{}"
# create an instance of CrashGroupPlaces from a JSON string
crash_group_places_instance = CrashGroupPlaces.from_json(json)
# print the JSON string representation of the object
print(CrashGroupPlaces.to_json())

# convert the object into a dict
crash_group_places_dict = crash_group_places_instance.to_dict()
# create an instance of CrashGroupPlaces from a dict
crash_group_places_from_dict = CrashGroupPlaces.from_dict(crash_group_places_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


