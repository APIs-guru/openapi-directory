# StatusScope

The scope of the status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**project** | [**ProjectId**](ProjectId.md) |  | [optional] 
**type** | **str** | The scope of the status. &#x60;GLOBAL&#x60; for company-managed projects and &#x60;PROJECT&#x60; for team-managed projects. | 

## Example

```python
from openapi_client.models.status_scope import StatusScope

# TODO update the JSON string below
json = "{}"
# create an instance of StatusScope from a JSON string
status_scope_instance = StatusScope.from_json(json)
# print the JSON string representation of the object
print(StatusScope.to_json())

# convert the object into a dict
status_scope_dict = status_scope_instance.to_dict()
# create an instance of StatusScope from a dict
status_scope_from_dict = StatusScope.from_dict(status_scope_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


