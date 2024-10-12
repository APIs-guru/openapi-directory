# MatchedResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_page** | **int** | Count of current offer return segment. | [optional] 
**items** | [**Items**](Items.md) |  | [optional] 
**items_per_page** | **int** | Count of offers in the returned segment. | [optional] 
**number_of_pages** | **int** | Count of offer return segments. | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 
**total_count** | **int** | Count of all offers available for criteria. | [optional] 

## Example

```python
from openapi_client.models.matched_response import MatchedResponse

# TODO update the JSON string below
json = "{}"
# create an instance of MatchedResponse from a JSON string
matched_response_instance = MatchedResponse.from_json(json)
# print the JSON string representation of the object
print(MatchedResponse.to_json())

# convert the object into a dict
matched_response_dict = matched_response_instance.to_dict()
# create an instance of MatchedResponse from a dict
matched_response_from_dict = MatchedResponse.from_dict(matched_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


