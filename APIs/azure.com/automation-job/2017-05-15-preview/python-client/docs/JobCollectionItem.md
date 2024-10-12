# JobCollectionItem

Job collection item properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**JobCollectionItemProperties**](JobCollectionItemProperties.md) |  | 
**id** | **str** | Fully qualified resource Id for the resource | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_collection_item import JobCollectionItem

# TODO update the JSON string below
json = "{}"
# create an instance of JobCollectionItem from a JSON string
job_collection_item_instance = JobCollectionItem.from_json(json)
# print the JSON string representation of the object
print(JobCollectionItem.to_json())

# convert the object into a dict
job_collection_item_dict = job_collection_item_instance.to_dict()
# create an instance of JobCollectionItem from a dict
job_collection_item_from_dict = JobCollectionItem.from_dict(job_collection_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


