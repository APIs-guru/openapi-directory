# Stop


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**Address**](Address.md) |  | [optional] 
**duration** | **int** | Specifies the duration of the pickup or delivery in seconds, e.g. how long it takes unload items at the customer site. | [optional] [default to 0]
**group** | **str** | Group this stop belongs to. See the group relation and [this post](https://discuss.graphhopper.com/t/4040) on how to utilize this. | [optional] 
**preparation_time** | **int** | Specifies the preparation time in seconds. It can be used to model parking lot search time since if you have 3 identical locations in a row, it only falls due once. | [optional] [default to 0]
**time_windows** | [**List[TimeWindow]**](TimeWindow.md) | Specifies an array of time window objects (see time window object below). For example, if an item needs to be delivered between 7am and 10am then specify the array as follows: [ { \&quot;earliest\&quot;: 25200, \&quot;latest\&quot; : 32400 } ] (starting the day from 0 in seconds). | [optional] 

## Example

```python
from openapi_client.models.stop import Stop

# TODO update the JSON string below
json = "{}"
# create an instance of Stop from a JSON string
stop_instance = Stop.from_json(json)
# print the JSON string representation of the object
print(Stop.to_json())

# convert the object into a dict
stop_dict = stop_instance.to_dict()
# create an instance of Stop from a dict
stop_from_dict = Stop.from_dict(stop_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


