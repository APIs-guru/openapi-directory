# RatingComponents


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actual_rating** | **float** | rating of car on that condition | [optional] 
**rating_condition** | **str** | Specifices rating condition parameter | [optional] 

## Example

```python
from openapi_client.models.rating_components import RatingComponents

# TODO update the JSON string below
json = "{}"
# create an instance of RatingComponents from a JSON string
rating_components_instance = RatingComponents.from_json(json)
# print the JSON string representation of the object
print(RatingComponents.to_json())

# convert the object into a dict
rating_components_dict = rating_components_instance.to_dict()
# create an instance of RatingComponents from a dict
rating_components_from_dict = RatingComponents.from_dict(rating_components_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


