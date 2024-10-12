# Topic

Metadata about a topic resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the topic. Structured like: projects/{project_number}/locations/{location}/topics/{topic_id} | [optional] 
**partition_config** | [**PartitionConfig**](PartitionConfig.md) |  | [optional] 
**reservation_config** | [**ReservationConfig**](ReservationConfig.md) |  | [optional] 
**retention_config** | [**RetentionConfig**](RetentionConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.topic import Topic

# TODO update the JSON string below
json = "{}"
# create an instance of Topic from a JSON string
topic_instance = Topic.from_json(json)
# print the JSON string representation of the object
print(Topic.to_json())

# convert the object into a dict
topic_dict = topic_instance.to_dict()
# create an instance of Topic from a dict
topic_from_dict = Topic.from_dict(topic_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


