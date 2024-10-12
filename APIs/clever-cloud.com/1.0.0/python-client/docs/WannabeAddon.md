# WannabeAddon


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**payment** | [**PaymentData**](PaymentData.md) |  | 
**plan** | **str** |  | 
**provider_id** | **str** |  | 
**region** | **str** |  | 

## Example

```python
from openapi_client.models.wannabe_addon import WannabeAddon

# TODO update the JSON string below
json = "{}"
# create an instance of WannabeAddon from a JSON string
wannabe_addon_instance = WannabeAddon.from_json(json)
# print the JSON string representation of the object
print(WannabeAddon.to_json())

# convert the object into a dict
wannabe_addon_dict = wannabe_addon_instance.to_dict()
# create an instance of WannabeAddon from a dict
wannabe_addon_from_dict = WannabeAddon.from_dict(wannabe_addon_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


