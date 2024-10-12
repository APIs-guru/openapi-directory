# LastModifiedInfo

Modification timestamp.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**time** | **str** | Timestamp of the last change in milliseconds since epoch. | [optional] 

## Example

```python
from openapi_client.models.last_modified_info import LastModifiedInfo

# TODO update the JSON string below
json = "{}"
# create an instance of LastModifiedInfo from a JSON string
last_modified_info_instance = LastModifiedInfo.from_json(json)
# print the JSON string representation of the object
print(LastModifiedInfo.to_json())

# convert the object into a dict
last_modified_info_dict = last_modified_info_instance.to_dict()
# create an instance of LastModifiedInfo from a dict
last_modified_info_from_dict = LastModifiedInfo.from_dict(last_modified_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


