# FloodlightActivitiesGenerateTagResponse

Floodlight Activity GenerateTag Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**floodlight_activity_tag** | **str** | Generated tag for this Floodlight activity. For global site tags, this is the event snippet. | [optional] 
**global_site_tag_global_snippet** | **str** | The global snippet section of a global site tag. The global site tag sets new cookies on your domain, which will store a unique identifier for a user or the ad click that brought the user to your site. Learn more. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#floodlightActivitiesGenerateTagResponse\&quot;. | [optional] 

## Example

```python
from openapi_client.models.floodlight_activities_generate_tag_response import FloodlightActivitiesGenerateTagResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FloodlightActivitiesGenerateTagResponse from a JSON string
floodlight_activities_generate_tag_response_instance = FloodlightActivitiesGenerateTagResponse.from_json(json)
# print the JSON string representation of the object
print(FloodlightActivitiesGenerateTagResponse.to_json())

# convert the object into a dict
floodlight_activities_generate_tag_response_dict = floodlight_activities_generate_tag_response_instance.to_dict()
# create an instance of FloodlightActivitiesGenerateTagResponse from a dict
floodlight_activities_generate_tag_response_from_dict = FloodlightActivitiesGenerateTagResponse.from_dict(floodlight_activities_generate_tag_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


