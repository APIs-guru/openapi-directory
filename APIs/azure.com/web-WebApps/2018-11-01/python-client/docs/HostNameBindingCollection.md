# HostNameBindingCollection

Collection of hostname bindings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[HostNameBinding]**](HostNameBinding.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.host_name_binding_collection import HostNameBindingCollection

# TODO update the JSON string below
json = "{}"
# create an instance of HostNameBindingCollection from a JSON string
host_name_binding_collection_instance = HostNameBindingCollection.from_json(json)
# print the JSON string representation of the object
print(HostNameBindingCollection.to_json())

# convert the object into a dict
host_name_binding_collection_dict = host_name_binding_collection_instance.to_dict()
# create an instance of HostNameBindingCollection from a dict
host_name_binding_collection_from_dict = HostNameBindingCollection.from_dict(host_name_binding_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


