# UsageInfo

Information about how much space and how many files in the file system the ImageStore is using in this category

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_count** | **str** | the number of all files in this category | [optional] 
**used_space** | **str** | the size of all files in this category | [optional] 

## Example

```python
from openapi_client.models.usage_info import UsageInfo

# TODO update the JSON string below
json = "{}"
# create an instance of UsageInfo from a JSON string
usage_info_instance = UsageInfo.from_json(json)
# print the JSON string representation of the object
print(UsageInfo.to_json())

# convert the object into a dict
usage_info_dict = usage_info_instance.to_dict()
# create an instance of UsageInfo from a dict
usage_info_from_dict = UsageInfo.from_dict(usage_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


