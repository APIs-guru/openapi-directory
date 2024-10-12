# QuotaStatus

Current state for a particular quota group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumed** | **int** | Quota consumed by this request. | [optional] 
**remaining** | **int** | Quota remaining after this request. | [optional] 

## Example

```python
from openapi_client.models.quota_status import QuotaStatus

# TODO update the JSON string below
json = "{}"
# create an instance of QuotaStatus from a JSON string
quota_status_instance = QuotaStatus.from_json(json)
# print the JSON string representation of the object
print(QuotaStatus.to_json())

# convert the object into a dict
quota_status_dict = quota_status_instance.to_dict()
# create an instance of QuotaStatus from a dict
quota_status_from_dict = QuotaStatus.from_dict(quota_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


