# QuotaProperties

Represents the properties needed for quota operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quota_mode** | **str** | Quota mode for this operation. | [optional] 

## Example

```python
from openapi_client.models.quota_properties import QuotaProperties

# TODO update the JSON string below
json = "{}"
# create an instance of QuotaProperties from a JSON string
quota_properties_instance = QuotaProperties.from_json(json)
# print the JSON string representation of the object
print(QuotaProperties.to_json())

# convert the object into a dict
quota_properties_dict = quota_properties_instance.to_dict()
# create an instance of QuotaProperties from a dict
quota_properties_from_dict = QuotaProperties.from_dict(quota_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


