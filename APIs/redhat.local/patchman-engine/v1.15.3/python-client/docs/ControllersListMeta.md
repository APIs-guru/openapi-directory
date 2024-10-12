# ControllersListMeta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | [**Dict[str, ControllersFilterData]**](ControllersFilterData.md) |  | [optional] 
**limit** | **int** |  | [optional] 
**offset** | **int** |  | [optional] 
**search** | **str** |  | [optional] 
**sort** | **List[str]** |  | [optional] 
**subtotals** | **Dict[str, int]** |  | [optional] 
**total_items** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.controllers_list_meta import ControllersListMeta

# TODO update the JSON string below
json = "{}"
# create an instance of ControllersListMeta from a JSON string
controllers_list_meta_instance = ControllersListMeta.from_json(json)
# print the JSON string representation of the object
print(ControllersListMeta.to_json())

# convert the object into a dict
controllers_list_meta_dict = controllers_list_meta_instance.to_dict()
# create an instance of ControllersListMeta from a dict
controllers_list_meta_from_dict = ControllersListMeta.from_dict(controllers_list_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


