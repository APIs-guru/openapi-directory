# HandledError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** |  | [optional] 
**device_name** | **str** |  | [optional] 
**error_id** | **str** |  | [optional] 
**has_attachments** | **bool** |  | [optional] 
**has_breadcrumbs** | **bool** |  | [optional] 
**language** | **str** |  | [optional] 
**os_type** | **str** |  | [optional] 
**os_version** | **str** |  | [optional] 
**timestamp** | **datetime** |  | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.handled_error import HandledError

# TODO update the JSON string below
json = "{}"
# create an instance of HandledError from a JSON string
handled_error_instance = HandledError.from_json(json)
# print the JSON string representation of the object
print(HandledError.to_json())

# convert the object into a dict
handled_error_dict = handled_error_instance.to_dict()
# create an instance of HandledError from a dict
handled_error_from_dict = HandledError.from_dict(handled_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


