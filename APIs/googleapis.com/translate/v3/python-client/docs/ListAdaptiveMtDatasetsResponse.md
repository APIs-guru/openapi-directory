# ListAdaptiveMtDatasetsResponse

A list of AdaptiveMtDatasets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adaptive_mt_datasets** | [**List[AdaptiveMtDataset]**](AdaptiveMtDataset.md) | Output only. A list of Adaptive MT datasets. | [optional] [readonly] 
**next_page_token** | **str** | Optional. A token to retrieve a page of results. Pass this value in the [ListAdaptiveMtDatasetsRequest.page_token] field in the subsequent call to &#x60;ListAdaptiveMtDatasets&#x60; method to retrieve the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_adaptive_mt_datasets_response import ListAdaptiveMtDatasetsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAdaptiveMtDatasetsResponse from a JSON string
list_adaptive_mt_datasets_response_instance = ListAdaptiveMtDatasetsResponse.from_json(json)
# print the JSON string representation of the object
print(ListAdaptiveMtDatasetsResponse.to_json())

# convert the object into a dict
list_adaptive_mt_datasets_response_dict = list_adaptive_mt_datasets_response_instance.to_dict()
# create an instance of ListAdaptiveMtDatasetsResponse from a dict
list_adaptive_mt_datasets_response_from_dict = ListAdaptiveMtDatasetsResponse.from_dict(list_adaptive_mt_datasets_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


