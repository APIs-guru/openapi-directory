# UpdateConsumerConfigRequest

Request to update the configuration of a service networking connection including the import/export of custom routes and subnetwork routes with public IP.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_config** | [**ConsumerConfig**](ConsumerConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_consumer_config_request import UpdateConsumerConfigRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateConsumerConfigRequest from a JSON string
update_consumer_config_request_instance = UpdateConsumerConfigRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateConsumerConfigRequest.to_json())

# convert the object into a dict
update_consumer_config_request_dict = update_consumer_config_request_instance.to_dict()
# create an instance of UpdateConsumerConfigRequest from a dict
update_consumer_config_request_from_dict = UpdateConsumerConfigRequest.from_dict(update_consumer_config_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


