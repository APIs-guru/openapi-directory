# Broker

SimplyRETS Broker Api

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**startdate** | **datetime** | Start Date | [optional] 

## Example

```python
from openapi_client.models.broker import Broker

# TODO update the JSON string below
json = "{}"
# create an instance of Broker from a JSON string
broker_instance = Broker.from_json(json)
# print the JSON string representation of the object
print(Broker.to_json())

# convert the object into a dict
broker_dict = broker_instance.to_dict()
# create an instance of Broker from a dict
broker_from_dict = Broker.from_dict(broker_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


