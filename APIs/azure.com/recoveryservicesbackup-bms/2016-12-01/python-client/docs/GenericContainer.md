# GenericContainer

Base class for generic container of backup items

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extended_information** | [**GenericContainerExtendedInfo**](GenericContainerExtendedInfo.md) |  | [optional] 
**fabric_name** | **str** | Name of the container&#39;s fabric | [optional] 

## Example

```python
from openapi_client.models.generic_container import GenericContainer

# TODO update the JSON string below
json = "{}"
# create an instance of GenericContainer from a JSON string
generic_container_instance = GenericContainer.from_json(json)
# print the JSON string representation of the object
print(GenericContainer.to_json())

# convert the object into a dict
generic_container_dict = generic_container_instance.to_dict()
# create an instance of GenericContainer from a dict
generic_container_from_dict = GenericContainer.from_dict(generic_container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


