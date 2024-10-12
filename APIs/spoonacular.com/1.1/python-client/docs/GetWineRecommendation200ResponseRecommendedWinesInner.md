# GetWineRecommendation200ResponseRecommendedWinesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average_rating** | **float** |  | 
**description** | **str** |  | 
**id** | **int** |  | 
**image_url** | **str** |  | 
**link** | **str** |  | 
**price** | **str** |  | 
**rating_count** | **int** |  | 
**score** | **float** |  | 
**title** | **str** |  | 

## Example

```python
from openapi_client.models.get_wine_recommendation200_response_recommended_wines_inner import GetWineRecommendation200ResponseRecommendedWinesInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetWineRecommendation200ResponseRecommendedWinesInner from a JSON string
get_wine_recommendation200_response_recommended_wines_inner_instance = GetWineRecommendation200ResponseRecommendedWinesInner.from_json(json)
# print the JSON string representation of the object
print(GetWineRecommendation200ResponseRecommendedWinesInner.to_json())

# convert the object into a dict
get_wine_recommendation200_response_recommended_wines_inner_dict = get_wine_recommendation200_response_recommended_wines_inner_instance.to_dict()
# create an instance of GetWineRecommendation200ResponseRecommendedWinesInner from a dict
get_wine_recommendation200_response_recommended_wines_inner_from_dict = GetWineRecommendation200ResponseRecommendedWinesInner.from_dict(get_wine_recommendation200_response_recommended_wines_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


