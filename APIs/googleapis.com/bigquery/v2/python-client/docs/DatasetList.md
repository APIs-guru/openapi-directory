# DatasetList

Response format for a page of results when listing datasets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datasets** | [**List[DatasetListDatasetsInner]**](DatasetListDatasetsInner.md) | An array of the dataset resources in the project. Each resource contains basic information. For full information about a particular dataset resource, use the Datasets: get method. This property is omitted when there are no datasets in the project. | [optional] 
**etag** | **str** | Output only. A hash value of the results page. You can use this property to determine if the page has changed since the last request. | [optional] [readonly] 
**kind** | **str** | Output only. The resource type. This property always returns the value \&quot;bigquery#datasetList\&quot; | [optional] [readonly] [default to 'bigquery#datasetList']
**next_page_token** | **str** | A token that can be used to request the next results page. This property is omitted on the final results page. | [optional] 
**unreachable** | **List[str]** | A list of skipped locations that were unreachable. For more information about BigQuery locations, see: https://cloud.google.com/bigquery/docs/locations. Example: \&quot;europe-west5\&quot; | [optional] 

## Example

```python
from openapi_client.models.dataset_list import DatasetList

# TODO update the JSON string below
json = "{}"
# create an instance of DatasetList from a JSON string
dataset_list_instance = DatasetList.from_json(json)
# print the JSON string representation of the object
print(DatasetList.to_json())

# convert the object into a dict
dataset_list_dict = dataset_list_instance.to_dict()
# create an instance of DatasetList from a dict
dataset_list_from_dict = DatasetList.from_dict(dataset_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


