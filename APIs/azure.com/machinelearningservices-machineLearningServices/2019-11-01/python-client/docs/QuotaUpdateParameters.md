# QuotaUpdateParameters

Quota update parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[QuotaBaseProperties]**](QuotaBaseProperties.md) | The list for update quota. | [optional] 

## Example

```python
from openapi_client.models.quota_update_parameters import QuotaUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of QuotaUpdateParameters from a JSON string
quota_update_parameters_instance = QuotaUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(QuotaUpdateParameters.to_json())

# convert the object into a dict
quota_update_parameters_dict = quota_update_parameters_instance.to_dict()
# create an instance of QuotaUpdateParameters from a dict
quota_update_parameters_from_dict = QuotaUpdateParameters.from_dict(quota_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


