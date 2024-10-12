# ProtectedItemsQueryParameter

Query parameter to enumerate protected items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recovery_plan_name** | **str** | The recovery plan filter. | [optional] 
**source_fabric_name** | **str** | The source fabric name filter. | [optional] 
**v_center_name** | **str** | The vCenter name filter. | [optional] 

## Example

```python
from openapi_client.models.protected_items_query_parameter import ProtectedItemsQueryParameter

# TODO update the JSON string below
json = "{}"
# create an instance of ProtectedItemsQueryParameter from a JSON string
protected_items_query_parameter_instance = ProtectedItemsQueryParameter.from_json(json)
# print the JSON string representation of the object
print(ProtectedItemsQueryParameter.to_json())

# convert the object into a dict
protected_items_query_parameter_dict = protected_items_query_parameter_instance.to_dict()
# create an instance of ProtectedItemsQueryParameter from a dict
protected_items_query_parameter_from_dict = ProtectedItemsQueryParameter.from_dict(protected_items_query_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


