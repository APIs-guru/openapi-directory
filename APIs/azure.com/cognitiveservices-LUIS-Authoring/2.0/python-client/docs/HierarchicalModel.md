# HierarchicalModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**children** | **List[str]** |  | [optional] 
**inherits** | [**PrebuiltDomainObject**](PrebuiltDomainObject.md) |  | [optional] 
**name** | **str** |  | [optional] 
**roles** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.hierarchical_model import HierarchicalModel

# TODO update the JSON string below
json = "{}"
# create an instance of HierarchicalModel from a JSON string
hierarchical_model_instance = HierarchicalModel.from_json(json)
# print the JSON string representation of the object
print(HierarchicalModel.to_json())

# convert the object into a dict
hierarchical_model_dict = hierarchical_model_instance.to_dict()
# create an instance of HierarchicalModel from a dict
hierarchical_model_from_dict = HierarchicalModel.from_dict(hierarchical_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


