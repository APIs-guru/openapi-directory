# CarRankRequest

Ranking query request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**listing_ids** | **List[str]** |  | [optional] 
**ranking_criteria** | [**List[CarRankCriteria]**](CarRankCriteria.md) |  | [optional] 

## Example

```python
from openapi_client.models.car_rank_request import CarRankRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CarRankRequest from a JSON string
car_rank_request_instance = CarRankRequest.from_json(json)
# print the JSON string representation of the object
print(CarRankRequest.to_json())

# convert the object into a dict
car_rank_request_dict = car_rank_request_instance.to_dict()
# create an instance of CarRankRequest from a dict
car_rank_request_from_dict = CarRankRequest.from_dict(car_rank_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


