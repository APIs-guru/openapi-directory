# ImportConsumerOverridesResponse

Response message for ImportConsumerOverrides

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**overrides** | [**List[QuotaOverride]**](QuotaOverride.md) | The overrides that were created from the imported data. | [optional] 

## Example

```python
from openapi_client.models.import_consumer_overrides_response import ImportConsumerOverridesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ImportConsumerOverridesResponse from a JSON string
import_consumer_overrides_response_instance = ImportConsumerOverridesResponse.from_json(json)
# print the JSON string representation of the object
print(ImportConsumerOverridesResponse.to_json())

# convert the object into a dict
import_consumer_overrides_response_dict = import_consumer_overrides_response_instance.to_dict()
# create an instance of ImportConsumerOverridesResponse from a dict
import_consumer_overrides_response_from_dict = ImportConsumerOverridesResponse.from_dict(import_consumer_overrides_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


