# DynamicTargetingKeysListResponse

Dynamic Targeting Key List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dynamic_targeting_keys** | [**List[DynamicTargetingKey]**](DynamicTargetingKey.md) | Dynamic targeting key collection. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#dynamicTargetingKeysListResponse\&quot;. | [optional] 

## Example

```python
from openapi_client.models.dynamic_targeting_keys_list_response import DynamicTargetingKeysListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DynamicTargetingKeysListResponse from a JSON string
dynamic_targeting_keys_list_response_instance = DynamicTargetingKeysListResponse.from_json(json)
# print the JSON string representation of the object
print(DynamicTargetingKeysListResponse.to_json())

# convert the object into a dict
dynamic_targeting_keys_list_response_dict = dynamic_targeting_keys_list_response_instance.to_dict()
# create an instance of DynamicTargetingKeysListResponse from a dict
dynamic_targeting_keys_list_response_from_dict = DynamicTargetingKeysListResponse.from_dict(dynamic_targeting_keys_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


