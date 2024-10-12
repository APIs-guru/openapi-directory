# SafetyRating

Describes the Safety Ratings of current listing

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**driver_front_rating** | **float** | Driver front rating of the Listing on scale 1-5 | [optional] 
**driver_side_rating** | **float** | Driver Side rating of the Listing on scale 1-5 | [optional] 
**overall_rating** | **float** | Overall rating of the Listing on scale 1-5 | [optional] 
**passenger_front_rating** | **float** | Passenger front rating of the Listing on scale 1-5 | [optional] 
**roll_over_rating** | **float** | Roll Over rating of the Listing on scale 1-5 | [optional] 

## Example

```python
from openapi_client.models.safety_rating import SafetyRating

# TODO update the JSON string below
json = "{}"
# create an instance of SafetyRating from a JSON string
safety_rating_instance = SafetyRating.from_json(json)
# print the JSON string representation of the object
print(SafetyRating.to_json())

# convert the object into a dict
safety_rating_dict = safety_rating_instance.to_dict()
# create an instance of SafetyRating from a dict
safety_rating_from_dict = SafetyRating.from_dict(safety_rating_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


