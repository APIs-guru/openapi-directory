# PrivateAccess

Description of the parameters of Private Access for a Web Site.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | PrivateAccess resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.private_access import PrivateAccess

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateAccess from a JSON string
private_access_instance = PrivateAccess.from_json(json)
# print the JSON string representation of the object
print(PrivateAccess.to_json())

# convert the object into a dict
private_access_dict = private_access_instance.to_dict()
# create an instance of PrivateAccess from a dict
private_access_from_dict = PrivateAccess.from_dict(private_access_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


