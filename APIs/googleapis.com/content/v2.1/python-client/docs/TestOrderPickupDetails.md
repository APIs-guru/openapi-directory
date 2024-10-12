# TestOrderPickupDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location_code** | **str** | Required. Code of the location defined by provider or merchant. | [optional] 
**pickup_location_address** | [**TestOrderAddress**](TestOrderAddress.md) |  | [optional] 
**pickup_location_type** | **str** | Pickup location type. Acceptable values are: - \&quot;&#x60;locker&#x60;\&quot; - \&quot;&#x60;store&#x60;\&quot; - \&quot;&#x60;curbside&#x60;\&quot;  | [optional] 
**pickup_persons** | [**List[TestOrderPickupDetailsPickupPerson]**](TestOrderPickupDetailsPickupPerson.md) | Required. all pickup persons set by users. | [optional] 

## Example

```python
from openapi_client.models.test_order_pickup_details import TestOrderPickupDetails

# TODO update the JSON string below
json = "{}"
# create an instance of TestOrderPickupDetails from a JSON string
test_order_pickup_details_instance = TestOrderPickupDetails.from_json(json)
# print the JSON string representation of the object
print(TestOrderPickupDetails.to_json())

# convert the object into a dict
test_order_pickup_details_dict = test_order_pickup_details_instance.to_dict()
# create an instance of TestOrderPickupDetails from a dict
test_order_pickup_details_from_dict = TestOrderPickupDetails.from_dict(test_order_pickup_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


