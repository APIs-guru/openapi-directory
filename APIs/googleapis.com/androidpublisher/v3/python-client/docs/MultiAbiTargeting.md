# MultiAbiTargeting

Targeting based on multiple abis.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternatives** | [**List[MultiAbi]**](MultiAbi.md) | Targeting of other sibling directories that were in the Bundle. For main splits this is targeting of other main splits. | [optional] 
**value** | [**List[MultiAbi]**](MultiAbi.md) | Value of a multi abi. | [optional] 

## Example

```python
from openapi_client.models.multi_abi_targeting import MultiAbiTargeting

# TODO update the JSON string below
json = "{}"
# create an instance of MultiAbiTargeting from a JSON string
multi_abi_targeting_instance = MultiAbiTargeting.from_json(json)
# print the JSON string representation of the object
print(MultiAbiTargeting.to_json())

# convert the object into a dict
multi_abi_targeting_dict = multi_abi_targeting_instance.to_dict()
# create an instance of MultiAbiTargeting from a dict
multi_abi_targeting_from_dict = MultiAbiTargeting.from_dict(multi_abi_targeting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


