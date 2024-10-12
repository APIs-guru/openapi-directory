# RegionPreferences

The user preferences relating to target regions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**preferred_regions** | **List[str]** | A list of preferred regions, ordered by the most preferred region first. Set only valid Google Cloud region names. See https://cloud.google.com/compute/docs/regions-zones for available regions. | [optional] 

## Example

```python
from openapi_client.models.region_preferences import RegionPreferences

# TODO update the JSON string below
json = "{}"
# create an instance of RegionPreferences from a JSON string
region_preferences_instance = RegionPreferences.from_json(json)
# print the JSON string representation of the object
print(RegionPreferences.to_json())

# convert the object into a dict
region_preferences_dict = region_preferences_instance.to_dict()
# create an instance of RegionPreferences from a dict
region_preferences_from_dict = RegionPreferences.from_dict(region_preferences_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


