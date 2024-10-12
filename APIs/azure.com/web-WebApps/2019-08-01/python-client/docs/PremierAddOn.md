# PremierAddOn

Premier add-on.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | PremierAddOn resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**location** | **str** | Resource Location. | 
**name** | **str** | Resource Name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.premier_add_on import PremierAddOn

# TODO update the JSON string below
json = "{}"
# create an instance of PremierAddOn from a JSON string
premier_add_on_instance = PremierAddOn.from_json(json)
# print the JSON string representation of the object
print(PremierAddOn.to_json())

# convert the object into a dict
premier_add_on_dict = premier_add_on_instance.to_dict()
# create an instance of PremierAddOn from a dict
premier_add_on_from_dict = PremierAddOn.from_dict(premier_add_on_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


