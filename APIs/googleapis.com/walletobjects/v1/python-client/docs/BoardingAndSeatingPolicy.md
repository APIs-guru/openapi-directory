# BoardingAndSeatingPolicy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boarding_policy** | **str** | Indicates the policy the airline uses for boarding. If unset, Google will default to &#x60;zoneBased&#x60;. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string &#x60;\&quot;walletobjects#boardingAndSeatingPolicy\&quot;&#x60;. | [optional] 
**seat_class_policy** | **str** | Seating policy which dictates how we display the seat class. If unset, Google will default to &#x60;cabinBased&#x60;. | [optional] 

## Example

```python
from openapi_client.models.boarding_and_seating_policy import BoardingAndSeatingPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of BoardingAndSeatingPolicy from a JSON string
boarding_and_seating_policy_instance = BoardingAndSeatingPolicy.from_json(json)
# print the JSON string representation of the object
print(BoardingAndSeatingPolicy.to_json())

# convert the object into a dict
boarding_and_seating_policy_dict = boarding_and_seating_policy_instance.to_dict()
# create an instance of BoardingAndSeatingPolicy from a dict
boarding_and_seating_policy_from_dict = BoardingAndSeatingPolicy.from_dict(boarding_and_seating_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


