# NoResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason_code** | **str** | RESOURCE_UNKOWN | [optional] 
**source** | **str** | System. | [optional] 
**description** | **str** | Resource not found | [optional] 
**recoverable** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.no_resource import NoResource

# TODO update the JSON string below
json = "{}"
# create an instance of NoResource from a JSON string
no_resource_instance = NoResource.from_json(json)
# print the JSON string representation of the object
print(NoResource.to_json())

# convert the object into a dict
no_resource_dict = no_resource_instance.to_dict()
# create an instance of NoResource from a dict
no_resource_from_dict = NoResource.from_dict(no_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


