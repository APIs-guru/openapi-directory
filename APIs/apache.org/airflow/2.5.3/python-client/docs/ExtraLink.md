# ExtraLink

Additional links containing additional information about the task.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**class_ref** | [**ClassReference**](ClassReference.md) |  | [optional] 
**href** | **str** |  | [optional] [readonly] 
**name** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.extra_link import ExtraLink

# TODO update the JSON string below
json = "{}"
# create an instance of ExtraLink from a JSON string
extra_link_instance = ExtraLink.from_json(json)
# print the JSON string representation of the object
print(ExtraLink.to_json())

# convert the object into a dict
extra_link_dict = extra_link_instance.to_dict()
# create an instance of ExtraLink from a dict
extra_link_from_dict = ExtraLink.from_dict(extra_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


