# ListFeaturesResponse

Response message for the `GkeHub.ListFeatures` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to request the next page of resources from the &#x60;ListFeatures&#x60; method. The value of an empty string means that there are no more resources to return. | [optional] 
**resources** | [**List[Feature]**](Feature.md) | The list of matching Features | [optional] 

## Example

```python
from openapi_client.models.list_features_response import ListFeaturesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListFeaturesResponse from a JSON string
list_features_response_instance = ListFeaturesResponse.from_json(json)
# print the JSON string representation of the object
print(ListFeaturesResponse.to_json())

# convert the object into a dict
list_features_response_dict = list_features_response_instance.to_dict()
# create an instance of ListFeaturesResponse from a dict
list_features_response_from_dict = ListFeaturesResponse.from_dict(list_features_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


