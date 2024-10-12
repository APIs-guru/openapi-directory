# UsageListResponse

List of usages

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next list of DedicatedCloudNode | [optional] 
**value** | [**List[Usage]**](Usage.md) | The list of usages | [optional] [readonly] 

## Example

```python
from openapi_client.models.usage_list_response import UsageListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UsageListResponse from a JSON string
usage_list_response_instance = UsageListResponse.from_json(json)
# print the JSON string representation of the object
print(UsageListResponse.to_json())

# convert the object into a dict
usage_list_response_dict = usage_list_response_instance.to_dict()
# create an instance of UsageListResponse from a dict
usage_list_response_from_dict = UsageListResponse.from_dict(usage_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


