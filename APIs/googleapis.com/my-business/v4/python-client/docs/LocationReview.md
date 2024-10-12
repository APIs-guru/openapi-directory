# LocationReview

Represents a review with location information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Location resource name. | [optional] 
**review** | [**Review**](Review.md) |  | [optional] 

## Example

```python
from openapi_client.models.location_review import LocationReview

# TODO update the JSON string below
json = "{}"
# create an instance of LocationReview from a JSON string
location_review_instance = LocationReview.from_json(json)
# print the JSON string representation of the object
print(LocationReview.to_json())

# convert the object into a dict
location_review_dict = location_review_instance.to_dict()
# create an instance of LocationReview from a dict
location_review_from_dict = LocationReview.from_dict(location_review_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


