# UsagesResult

The response to a list usage request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[Usage]**](Usage.md) | The list of usages for Cognitive Service account. | [optional] [readonly] 

## Example

```python
from openapi_client.models.usages_result import UsagesResult

# TODO update the JSON string below
json = "{}"
# create an instance of UsagesResult from a JSON string
usages_result_instance = UsagesResult.from_json(json)
# print the JSON string representation of the object
print(UsagesResult.to_json())

# convert the object into a dict
usages_result_dict = usages_result_instance.to_dict()
# create an instance of UsagesResult from a dict
usages_result_from_dict = UsagesResult.from_dict(usages_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


