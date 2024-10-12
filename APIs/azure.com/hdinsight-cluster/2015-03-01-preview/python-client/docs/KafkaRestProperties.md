# KafkaRestProperties

The kafka rest proxy configuration which contains AAD security group information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_group_info** | [**ClientGroupInfo**](ClientGroupInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.kafka_rest_properties import KafkaRestProperties

# TODO update the JSON string below
json = "{}"
# create an instance of KafkaRestProperties from a JSON string
kafka_rest_properties_instance = KafkaRestProperties.from_json(json)
# print the JSON string representation of the object
print(KafkaRestProperties.to_json())

# convert the object into a dict
kafka_rest_properties_dict = kafka_rest_properties_instance.to_dict()
# create an instance of KafkaRestProperties from a dict
kafka_rest_properties_from_dict = KafkaRestProperties.from_dict(kafka_rest_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


