# DataPolicy

Represents the label-policy binding.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_masking_policy** | [**DataMaskingPolicy**](DataMaskingPolicy.md) |  | [optional] 
**data_policy_id** | **str** | User-assigned (human readable) ID of the data policy that needs to be unique within a project. Used as {data_policy_id} in part of the resource name. | [optional] 
**data_policy_type** | **str** | Type of data policy. | [optional] 
**name** | **str** | Output only. Resource name of this data policy, in the format of &#x60;projects/{project_number}/locations/{location_id}/dataPolicies/{data_policy_id}&#x60;. | [optional] [readonly] 
**policy_tag** | **str** | Policy tag resource name, in the format of &#x60;projects/{project_number}/locations/{location_id}/taxonomies/{taxonomy_id}/policyTags/{policyTag_id}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.data_policy import DataPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of DataPolicy from a JSON string
data_policy_instance = DataPolicy.from_json(json)
# print the JSON string representation of the object
print(DataPolicy.to_json())

# convert the object into a dict
data_policy_dict = data_policy_instance.to_dict()
# create an instance of DataPolicy from a dict
data_policy_from_dict = DataPolicy.from_dict(data_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


