# ConsumerGroupProperties

Properties supplied to the Create Or Update Consumer Group operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | Exact time the message was created. | [optional] [readonly] 
**event_hub_path** | **str** | The path of the Event Hub. | [optional] [readonly] 
**updated_at** | **datetime** | The exact time the message was updated. | [optional] [readonly] 
**user_metadata** | **str** | The user metadata. | [optional] 

## Example

```python
from openapi_client.models.consumer_group_properties import ConsumerGroupProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ConsumerGroupProperties from a JSON string
consumer_group_properties_instance = ConsumerGroupProperties.from_json(json)
# print the JSON string representation of the object
print(ConsumerGroupProperties.to_json())

# convert the object into a dict
consumer_group_properties_dict = consumer_group_properties_instance.to_dict()
# create an instance of ConsumerGroupProperties from a dict
consumer_group_properties_from_dict = ConsumerGroupProperties.from_dict(consumer_group_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


