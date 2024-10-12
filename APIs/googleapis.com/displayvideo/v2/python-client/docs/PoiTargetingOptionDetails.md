# PoiTargetingOptionDetails

Represents a targetable point of interest(POI). This will be populated in the poi_details field when targeting_type is `TARGETING_TYPE_POI`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Output only. The display name of a POI(e.g. \&quot;Times Square\&quot;, \&quot;Space Needle\&quot;), followed by its full address if available. | [optional] [readonly] 
**latitude** | **float** | Output only. Latitude of the POI rounding to 6th decimal place. | [optional] [readonly] 
**longitude** | **float** | Output only. Longitude of the POI rounding to 6th decimal place. | [optional] [readonly] 

## Example

```python
from openapi_client.models.poi_targeting_option_details import PoiTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of PoiTargetingOptionDetails from a JSON string
poi_targeting_option_details_instance = PoiTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(PoiTargetingOptionDetails.to_json())

# convert the object into a dict
poi_targeting_option_details_dict = poi_targeting_option_details_instance.to_dict()
# create an instance of PoiTargetingOptionDetails from a dict
poi_targeting_option_details_from_dict = PoiTargetingOptionDetails.from_dict(poi_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


