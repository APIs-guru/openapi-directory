# Location

A resource that represents a Google Cloud location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The friendly name for this location, typically a nearby city name. For example, \&quot;Tokyo\&quot;. | [optional] 
**labels** | **Dict[str, str]** | Cross-service attributes for the location. For example {\&quot;cloud.googleapis.com/region\&quot;: \&quot;us-east1\&quot;} | [optional] 
**location_id** | **str** | Resource ID for the region. For example: \&quot;us-east1\&quot;. | [optional] 
**metadata** | **Dict[str, object]** | Output only. The set of available zones in the location. The map is keyed by the lowercase ID of each zone, as defined by Compute Engine. These keys can be specified in &#x60;location_id&#x60; or &#x60;alternative_location_id&#x60; fields when creating a Redis instance. | [optional] 
**name** | **str** | Full resource name for the region. For example: \&quot;projects/example-project/locations/us-east1\&quot;. | [optional] 

## Example

```python
from openapi_client.models.location import Location

# TODO update the JSON string below
json = "{}"
# create an instance of Location from a JSON string
location_instance = Location.from_json(json)
# print the JSON string representation of the object
print(Location.to_json())

# convert the object into a dict
location_dict = location_instance.to_dict()
# create an instance of Location from a dict
location_from_dict = Location.from_dict(location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


