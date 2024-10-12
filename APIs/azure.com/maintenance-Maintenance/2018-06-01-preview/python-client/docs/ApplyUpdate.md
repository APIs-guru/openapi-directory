# ApplyUpdate

Apply Update request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ApplyUpdateProperties**](ApplyUpdateProperties.md) |  | [optional] 
**id** | **str** | Fully qualified identifier of the resource | [optional] [readonly] 
**name** | **str** | Name of the resource | [optional] [readonly] 
**type** | **str** | Type of the resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.apply_update import ApplyUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of ApplyUpdate from a JSON string
apply_update_instance = ApplyUpdate.from_json(json)
# print the JSON string representation of the object
print(ApplyUpdate.to_json())

# convert the object into a dict
apply_update_dict = apply_update_instance.to_dict()
# create an instance of ApplyUpdate from a dict
apply_update_from_dict = ApplyUpdate.from_dict(apply_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


