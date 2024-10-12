# UsagesListResult

The list usages operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of results. | [optional] 
**value** | [**List[Usage]**](Usage.md) | The list network resource usages. | [optional] 

## Example

```python
from openapi_client.models.usages_list_result import UsagesListResult

# TODO update the JSON string below
json = "{}"
# create an instance of UsagesListResult from a JSON string
usages_list_result_instance = UsagesListResult.from_json(json)
# print the JSON string representation of the object
print(UsagesListResult.to_json())

# convert the object into a dict
usages_list_result_dict = usages_list_result_instance.to_dict()
# create an instance of UsagesListResult from a dict
usages_list_result_from_dict = UsagesListResult.from_dict(usages_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


