# PlaceResponseResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hits** | [**List[PlaceResponseResultHitsInner]**](PlaceResponseResultHitsInner.md) | List of up to 10 matching places  | 

## Example

```python
from openapi_client.models.place_response_result import PlaceResponseResult

# TODO update the JSON string below
json = "{}"
# create an instance of PlaceResponseResult from a JSON string
place_response_result_instance = PlaceResponseResult.from_json(json)
# print the JSON string representation of the object
print(PlaceResponseResult.to_json())

# convert the object into a dict
place_response_result_dict = place_response_result_instance.to_dict()
# create an instance of PlaceResponseResult from a dict
place_response_result_from_dict = PlaceResponseResult.from_dict(place_response_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


