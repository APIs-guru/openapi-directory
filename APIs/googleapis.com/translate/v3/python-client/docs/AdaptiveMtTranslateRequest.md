# AdaptiveMtTranslateRequest

The request for sending an AdaptiveMt translation query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **List[str]** | Required. The content of the input in string format. For now only one sentence per request is supported. | [optional] 
**dataset** | **str** | Required. The resource name for the dataset to use for adaptive MT. &#x60;projects/{project}/locations/{location-id}/adaptiveMtDatasets/{dataset}&#x60; | [optional] 

## Example

```python
from openapi_client.models.adaptive_mt_translate_request import AdaptiveMtTranslateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AdaptiveMtTranslateRequest from a JSON string
adaptive_mt_translate_request_instance = AdaptiveMtTranslateRequest.from_json(json)
# print the JSON string representation of the object
print(AdaptiveMtTranslateRequest.to_json())

# convert the object into a dict
adaptive_mt_translate_request_dict = adaptive_mt_translate_request_instance.to_dict()
# create an instance of AdaptiveMtTranslateRequest from a dict
adaptive_mt_translate_request_from_dict = AdaptiveMtTranslateRequest.from_dict(adaptive_mt_translate_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


