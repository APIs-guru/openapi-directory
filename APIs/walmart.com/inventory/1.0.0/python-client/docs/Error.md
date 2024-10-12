# Error


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** |  | [optional] 
**causes** | [**List[GetMultiNodeInventoryForSkuAndAllShipnodes200ResponseNodesInnerErrorsInnerCausesInner]**](GetMultiNodeInventoryForSkuAndAllShipnodes200ResponseNodesInnerErrorsInnerCausesInner.md) |  | [optional] 
**code** | **str** |  | 
**description** | **str** |  | [optional] 
**error_identifiers** | **Dict[str, object]** |  | [optional] 
**var_field** | **str** |  | [optional] 
**info** | **str** |  | [optional] 
**severity** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.error import Error

# TODO update the JSON string below
json = "{}"
# create an instance of Error from a JSON string
error_instance = Error.from_json(json)
# print the JSON string representation of the object
print(Error.to_json())

# convert the object into a dict
error_dict = error_instance.to_dict()
# create an instance of Error from a dict
error_from_dict = Error.from_dict(error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


