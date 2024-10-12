# WannabeConsumer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_url** | [**URL**](URL.md) |  | 
**description** | **str** |  | [optional] 
**name** | **str** |  | 
**picture** | **str** |  | [optional] 
**rights** | [**WannabeConsumerRights**](WannabeConsumerRights.md) |  | 
**url** | [**URL**](URL.md) |  | 

## Example

```python
from openapi_client.models.wannabe_consumer import WannabeConsumer

# TODO update the JSON string below
json = "{}"
# create an instance of WannabeConsumer from a JSON string
wannabe_consumer_instance = WannabeConsumer.from_json(json)
# print the JSON string representation of the object
print(WannabeConsumer.to_json())

# convert the object into a dict
wannabe_consumer_dict = wannabe_consumer_instance.to_dict()
# create an instance of WannabeConsumer from a dict
wannabe_consumer_from_dict = WannabeConsumer.from_dict(wannabe_consumer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


