# CarRankResponse

Ranking query response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**num_ranked** | **int** | The number of listings ranked | [optional] 
**ranked_listings** | [**List[CarListingRank]**](CarListingRank.md) |  | [optional] 

## Example

```python
from openapi_client.models.car_rank_response import CarRankResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CarRankResponse from a JSON string
car_rank_response_instance = CarRankResponse.from_json(json)
# print the JSON string representation of the object
print(CarRankResponse.to_json())

# convert the object into a dict
car_rank_response_dict = car_rank_response_instance.to_dict()
# create an instance of CarRankResponse from a dict
car_rank_response_from_dict = CarRankResponse.from_dict(car_rank_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


