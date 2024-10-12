# IEdmEntityContainerElement


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container** | [**IEdmEntityContainer**](IEdmEntityContainer.md) |  | [optional] 
**container_element_kind** | **str** |  | [optional] [readonly] 
**name** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.i_edm_entity_container_element import IEdmEntityContainerElement

# TODO update the JSON string below
json = "{}"
# create an instance of IEdmEntityContainerElement from a JSON string
i_edm_entity_container_element_instance = IEdmEntityContainerElement.from_json(json)
# print the JSON string representation of the object
print(IEdmEntityContainerElement.to_json())

# convert the object into a dict
i_edm_entity_container_element_dict = i_edm_entity_container_element_instance.to_dict()
# create an instance of IEdmEntityContainerElement from a dict
i_edm_entity_container_element_from_dict = IEdmEntityContainerElement.from_dict(i_edm_entity_container_element_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


