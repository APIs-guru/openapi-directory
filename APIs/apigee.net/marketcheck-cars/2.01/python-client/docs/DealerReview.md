# DealerReview


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** | City of the dealer | [optional] 
**latitude** | **str** | Latutide for the dealer location | [optional] 
**longitude** | **str** | Longitude for the dealer location | [optional] 
**name** | **str** | Name of the dealer | [optional] 
**overall_reviews** | **float** | Overall reviews of the dealership | [optional] 
**review_components** | [**List[ReviewComponents]**](ReviewComponents.md) |  | [optional] 
**state** | **str** | State of the dealer | [optional] 
**street** | **str** | Street of the dealer | [optional] 
**zip** | **str** | Zip of the dealer | [optional] 

## Example

```python
from openapi_client.models.dealer_review import DealerReview

# TODO update the JSON string below
json = "{}"
# create an instance of DealerReview from a JSON string
dealer_review_instance = DealerReview.from_json(json)
# print the JSON string representation of the object
print(DealerReview.to_json())

# convert the object into a dict
dealer_review_dict = dealer_review_instance.to_dict()
# create an instance of DealerReview from a dict
dealer_review_from_dict = DealerReview.from_dict(dealer_review_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


