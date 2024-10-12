# PopularCars

Top 50 popular cars

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_top50** | [**List[BasePopular]**](BasePopular.md) | Array of all new top 50 cars | [optional] 
**used_top50** | [**List[BasePopular]**](BasePopular.md) | Array of all used top 50 cars | [optional] 

## Example

```python
from openapi_client.models.popular_cars import PopularCars

# TODO update the JSON string below
json = "{}"
# create an instance of PopularCars from a JSON string
popular_cars_instance = PopularCars.from_json(json)
# print the JSON string representation of the object
print(PopularCars.to_json())

# convert the object into a dict
popular_cars_dict = popular_cars_instance.to_dict()
# create an instance of PopularCars from a dict
popular_cars_from_dict = PopularCars.from_dict(popular_cars_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


