# DealerRating


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** | City of the dealer | [optional] 
**latitude** | **str** | Latutide for the dealer location | [optional] 
**longitude** | **str** | Longitude for the dealer location | [optional] 
**name** | **str** | Name of the dealer | [optional] 
**overall_rating** | **float** | Overall rating of the dealership on scale 1-5 | [optional] 
**rating_components** | [**List[RatingComponents]**](RatingComponents.md) |  | [optional] 
**state** | **str** | State of the dealer | [optional] 
**street** | **str** | Street of the dealer | [optional] 
**zip** | **str** | Zip of the dealer | [optional] 

## Example

```python
from openapi_client.models.dealer_rating import DealerRating

# TODO update the JSON string below
json = "{}"
# create an instance of DealerRating from a JSON string
dealer_rating_instance = DealerRating.from_json(json)
# print the JSON string representation of the object
print(DealerRating.to_json())

# convert the object into a dict
dealer_rating_dict = dealer_rating_instance.to_dict()
# create an instance of DealerRating from a dict
dealer_rating_from_dict = DealerRating.from_dict(dealer_rating_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


