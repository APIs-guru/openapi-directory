# BatchCreateAdUnitMappingsResponse

Response containing a batch of created ad unit mappings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_unit_mappings** | [**List[AdUnitMapping]**](AdUnitMapping.md) | The Ad units mappings created under the requested account. | [optional] 

## Example

```python
from openapi_client.models.batch_create_ad_unit_mappings_response import BatchCreateAdUnitMappingsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchCreateAdUnitMappingsResponse from a JSON string
batch_create_ad_unit_mappings_response_instance = BatchCreateAdUnitMappingsResponse.from_json(json)
# print the JSON string representation of the object
print(BatchCreateAdUnitMappingsResponse.to_json())

# convert the object into a dict
batch_create_ad_unit_mappings_response_dict = batch_create_ad_unit_mappings_response_instance.to_dict()
# create an instance of BatchCreateAdUnitMappingsResponse from a dict
batch_create_ad_unit_mappings_response_from_dict = BatchCreateAdUnitMappingsResponse.from_dict(batch_create_ad_unit_mappings_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


