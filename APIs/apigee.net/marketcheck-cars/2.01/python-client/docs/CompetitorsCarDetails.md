# CompetitorsCarDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avg_market_value** | **str** | Estimated market value | [optional] 
**miles** | **str** | mileage of car | [optional] 
**name** | **str** | Current car name | [optional] 
**price** | **str** | price of car | [optional] 

## Example

```python
from openapi_client.models.competitors_car_details import CompetitorsCarDetails

# TODO update the JSON string below
json = "{}"
# create an instance of CompetitorsCarDetails from a JSON string
competitors_car_details_instance = CompetitorsCarDetails.from_json(json)
# print the JSON string representation of the object
print(CompetitorsCarDetails.to_json())

# convert the object into a dict
competitors_car_details_dict = competitors_car_details_instance.to_dict()
# create an instance of CompetitorsCarDetails from a dict
competitors_car_details_from_dict = CompetitorsCarDetails.from_dict(competitors_car_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


