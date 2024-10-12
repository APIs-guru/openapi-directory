# FixableTotalByDigest

Per resource and severity counts of fixable and total vulnerabilities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fixable_count** | **str** | The number of fixable vulnerabilities associated with this resource. | [optional] 
**resource** | [**Resource**](Resource.md) |  | [optional] 
**severity** | **str** | The severity for this count. SEVERITY_UNSPECIFIED indicates total across all severities. | [optional] 
**total_count** | **str** | The total number of vulnerabilities associated with this resource. | [optional] 

## Example

```python
from openapi_client.models.fixable_total_by_digest import FixableTotalByDigest

# TODO update the JSON string below
json = "{}"
# create an instance of FixableTotalByDigest from a JSON string
fixable_total_by_digest_instance = FixableTotalByDigest.from_json(json)
# print the JSON string representation of the object
print(FixableTotalByDigest.to_json())

# convert the object into a dict
fixable_total_by_digest_dict = fixable_total_by_digest_instance.to_dict()
# create an instance of FixableTotalByDigest from a dict
fixable_total_by_digest_from_dict = FixableTotalByDigest.from_dict(fixable_total_by_digest_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


