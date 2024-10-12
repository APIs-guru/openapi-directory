# ListTargetingOptionsResponse

Response message for ListTargetingOptions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to &#x60;ListTargetingOptions&#x60; method to retrieve the next page of results. | [optional] 
**targeting_options** | [**List[TargetingOption]**](TargetingOption.md) | The list of targeting options. This list will be absent if empty. | [optional] 

## Example

```python
from openapi_client.models.list_targeting_options_response import ListTargetingOptionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListTargetingOptionsResponse from a JSON string
list_targeting_options_response_instance = ListTargetingOptionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListTargetingOptionsResponse.to_json())

# convert the object into a dict
list_targeting_options_response_dict = list_targeting_options_response_instance.to_dict()
# create an instance of ListTargetingOptionsResponse from a dict
list_targeting_options_response_from_dict = ListTargetingOptionsResponse.from_dict(list_targeting_options_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


