# UsageDetail

An usage detail resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Specifies the kind of usage details. | 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.usage_detail import UsageDetail

# TODO update the JSON string below
json = "{}"
# create an instance of UsageDetail from a JSON string
usage_detail_instance = UsageDetail.from_json(json)
# print the JSON string representation of the object
print(UsageDetail.to_json())

# convert the object into a dict
usage_detail_dict = usage_detail_instance.to_dict()
# create an instance of UsageDetail from a dict
usage_detail_from_dict = UsageDetail.from_dict(usage_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


