# V1Beta1ImportProducerOverridesResponse

Response message for ImportProducerOverrides

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**overrides** | [**List[V1Beta1QuotaOverride]**](V1Beta1QuotaOverride.md) | The overrides that were created from the imported data. | [optional] 

## Example

```python
from openapi_client.models.v1_beta1_import_producer_overrides_response import V1Beta1ImportProducerOverridesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of V1Beta1ImportProducerOverridesResponse from a JSON string
v1_beta1_import_producer_overrides_response_instance = V1Beta1ImportProducerOverridesResponse.from_json(json)
# print the JSON string representation of the object
print(V1Beta1ImportProducerOverridesResponse.to_json())

# convert the object into a dict
v1_beta1_import_producer_overrides_response_dict = v1_beta1_import_producer_overrides_response_instance.to_dict()
# create an instance of V1Beta1ImportProducerOverridesResponse from a dict
v1_beta1_import_producer_overrides_response_from_dict = V1Beta1ImportProducerOverridesResponse.from_dict(v1_beta1_import_producer_overrides_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


