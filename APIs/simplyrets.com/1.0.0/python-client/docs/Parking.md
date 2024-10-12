# Parking

RETS MLS School Data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Parking features description | [optional] 
**leased** | **str** |  | [optional] 
**spaces** | **int** | Number of parking spaces | [optional] 

## Example

```python
from openapi_client.models.parking import Parking

# TODO update the JSON string below
json = "{}"
# create an instance of Parking from a JSON string
parking_instance = Parking.from_json(json)
# print the JSON string representation of the object
print(Parking.to_json())

# convert the object into a dict
parking_dict = parking_instance.to_dict()
# create an instance of Parking from a dict
parking_from_dict = Parking.from_dict(parking_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


