# SerpSubmitResponse

Describes the result of uploading an image resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_message** | **str** |  | [optional] 
**response_code** | **int** | The request response_code. | 
**tasks** | [**List[KeywordTask]**](KeywordTask.md) |  | [optional] 

## Example

```python
from openapi_client.models.serp_submit_response import SerpSubmitResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SerpSubmitResponse from a JSON string
serp_submit_response_instance = SerpSubmitResponse.from_json(json)
# print the JSON string representation of the object
print(SerpSubmitResponse.to_json())

# convert the object into a dict
serp_submit_response_dict = serp_submit_response_instance.to_dict()
# create an instance of SerpSubmitResponse from a dict
serp_submit_response_from_dict = SerpSubmitResponse.from_dict(serp_submit_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


