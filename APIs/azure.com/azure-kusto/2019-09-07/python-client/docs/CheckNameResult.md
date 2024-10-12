# CheckNameResult

The result returned from a check name availability request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Message indicating an unavailable name due to a conflict, or a description of the naming rules that are violated. | [optional] 
**name** | **str** | The name that was checked. | [optional] 
**name_available** | **bool** | Specifies a Boolean value that indicates if the name is available. | [optional] 
**reason** | **str** | Message providing the reason why the given name is invalid. | [optional] 

## Example

```python
from openapi_client.models.check_name_result import CheckNameResult

# TODO update the JSON string below
json = "{}"
# create an instance of CheckNameResult from a JSON string
check_name_result_instance = CheckNameResult.from_json(json)
# print the JSON string representation of the object
print(CheckNameResult.to_json())

# convert the object into a dict
check_name_result_dict = check_name_result_instance.to_dict()
# create an instance of CheckNameResult from a dict
check_name_result_from_dict = CheckNameResult.from_dict(check_name_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


