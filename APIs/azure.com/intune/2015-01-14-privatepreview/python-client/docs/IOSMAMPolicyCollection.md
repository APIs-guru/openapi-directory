# IOSMAMPolicyCollection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nextlink** | **str** | Gets the URL to get the next set of results. | [optional] [readonly] 
**value** | [**List[IOSMAMPolicy]**](IOSMAMPolicy.md) |  | 

## Example

```python
from openapi_client.models.iosmam_policy_collection import IOSMAMPolicyCollection

# TODO update the JSON string below
json = "{}"
# create an instance of IOSMAMPolicyCollection from a JSON string
iosmam_policy_collection_instance = IOSMAMPolicyCollection.from_json(json)
# print the JSON string representation of the object
print(IOSMAMPolicyCollection.to_json())

# convert the object into a dict
iosmam_policy_collection_dict = iosmam_policy_collection_instance.to_dict()
# create an instance of IOSMAMPolicyCollection from a dict
iosmam_policy_collection_from_dict = IOSMAMPolicyCollection.from_dict(iosmam_policy_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


