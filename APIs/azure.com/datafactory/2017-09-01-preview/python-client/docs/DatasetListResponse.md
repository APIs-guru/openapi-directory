# DatasetListResponse

A list of dataset resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link to the next page of results, if any remaining results exist. | [optional] 
**value** | [**List[DatasetResource]**](DatasetResource.md) | List of datasets. | 

## Example

```python
from openapi_client.models.dataset_list_response import DatasetListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DatasetListResponse from a JSON string
dataset_list_response_instance = DatasetListResponse.from_json(json)
# print the JSON string representation of the object
print(DatasetListResponse.to_json())

# convert the object into a dict
dataset_list_response_dict = dataset_list_response_instance.to_dict()
# create an instance of DatasetListResponse from a dict
dataset_list_response_from_dict = DatasetListResponse.from_dict(dataset_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


