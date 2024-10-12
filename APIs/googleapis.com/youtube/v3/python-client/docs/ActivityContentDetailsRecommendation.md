# ActivityContentDetailsRecommendation

Information that identifies the recommended resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **str** | The reason that the resource is recommended to the user. | [optional] 
**resource_id** | [**ResourceId**](ResourceId.md) |  | [optional] 
**seed_resource_id** | [**ResourceId**](ResourceId.md) |  | [optional] 

## Example

```python
from openapi_client.models.activity_content_details_recommendation import ActivityContentDetailsRecommendation

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityContentDetailsRecommendation from a JSON string
activity_content_details_recommendation_instance = ActivityContentDetailsRecommendation.from_json(json)
# print the JSON string representation of the object
print(ActivityContentDetailsRecommendation.to_json())

# convert the object into a dict
activity_content_details_recommendation_dict = activity_content_details_recommendation_instance.to_dict()
# create an instance of ActivityContentDetailsRecommendation from a dict
activity_content_details_recommendation_from_dict = ActivityContentDetailsRecommendation.from_dict(activity_content_details_recommendation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


