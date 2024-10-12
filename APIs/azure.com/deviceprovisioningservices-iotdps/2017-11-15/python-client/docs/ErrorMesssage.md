# ErrorMesssage

Error response containing message and code.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | standard error code | [optional] 
**details** | **str** | detailed summary of error | [optional] 
**message** | **str** | standard error description | [optional] 

## Example

```python
from openapi_client.models.error_messsage import ErrorMesssage

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorMesssage from a JSON string
error_messsage_instance = ErrorMesssage.from_json(json)
# print the JSON string representation of the object
print(ErrorMesssage.to_json())

# convert the object into a dict
error_messsage_dict = error_messsage_instance.to_dict()
# create an instance of ErrorMesssage from a dict
error_messsage_from_dict = ErrorMesssage.from_dict(error_messsage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


