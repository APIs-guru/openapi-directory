# RestorePolicyProperties

The blob service properties for blob restore policy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**days** | **int** | how long this blob can be restored. It should be great than zero and less than DeleteRetentionPolicy.days. | [optional] 
**enabled** | **bool** | Blob restore is enabled if set to true. | 

## Example

```python
from openapi_client.models.restore_policy_properties import RestorePolicyProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RestorePolicyProperties from a JSON string
restore_policy_properties_instance = RestorePolicyProperties.from_json(json)
# print the JSON string representation of the object
print(RestorePolicyProperties.to_json())

# convert the object into a dict
restore_policy_properties_dict = restore_policy_properties_instance.to_dict()
# create an instance of RestorePolicyProperties from a dict
restore_policy_properties_from_dict = RestorePolicyProperties.from_dict(restore_policy_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


