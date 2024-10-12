# IEdmEntityContainer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**elements** | [**List[IEdmEntityContainerElement]**](IEdmEntityContainerElement.md) |  | [optional] [readonly] 
**name** | **str** |  | [optional] [readonly] 
**namespace** | **str** |  | [optional] [readonly] 
**schema_element_kind** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.i_edm_entity_container import IEdmEntityContainer

# TODO update the JSON string below
json = "{}"
# create an instance of IEdmEntityContainer from a JSON string
i_edm_entity_container_instance = IEdmEntityContainer.from_json(json)
# print the JSON string representation of the object
print(IEdmEntityContainer.to_json())

# convert the object into a dict
i_edm_entity_container_dict = i_edm_entity_container_instance.to_dict()
# create an instance of IEdmEntityContainer from a dict
i_edm_entity_container_from_dict = IEdmEntityContainer.from_dict(i_edm_entity_container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


