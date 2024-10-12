# SkippedDetail

Details for an outcome with a SKIPPED outcome summary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**incompatible_app_version** | **bool** | If the App doesn&#39;t support the specific API level. | [optional] 
**incompatible_architecture** | **bool** | If the App doesn&#39;t run on the specific architecture, for example, x86. | [optional] 
**incompatible_device** | **bool** | If the requested OS version doesn&#39;t run on the specific device model. | [optional] 

## Example

```python
from openapi_client.models.skipped_detail import SkippedDetail

# TODO update the JSON string below
json = "{}"
# create an instance of SkippedDetail from a JSON string
skipped_detail_instance = SkippedDetail.from_json(json)
# print the JSON string representation of the object
print(SkippedDetail.to_json())

# convert the object into a dict
skipped_detail_dict = skipped_detail_instance.to_dict()
# create an instance of SkippedDetail from a dict
skipped_detail_from_dict = SkippedDetail.from_dict(skipped_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


