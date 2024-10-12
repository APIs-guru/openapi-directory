# SessionResource

The session object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** |  | [optional] 
**etag** | **str** |  | [optional] 
**id** | **str** | Resource Manager Resource ID. | [optional] [readonly] 
**location** | **str** | Resource Manager Resource Location. | [optional] [readonly] 
**name** | **str** | Resource Manager Resource Name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource Manager Resource Tags. | [optional] 
**type** | **str** | Resource Manager Resource Type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.session_resource import SessionResource

# TODO update the JSON string below
json = "{}"
# create an instance of SessionResource from a JSON string
session_resource_instance = SessionResource.from_json(json)
# print the JSON string representation of the object
print(SessionResource.to_json())

# convert the object into a dict
session_resource_dict = session_resource_instance.to_dict()
# create an instance of SessionResource from a dict
session_resource_from_dict = SessionResource.from_dict(session_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


