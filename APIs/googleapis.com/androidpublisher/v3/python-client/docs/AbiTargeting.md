# AbiTargeting

Targeting based on Abi.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternatives** | [**List[Abi]**](Abi.md) | Targeting of other sibling directories that were in the Bundle. For main splits this is targeting of other main splits. | [optional] 
**value** | [**List[Abi]**](Abi.md) | Value of an abi. | [optional] 

## Example

```python
from openapi_client.models.abi_targeting import AbiTargeting

# TODO update the JSON string below
json = "{}"
# create an instance of AbiTargeting from a JSON string
abi_targeting_instance = AbiTargeting.from_json(json)
# print the JSON string representation of the object
print(AbiTargeting.to_json())

# convert the object into a dict
abi_targeting_dict = abi_targeting_instance.to_dict()
# create an instance of AbiTargeting from a dict
abi_targeting_from_dict = AbiTargeting.from_dict(abi_targeting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


