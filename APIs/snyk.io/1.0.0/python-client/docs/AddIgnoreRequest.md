# AddIgnoreRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disregard_if_fixable** | **bool** | Only ignore the issue if no upgrade or patch is available. | 
**expires** | **str** | The timestamp that the issue will no longer be ignored. | [optional] 
**ignore_path** | **str** | The path to ignore (default is &#x60;*&#x60; which represents all paths). | [optional] 
**reason** | **str** | The reason that the issue was ignored. | [optional] 
**reason_type** | **str** | The classification of the ignore. | 

## Example

```python
from openapi_client.models.add_ignore_request import AddIgnoreRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddIgnoreRequest from a JSON string
add_ignore_request_instance = AddIgnoreRequest.from_json(json)
# print the JSON string representation of the object
print(AddIgnoreRequest.to_json())

# convert the object into a dict
add_ignore_request_dict = add_ignore_request_instance.to_dict()
# create an instance of AddIgnoreRequest from a dict
add_ignore_request_from_dict = AddIgnoreRequest.from_dict(add_ignore_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


