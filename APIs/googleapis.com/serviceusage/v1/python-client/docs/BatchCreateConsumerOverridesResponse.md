# BatchCreateConsumerOverridesResponse

Response message for BatchCreateConsumerOverrides

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**overrides** | [**List[QuotaOverride]**](QuotaOverride.md) | The overrides that were created. | [optional] 

## Example

```python
from openapi_client.models.batch_create_consumer_overrides_response import BatchCreateConsumerOverridesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchCreateConsumerOverridesResponse from a JSON string
batch_create_consumer_overrides_response_instance = BatchCreateConsumerOverridesResponse.from_json(json)
# print the JSON string representation of the object
print(BatchCreateConsumerOverridesResponse.to_json())

# convert the object into a dict
batch_create_consumer_overrides_response_dict = batch_create_consumer_overrides_response_instance.to_dict()
# create an instance of BatchCreateConsumerOverridesResponse from a dict
batch_create_consumer_overrides_response_from_dict = BatchCreateConsumerOverridesResponse.from_dict(batch_create_consumer_overrides_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


