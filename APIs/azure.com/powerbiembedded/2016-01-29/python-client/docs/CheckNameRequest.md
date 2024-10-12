# CheckNameRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Workspace collection name | [optional] 
**type** | **str** | Resource type | [optional] [default to 'Microsoft.PowerBI/workspaceCollections']

## Example

```python
from openapi_client.models.check_name_request import CheckNameRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CheckNameRequest from a JSON string
check_name_request_instance = CheckNameRequest.from_json(json)
# print the JSON string representation of the object
print(CheckNameRequest.to_json())

# convert the object into a dict
check_name_request_dict = check_name_request_instance.to_dict()
# create an instance of CheckNameRequest from a dict
check_name_request_from_dict = CheckNameRequest.from_dict(check_name_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


