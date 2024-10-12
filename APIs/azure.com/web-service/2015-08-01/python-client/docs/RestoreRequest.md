# RestoreRequest

Description of a restore request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** |  | [optional] 
**id** | **str** | Resource Id | [optional] 
**kind** | **str** | Kind of resource | [optional] 
**location** | **str** | Resource Location | 
**name** | **str** | Resource Name | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] 

## Example

```python
from openapi_client.models.restore_request import RestoreRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RestoreRequest from a JSON string
restore_request_instance = RestoreRequest.from_json(json)
# print the JSON string representation of the object
print(RestoreRequest.to_json())

# convert the object into a dict
restore_request_dict = restore_request_instance.to_dict()
# create an instance of RestoreRequest from a dict
restore_request_from_dict = RestoreRequest.from_dict(restore_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


