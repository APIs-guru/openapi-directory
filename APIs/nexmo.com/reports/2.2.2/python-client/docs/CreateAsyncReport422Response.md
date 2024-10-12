# CreateAsyncReport422Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** |  | [optional] 
**instance** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.create_async_report422_response import CreateAsyncReport422Response

# TODO update the JSON string below
json = "{}"
# create an instance of CreateAsyncReport422Response from a JSON string
create_async_report422_response_instance = CreateAsyncReport422Response.from_json(json)
# print the JSON string representation of the object
print(CreateAsyncReport422Response.to_json())

# convert the object into a dict
create_async_report422_response_dict = create_async_report422_response_instance.to_dict()
# create an instance of CreateAsyncReport422Response from a dict
create_async_report422_response_from_dict = CreateAsyncReport422Response.from_dict(create_async_report422_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


