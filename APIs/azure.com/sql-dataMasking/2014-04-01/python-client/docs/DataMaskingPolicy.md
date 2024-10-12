# DataMaskingPolicy

Represents a database data masking policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | The kind of data masking policy. Metadata, used for Azure portal. | [optional] [readonly] 
**location** | **str** | The location of the data masking policy. | [optional] [readonly] 
**properties** | [**DataMaskingPolicyProperties**](DataMaskingPolicyProperties.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_masking_policy import DataMaskingPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of DataMaskingPolicy from a JSON string
data_masking_policy_instance = DataMaskingPolicy.from_json(json)
# print the JSON string representation of the object
print(DataMaskingPolicy.to_json())

# convert the object into a dict
data_masking_policy_dict = data_masking_policy_instance.to_dict()
# create an instance of DataMaskingPolicy from a dict
data_masking_policy_from_dict = DataMaskingPolicy.from_dict(data_masking_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


