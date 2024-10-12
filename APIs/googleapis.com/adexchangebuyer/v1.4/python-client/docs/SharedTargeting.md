# SharedTargeting


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exclusions** | [**List[TargetingValue]**](TargetingValue.md) | The list of values to exclude from targeting. Each value is AND&#39;d together. | [optional] 
**inclusions** | [**List[TargetingValue]**](TargetingValue.md) | The list of value to include as part of the targeting. Each value is OR&#39;d together. | [optional] 
**key** | **str** | The key representing the shared targeting criterion. | [optional] 

## Example

```python
from openapi_client.models.shared_targeting import SharedTargeting

# TODO update the JSON string below
json = "{}"
# create an instance of SharedTargeting from a JSON string
shared_targeting_instance = SharedTargeting.from_json(json)
# print the JSON string representation of the object
print(SharedTargeting.to_json())

# convert the object into a dict
shared_targeting_dict = shared_targeting_instance.to_dict()
# create an instance of SharedTargeting from a dict
shared_targeting_from_dict = SharedTargeting.from_dict(shared_targeting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


