# TestOrderPickupDetailsPickupPerson


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. Full name of the pickup person. | [optional] 
**phone_number** | **str** | Required. The phone number of the person picking up the items. | [optional] 

## Example

```python
from openapi_client.models.test_order_pickup_details_pickup_person import TestOrderPickupDetailsPickupPerson

# TODO update the JSON string below
json = "{}"
# create an instance of TestOrderPickupDetailsPickupPerson from a JSON string
test_order_pickup_details_pickup_person_instance = TestOrderPickupDetailsPickupPerson.from_json(json)
# print the JSON string representation of the object
print(TestOrderPickupDetailsPickupPerson.to_json())

# convert the object into a dict
test_order_pickup_details_pickup_person_dict = test_order_pickup_details_pickup_person_instance.to_dict()
# create an instance of TestOrderPickupDetailsPickupPerson from a dict
test_order_pickup_details_pickup_person_from_dict = TestOrderPickupDetailsPickupPerson.from_dict(test_order_pickup_details_pickup_person_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


