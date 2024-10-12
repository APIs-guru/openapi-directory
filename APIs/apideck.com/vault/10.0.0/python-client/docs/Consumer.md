# Consumer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregated_request_count** | **float** |  | [optional] [readonly] 
**application_id** | **str** | ID of your Apideck Application | [optional] [readonly] 
**connections** | [**List[ConsumerConnection]**](ConsumerConnection.md) |  | [optional] [readonly] 
**consumer_id** | **str** | Unique consumer identifier. You can freely choose a consumer ID yourself. Most of the time, this is an ID of your internal data model that represents a user or account in your system (for example account:12345). If the consumer doesn&#39;t exist yet, Vault will upsert a consumer based on your ID. | 
**created** | **str** |  | [optional] [readonly] 
**metadata** | [**ConsumerMetadata**](ConsumerMetadata.md) |  | [optional] 
**modified** | **str** |  | [optional] [readonly] 
**request_count_updated** | **str** |  | [optional] [readonly] 
**request_counts** | [**RequestCountAllocation**](RequestCountAllocation.md) |  | [optional] 
**services** | **List[str]** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.consumer import Consumer

# TODO update the JSON string below
json = "{}"
# create an instance of Consumer from a JSON string
consumer_instance = Consumer.from_json(json)
# print the JSON string representation of the object
print(Consumer.to_json())

# convert the object into a dict
consumer_dict = consumer_instance.to_dict()
# create an instance of Consumer from a dict
consumer_from_dict = Consumer.from_dict(consumer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


