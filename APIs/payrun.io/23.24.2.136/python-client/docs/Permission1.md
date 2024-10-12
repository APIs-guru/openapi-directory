# Permission1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The permissions&#39; description | [optional] 
**expression** | **str** | The permissions&#39; expression | [optional] 
**name** | **str** | The permissions&#39; name | [optional] 
**policy** | **str** | The permissions&#39; policy | [optional] 
**verbs** | **str** | The permissions&#39; verbs | [optional] 

## Example

```python
from openapi_client.models.permission1 import Permission1

# TODO update the JSON string below
json = "{}"
# create an instance of Permission1 from a JSON string
permission1_instance = Permission1.from_json(json)
# print the JSON string representation of the object
print(Permission1.to_json())

# convert the object into a dict
permission1_dict = permission1_instance.to_dict()
# create an instance of Permission1 from a dict
permission1_from_dict = Permission1.from_dict(permission1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


