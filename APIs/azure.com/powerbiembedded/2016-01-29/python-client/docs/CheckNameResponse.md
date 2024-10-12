# CheckNameResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Message indicating an unavailable name due to a conflict, or a description of the naming rules that are violated. | [optional] 
**name_available** | **bool** | Specifies a Boolean value that indicates whether the specified Power BI Workspace Collection name is available to use. | [optional] 
**reason** | **str** | Reason why the workspace collection name cannot be used. | [optional] 

## Example

```python
from openapi_client.models.check_name_response import CheckNameResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CheckNameResponse from a JSON string
check_name_response_instance = CheckNameResponse.from_json(json)
# print the JSON string representation of the object
print(CheckNameResponse.to_json())

# convert the object into a dict
check_name_response_dict = check_name_response_instance.to_dict()
# create an instance of CheckNameResponse from a dict
check_name_response_from_dict = CheckNameResponse.from_dict(check_name_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


