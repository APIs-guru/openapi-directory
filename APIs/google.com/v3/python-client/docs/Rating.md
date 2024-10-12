# Rating

A rating within a vacation rentals Listing. NEXT ID: 4

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rating_scale** | **int** | Maximum rating possible. | [optional] 
**score** | **float** | The rating score. (e.g. 8.5) | [optional] 
**type** | **str** | The type of the rating. | [optional] 

## Example

```python
from openapi_client.models.rating import Rating

# TODO update the JSON string below
json = "{}"
# create an instance of Rating from a JSON string
rating_instance = Rating.from_json(json)
# print the JSON string representation of the object
print(Rating.to_json())

# convert the object into a dict
rating_dict = rating_instance.to_dict()
# create an instance of Rating from a dict
rating_from_dict = Rating.from_dict(rating_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


