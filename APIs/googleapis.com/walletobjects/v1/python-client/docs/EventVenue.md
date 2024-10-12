# EventVenue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string &#x60;\&quot;walletobjects#eventVenue\&quot;&#x60;. | [optional] 
**name** | [**LocalizedString**](LocalizedString.md) |  | [optional] 

## Example

```python
from openapi_client.models.event_venue import EventVenue

# TODO update the JSON string below
json = "{}"
# create an instance of EventVenue from a JSON string
event_venue_instance = EventVenue.from_json(json)
# print the JSON string representation of the object
print(EventVenue.to_json())

# convert the object into a dict
event_venue_dict = event_venue_instance.to_dict()
# create an instance of EventVenue from a dict
event_venue_from_dict = EventVenue.from_dict(event_venue_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


