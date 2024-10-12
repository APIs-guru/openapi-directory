# DeleteConsumerResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_id** | **str** | Unique consumer identifier. You can freely choose a consumer ID yourself. Most of the time, this is an ID of your internal data model that represents a user or account in your system (for example account:12345). If the consumer doesn&#39;t exist yet, Vault will upsert a consumer based on your ID. | [optional] 

## Example

```python
from openapi_client.models.delete_consumer_response_data import DeleteConsumerResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteConsumerResponseData from a JSON string
delete_consumer_response_data_instance = DeleteConsumerResponseData.from_json(json)
# print the JSON string representation of the object
print(DeleteConsumerResponseData.to_json())

# convert the object into a dict
delete_consumer_response_data_dict = delete_consumer_response_data_instance.to_dict()
# create an instance of DeleteConsumerResponseData from a dict
delete_consumer_response_data_from_dict = DeleteConsumerResponseData.from_dict(delete_consumer_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


