# LocationPreference

Preferred location. This specifies where a Cloud SQL instance is located. Note that if the preferred location is not available, the instance will be located as close as possible within the region. Only one location may be specified.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**follow_gae_application** | **str** | The App Engine application to follow, it must be in the same region as the Cloud SQL instance. WARNING: Changing this might restart the instance. | [optional] 
**kind** | **str** | This is always &#x60;sql#locationPreference&#x60;. | [optional] 
**secondary_zone** | **str** | The preferred Compute Engine zone for the secondary/failover (for example: us-central1-a, us-central1-b, etc.). To disable this field, set it to &#39;no_secondary_zone&#39;. | [optional] 
**zone** | **str** | The preferred Compute Engine zone (for example: us-central1-a, us-central1-b, etc.). WARNING: Changing this might restart the instance. | [optional] 

## Example

```python
from openapi_client.models.location_preference import LocationPreference

# TODO update the JSON string below
json = "{}"
# create an instance of LocationPreference from a JSON string
location_preference_instance = LocationPreference.from_json(json)
# print the JSON string representation of the object
print(LocationPreference.to_json())

# convert the object into a dict
location_preference_dict = location_preference_instance.to_dict()
# create an instance of LocationPreference from a dict
location_preference_from_dict = LocationPreference.from_dict(location_preference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


