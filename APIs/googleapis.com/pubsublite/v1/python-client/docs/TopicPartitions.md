# TopicPartitions

Response for GetTopicPartitions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partition_count** | **str** | The number of partitions in the topic. | [optional] 

## Example

```python
from openapi_client.models.topic_partitions import TopicPartitions

# TODO update the JSON string below
json = "{}"
# create an instance of TopicPartitions from a JSON string
topic_partitions_instance = TopicPartitions.from_json(json)
# print the JSON string representation of the object
print(TopicPartitions.to_json())

# convert the object into a dict
topic_partitions_dict = topic_partitions_instance.to_dict()
# create an instance of TopicPartitions from a dict
topic_partitions_from_dict = TopicPartitions.from_dict(topic_partitions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


