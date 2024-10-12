# AndroidMAMPolicyCollection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nextlink** | **str** | Gets the URL to get the next set of results. | [optional] [readonly] 
**value** | [**List[AndroidMAMPolicy]**](AndroidMAMPolicy.md) |  | 

## Example

```python
from openapi_client.models.android_mam_policy_collection import AndroidMAMPolicyCollection

# TODO update the JSON string below
json = "{}"
# create an instance of AndroidMAMPolicyCollection from a JSON string
android_mam_policy_collection_instance = AndroidMAMPolicyCollection.from_json(json)
# print the JSON string representation of the object
print(AndroidMAMPolicyCollection.to_json())

# convert the object into a dict
android_mam_policy_collection_dict = android_mam_policy_collection_instance.to_dict()
# create an instance of AndroidMAMPolicyCollection from a dict
android_mam_policy_collection_from_dict = AndroidMAMPolicyCollection.from_dict(android_mam_policy_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


