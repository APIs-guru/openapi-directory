# CarListingRank

Ranking query response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ranked_listing** | [**List[Listing]**](Listing.md) |  | [optional] 

## Example

```python
from openapi_client.models.car_listing_rank import CarListingRank

# TODO update the JSON string below
json = "{}"
# create an instance of CarListingRank from a JSON string
car_listing_rank_instance = CarListingRank.from_json(json)
# print the JSON string representation of the object
print(CarListingRank.to_json())

# convert the object into a dict
car_listing_rank_dict = car_listing_rank_instance.to_dict()
# create an instance of CarListingRank from a dict
car_listing_rank_from_dict = CarListingRank.from_dict(car_listing_rank_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


