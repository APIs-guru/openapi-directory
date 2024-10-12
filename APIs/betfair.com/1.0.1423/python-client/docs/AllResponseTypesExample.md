# AllResponseTypesExample


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection** | [**ConnectionMessage**](ConnectionMessage.md) |  | [optional] 
**market_change_message** | [**MarketChangeMessage**](MarketChangeMessage.md) |  | [optional] 
**op_types** | **str** |  | [optional] 
**order_change_message** | [**OrderChangeMessage**](OrderChangeMessage.md) |  | [optional] 
**status** | [**StatusMessage**](StatusMessage.md) |  | [optional] 

## Example

```python
from openapi_client.models.all_response_types_example import AllResponseTypesExample

# TODO update the JSON string below
json = "{}"
# create an instance of AllResponseTypesExample from a JSON string
all_response_types_example_instance = AllResponseTypesExample.from_json(json)
# print the JSON string representation of the object
print(AllResponseTypesExample.to_json())

# convert the object into a dict
all_response_types_example_dict = all_response_types_example_instance.to_dict()
# create an instance of AllResponseTypesExample from a dict
all_response_types_example_from_dict = AllResponseTypesExample.from_dict(all_response_types_example_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


