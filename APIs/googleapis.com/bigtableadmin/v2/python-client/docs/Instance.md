# Instance

A collection of Bigtable Tables and the resources that serve them. All tables in an instance are served from all Clusters in the instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. A commit timestamp representing when this Instance was created. For instances created before this field was added (August 2021), this value is &#x60;seconds: 0, nanos: 1&#x60;. | [optional] [readonly] 
**display_name** | **str** | Required. The descriptive name for this instance as it appears in UIs. Can be changed at any time, but should be kept globally unique to avoid confusion. | [optional] 
**labels** | **Dict[str, str]** | Labels are a flexible and lightweight mechanism for organizing cloud resources into groups that reflect a customer&#39;s organizational needs and deployment strategies. They can be used to filter resources and aggregate metrics. * Label keys must be between 1 and 63 characters long and must conform to the regular expression: &#x60;\\p{Ll}\\p{Lo}{0,62}&#x60;. * Label values must be between 0 and 63 characters long and must conform to the regular expression: &#x60;[\\p{Ll}\\p{Lo}\\p{N}_-]{0,63}&#x60;. * No more than 64 labels can be associated with a given resource. * Keys and values must both be under 128 bytes. | [optional] 
**name** | **str** | The unique name of the instance. Values are of the form &#x60;projects/{project}/instances/a-z+[a-z0-9]&#x60;. | [optional] 
**satisfies_pzs** | **bool** | Output only. Reserved for future use. | [optional] [readonly] 
**state** | **str** | Output only. The current state of the instance. | [optional] [readonly] 
**type** | **str** | The type of the instance. Defaults to &#x60;PRODUCTION&#x60;. | [optional] 

## Example

```python
from openapi_client.models.instance import Instance

# TODO update the JSON string below
json = "{}"
# create an instance of Instance from a JSON string
instance_instance = Instance.from_json(json)
# print the JSON string representation of the object
print(Instance.to_json())

# convert the object into a dict
instance_dict = instance_instance.to_dict()
# create an instance of Instance from a dict
instance_from_dict = Instance.from_dict(instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


