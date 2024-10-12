# CompetitorsPoint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_car** | [**CompetitorsCarDetails**](CompetitorsCarDetails.md) |  | [optional] 
**same_car_models** | [**List[CompetitorsSameCars]**](CompetitorsSameCars.md) |  | [optional] 
**similar_car_models** | [**List[CompetitorsSimilarCars]**](CompetitorsSimilarCars.md) |  | [optional] 

## Example

```python
from openapi_client.models.competitors_point import CompetitorsPoint

# TODO update the JSON string below
json = "{}"
# create an instance of CompetitorsPoint from a JSON string
competitors_point_instance = CompetitorsPoint.from_json(json)
# print the JSON string representation of the object
print(CompetitorsPoint.to_json())

# convert the object into a dict
competitors_point_dict = competitors_point_instance.to_dict()
# create an instance of CompetitorsPoint from a dict
competitors_point_from_dict = CompetitorsPoint.from_dict(competitors_point_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


