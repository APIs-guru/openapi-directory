# ReedemedResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_page** | **int** | Count of current offer return segment. | [optional] 
**items** | [**RedemedItems**](RedemedItems.md) |  | [optional] 
**items_per_page** | **int** | Count of offers in the returned segment. | [optional] 
**number_of_pages** | **int** | Count of offer return segments. | [optional] 
**status** | [**Status**](Status.md) |  | [optional] 
**total_count** | **int** | Count of all offers available for criteria. | [optional] 

## Example

```python
from openapi_client.models.reedemed_response import ReedemedResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ReedemedResponse from a JSON string
reedemed_response_instance = ReedemedResponse.from_json(json)
# print the JSON string representation of the object
print(ReedemedResponse.to_json())

# convert the object into a dict
reedemed_response_dict = reedemed_response_instance.to_dict()
# create an instance of ReedemedResponse from a dict
reedemed_response_from_dict = ReedemedResponse.from_dict(reedemed_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


