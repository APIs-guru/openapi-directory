# ReferenceDataSetResource

A reference data set provides metadata about the events in an environment. Metadata in the reference data set will be joined with events as they are read from event sources. The metadata that makes up the reference data set is uploaded or modified through the Time Series Insights data plane APIs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ReferenceDataSetResourceProperties**](ReferenceDataSetResourceProperties.md) |  | [optional] 
**location** | **str** | Resource location | 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**id** | **str** | Resource Id | [optional] [readonly] 
**name** | **str** | Resource name | [optional] [readonly] 
**type** | **str** | Resource type | [optional] [readonly] 

## Example

```python
from openapi_client.models.reference_data_set_resource import ReferenceDataSetResource

# TODO update the JSON string below
json = "{}"
# create an instance of ReferenceDataSetResource from a JSON string
reference_data_set_resource_instance = ReferenceDataSetResource.from_json(json)
# print the JSON string representation of the object
print(ReferenceDataSetResource.to_json())

# convert the object into a dict
reference_data_set_resource_dict = reference_data_set_resource_instance.to_dict()
# create an instance of ReferenceDataSetResource from a dict
reference_data_set_resource_from_dict = ReferenceDataSetResource.from_dict(reference_data_set_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


