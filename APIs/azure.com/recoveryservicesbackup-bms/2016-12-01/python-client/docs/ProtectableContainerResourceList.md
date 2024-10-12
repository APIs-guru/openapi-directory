# ProtectableContainerResourceList

List of ProtectableContainer resources

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ProtectableContainerResource]**](ProtectableContainerResource.md) | List of resources. | [optional] 
**next_link** | **str** | The uri to fetch the next page of resources. Call ListNext() fetches next page of resources. | [optional] 

## Example

```python
from openapi_client.models.protectable_container_resource_list import ProtectableContainerResourceList

# TODO update the JSON string below
json = "{}"
# create an instance of ProtectableContainerResourceList from a JSON string
protectable_container_resource_list_instance = ProtectableContainerResourceList.from_json(json)
# print the JSON string representation of the object
print(ProtectableContainerResourceList.to_json())

# convert the object into a dict
protectable_container_resource_list_dict = protectable_container_resource_list_instance.to_dict()
# create an instance of ProtectableContainerResourceList from a dict
protectable_container_resource_list_from_dict = ProtectableContainerResourceList.from_dict(protectable_container_resource_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


