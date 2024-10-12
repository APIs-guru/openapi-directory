# GetWineRecommendation200Response



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recommended_wines** | [**List[GetWineRecommendation200ResponseRecommendedWinesInner]**](GetWineRecommendation200ResponseRecommendedWinesInner.md) |  | 
**total_found** | **int** |  | 

## Example

```python
from openapi_client.models.get_wine_recommendation200_response import GetWineRecommendation200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetWineRecommendation200Response from a JSON string
get_wine_recommendation200_response_instance = GetWineRecommendation200Response.from_json(json)
# print the JSON string representation of the object
print(GetWineRecommendation200Response.to_json())

# convert the object into a dict
get_wine_recommendation200_response_dict = get_wine_recommendation200_response_instance.to_dict()
# create an instance of GetWineRecommendation200Response from a dict
get_wine_recommendation200_response_from_dict = GetWineRecommendation200Response.from_dict(get_wine_recommendation200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


