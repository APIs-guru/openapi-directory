# CarLocation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** | City of the car | [optional] 
**county** | **str** | County of the car | [optional] 
**latitude** | **str** | Latitude component of car location | [optional] 
**longitude** | **str** | Longitude component of car location | [optional] 
**seller_name** | **str** | Seller name of the car | [optional] 
**street** | **str** | Street address of the car | [optional] 
**zip** | **str** | Zip/Postal code of the car | [optional] 

## Example

```python
from openapi_client.models.car_location import CarLocation

# TODO update the JSON string below
json = "{}"
# create an instance of CarLocation from a JSON string
car_location_instance = CarLocation.from_json(json)
# print the JSON string representation of the object
print(CarLocation.to_json())

# convert the object into a dict
car_location_dict = car_location_instance.to_dict()
# create an instance of CarLocation from a dict
car_location_from_dict = CarLocation.from_dict(car_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


