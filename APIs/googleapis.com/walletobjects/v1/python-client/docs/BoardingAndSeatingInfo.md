# BoardingAndSeatingInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boarding_door** | **str** | Set this field only if this flight boards through more than one door or bridge and you want to explicitly print the door location on the boarding pass. Most airlines route their passengers to the right door or bridge by refering to doors/bridges by the &#x60;seatClass&#x60;. In those cases &#x60;boardingDoor&#x60; should not be set. | [optional] 
**boarding_group** | **str** | The value of boarding group (or zone) this passenger shall board with. eg: \&quot;B\&quot; The label for this value will be determined by the &#x60;boardingPolicy&#x60; field in the &#x60;flightClass&#x60; referenced by this object. | [optional] 
**boarding_position** | **str** | The value of boarding position. eg: \&quot;76\&quot; | [optional] 
**boarding_privilege_image** | [**Image**](Image.md) |  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string &#x60;\&quot;walletobjects#boardingAndSeatingInfo\&quot;&#x60;. | [optional] 
**seat_assignment** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**seat_class** | **str** | The value of the seat class. eg: \&quot;Economy\&quot; or \&quot;Economy Plus\&quot; | [optional] 
**seat_number** | **str** | The value of passenger seat. If there is no specific identifier, use &#x60;seatAssignment&#x60; instead. eg: \&quot;25A\&quot; | [optional] 
**sequence_number** | **str** | The sequence number on the boarding pass. This usually matches the sequence in which the passengers checked in. Airline might use the number for manual boarding and bag tags. eg: \&quot;49\&quot; | [optional] 

## Example

```python
from openapi_client.models.boarding_and_seating_info import BoardingAndSeatingInfo

# TODO update the JSON string below
json = "{}"
# create an instance of BoardingAndSeatingInfo from a JSON string
boarding_and_seating_info_instance = BoardingAndSeatingInfo.from_json(json)
# print the JSON string representation of the object
print(BoardingAndSeatingInfo.to_json())

# convert the object into a dict
boarding_and_seating_info_dict = boarding_and_seating_info_instance.to_dict()
# create an instance of BoardingAndSeatingInfo from a dict
boarding_and_seating_info_from_dict = BoardingAndSeatingInfo.from_dict(boarding_and_seating_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


