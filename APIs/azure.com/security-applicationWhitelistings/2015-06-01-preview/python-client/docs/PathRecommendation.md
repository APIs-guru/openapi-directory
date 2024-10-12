# PathRecommendation

Represents a path that is recommended to be allowed and its properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | [**RecommendationAction**](RecommendationAction.md) |  | [optional] 
**common** | **bool** | Whether the path is commonly run on the machine | [optional] 
**configuration_status** | [**ConfigurationStatus**](ConfigurationStatus.md) |  | [optional] 
**file_type** | [**FileType**](FileType.md) |  | [optional] 
**path** | **str** | The full path to whitelist | [optional] 
**publisher_info** | [**PublisherInfo**](PublisherInfo.md) |  | [optional] 
**type** | [**RecommendationType**](RecommendationType.md) |  | [optional] 
**user_sids** | **List[str]** |  | [optional] 
**usernames** | [**List[UserRecommendation]**](UserRecommendation.md) |  | [optional] 

## Example

```python
from openapi_client.models.path_recommendation import PathRecommendation

# TODO update the JSON string below
json = "{}"
# create an instance of PathRecommendation from a JSON string
path_recommendation_instance = PathRecommendation.from_json(json)
# print the JSON string representation of the object
print(PathRecommendation.to_json())

# convert the object into a dict
path_recommendation_dict = path_recommendation_instance.to_dict()
# create an instance of PathRecommendation from a dict
path_recommendation_from_dict = PathRecommendation.from_dict(path_recommendation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


