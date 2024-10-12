# QuotaList

List of quotas.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to next page. | [optional] 
**value** | [**List[Quota]**](Quota.md) | List of quotas. | [optional] 

## Example

```python
from openapi_client.models.quota_list import QuotaList

# TODO update the JSON string below
json = "{}"
# create an instance of QuotaList from a JSON string
quota_list_instance = QuotaList.from_json(json)
# print the JSON string representation of the object
print(QuotaList.to_json())

# convert the object into a dict
quota_list_dict = quota_list_instance.to_dict()
# create an instance of QuotaList from a dict
quota_list_from_dict = QuotaList.from_dict(quota_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


