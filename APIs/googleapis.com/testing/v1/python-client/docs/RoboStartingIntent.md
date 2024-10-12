# RoboStartingIntent

Message for specifying the start activities to crawl.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**launcher_activity** | **object** | Specifies an intent that starts the main launcher activity. | [optional] 
**no_activity** | **object** | Skips the starting activity | [optional] 
**start_activity** | [**StartActivityIntent**](StartActivityIntent.md) |  | [optional] 
**timeout** | **str** | Timeout in seconds for each intent. | [optional] 

## Example

```python
from openapi_client.models.robo_starting_intent import RoboStartingIntent

# TODO update the JSON string below
json = "{}"
# create an instance of RoboStartingIntent from a JSON string
robo_starting_intent_instance = RoboStartingIntent.from_json(json)
# print the JSON string representation of the object
print(RoboStartingIntent.to_json())

# convert the object into a dict
robo_starting_intent_dict = robo_starting_intent_instance.to_dict()
# create an instance of RoboStartingIntent from a dict
robo_starting_intent_from_dict = RoboStartingIntent.from_dict(robo_starting_intent_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


