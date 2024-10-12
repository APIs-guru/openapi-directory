# DataMaskingPolicyProperties

The properties of a database data masking policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_principals** | **str** | The list of the application principals. This is a legacy parameter and is no longer used. | [optional] [readonly] 
**data_masking_state** | **str** | The state of the data masking policy. | 
**exempt_principals** | **str** | The list of the exempt principals. Specifies the semicolon-separated list of database users for which the data masking policy does not apply. The specified users receive data results without masking for all of the database queries. | [optional] 
**masking_level** | **str** | The masking level. This is a legacy parameter and is no longer used. | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_masking_policy_properties import DataMaskingPolicyProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DataMaskingPolicyProperties from a JSON string
data_masking_policy_properties_instance = DataMaskingPolicyProperties.from_json(json)
# print the JSON string representation of the object
print(DataMaskingPolicyProperties.to_json())

# convert the object into a dict
data_masking_policy_properties_dict = data_masking_policy_properties_instance.to_dict()
# create an instance of DataMaskingPolicyProperties from a dict
data_masking_policy_properties_from_dict = DataMaskingPolicyProperties.from_dict(data_masking_policy_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


