# JobCollectionProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**quota** | [**JobCollectionQuota**](JobCollectionQuota.md) |  | [optional] 
**sku** | [**Sku**](Sku.md) |  | [optional] 
**state** | **str** | Gets or sets the state. | [optional] 

## Example

```python
from openapi_client.models.job_collection_properties import JobCollectionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of JobCollectionProperties from a JSON string
job_collection_properties_instance = JobCollectionProperties.from_json(json)
# print the JSON string representation of the object
print(JobCollectionProperties.to_json())

# convert the object into a dict
job_collection_properties_dict = job_collection_properties_instance.to_dict()
# create an instance of JobCollectionProperties from a dict
job_collection_properties_from_dict = JobCollectionProperties.from_dict(job_collection_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


