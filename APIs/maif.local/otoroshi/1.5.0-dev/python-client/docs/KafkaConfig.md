# KafkaConfig

The configuration for kafka access

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_pass** | **str** | Optional keypass | [optional] 
**key_store** | **str** | Optional path to keystore | [optional] 
**servers** | **List[str]** | URLs of the kafka servers | 
**topic** | **str** | Optional kafka topic (otoroshi-events by default) | [optional] 
**trustore** | **str** | Optional path to trustore | [optional] 

## Example

```python
from openapi_client.models.kafka_config import KafkaConfig

# TODO update the JSON string below
json = "{}"
# create an instance of KafkaConfig from a JSON string
kafka_config_instance = KafkaConfig.from_json(json)
# print the JSON string representation of the object
print(KafkaConfig.to_json())

# convert the object into a dict
kafka_config_dict = kafka_config_instance.to_dict()
# create an instance of KafkaConfig from a dict
kafka_config_from_dict = KafkaConfig.from_dict(kafka_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


