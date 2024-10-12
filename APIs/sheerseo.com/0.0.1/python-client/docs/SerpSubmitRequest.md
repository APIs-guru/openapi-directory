# SerpSubmitRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**priority** | **str** | The priority for the keyword jobs submitted. High priority costs double credits. Default value is low. | [optional] 
**tasks** | [**List[KeywordJobSerp]**](KeywordJobSerp.md) | The keyword SERP jobs. Maximum 1000 jobs per a single request. | 

## Example

```python
from openapi_client.models.serp_submit_request import SerpSubmitRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SerpSubmitRequest from a JSON string
serp_submit_request_instance = SerpSubmitRequest.from_json(json)
# print the JSON string representation of the object
print(SerpSubmitRequest.to_json())

# convert the object into a dict
serp_submit_request_dict = serp_submit_request_instance.to_dict()
# create an instance of SerpSubmitRequest from a dict
serp_submit_request_from_dict = SerpSubmitRequest.from_dict(serp_submit_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


