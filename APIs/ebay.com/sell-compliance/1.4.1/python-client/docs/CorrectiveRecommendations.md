# CorrectiveRecommendations

This type is used by the correctiveRecommendations container, which is returned if eBay has suggestions for how to correct the given violation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aspect_recommendations** | [**List[AspectRecommendations]**](AspectRecommendations.md) | This container is returned for ASPECTS_ADOPTION violations if eBay has found one or more item aspect name-value pairs that may be appropriate for the seller&#39;s product. In many cases, the missing or invalid item aspect(s) shown under the corresponding violationData array, will also show up under this array with suggested value(s). | [optional] 
**product_recommendation** | [**ProductRecommendation**](ProductRecommendation.md) |  | [optional] 

## Example

```python
from openapi_client.models.corrective_recommendations import CorrectiveRecommendations

# TODO update the JSON string below
json = "{}"
# create an instance of CorrectiveRecommendations from a JSON string
corrective_recommendations_instance = CorrectiveRecommendations.from_json(json)
# print the JSON string representation of the object
print(CorrectiveRecommendations.to_json())

# convert the object into a dict
corrective_recommendations_dict = corrective_recommendations_instance.to_dict()
# create an instance of CorrectiveRecommendations from a dict
corrective_recommendations_from_dict = CorrectiveRecommendations.from_dict(corrective_recommendations_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


