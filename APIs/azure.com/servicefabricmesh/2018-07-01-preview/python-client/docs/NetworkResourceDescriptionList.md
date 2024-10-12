# NetworkResourceDescriptionList

A pageable list of network resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to fetch the next page of the list. | [optional] 
**value** | [**List[NetworkResourceDescription]**](NetworkResourceDescription.md) | One page of the list. | [optional] 

## Example

```python
from openapi_client.models.network_resource_description_list import NetworkResourceDescriptionList

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkResourceDescriptionList from a JSON string
network_resource_description_list_instance = NetworkResourceDescriptionList.from_json(json)
# print the JSON string representation of the object
print(NetworkResourceDescriptionList.to_json())

# convert the object into a dict
network_resource_description_list_dict = network_resource_description_list_instance.to_dict()
# create an instance of NetworkResourceDescriptionList from a dict
network_resource_description_list_from_dict = NetworkResourceDescriptionList.from_dict(network_resource_description_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


