# CountryOrders


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | [optional] 
**count** | **int** | Number of country orders. | [optional] 
**country** | **str** |  | [optional] 
**orders** | [**List[RegionOrders]**](RegionOrders.md) | Orders per region. | [optional] 

## Example

```python
from openapi_client.models.country_orders import CountryOrders

# TODO update the JSON string below
json = "{}"
# create an instance of CountryOrders from a JSON string
country_orders_instance = CountryOrders.from_json(json)
# print the JSON string representation of the object
print(CountryOrders.to_json())

# convert the object into a dict
country_orders_dict = country_orders_instance.to_dict()
# create an instance of CountryOrders from a dict
country_orders_from_dict = CountryOrders.from_dict(country_orders_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


