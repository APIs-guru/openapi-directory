# RestoreResponse

Response for a restore site request

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
from openapi_client.models.restore_response import RestoreResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RestoreResponse from a JSON string
restore_response_instance = RestoreResponse.from_json(json)
# print the JSON string representation of the object
print(RestoreResponse.to_json())

# convert the object into a dict
restore_response_dict = restore_response_instance.to_dict()
# create an instance of RestoreResponse from a dict
restore_response_from_dict = RestoreResponse.from_dict(restore_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


