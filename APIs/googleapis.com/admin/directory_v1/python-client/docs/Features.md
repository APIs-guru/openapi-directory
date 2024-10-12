# Features

Public API: Resources.features

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | ETag of the resource. | [optional] 
**features** | [**List[Feature]**](Feature.md) | The Features in this page of results. | [optional] 
**kind** | **str** | Kind of resource this is. | [optional] [default to 'admin#directory#resources#features#featuresList']
**next_page_token** | **str** | The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results. | [optional] 

## Example

```python
from openapi_client.models.features import Features

# TODO update the JSON string below
json = "{}"
# create an instance of Features from a JSON string
features_instance = Features.from_json(json)
# print the JSON string representation of the object
print(Features.to_json())

# convert the object into a dict
features_dict = features_instance.to_dict()
# create an instance of Features from a dict
features_from_dict = Features.from_dict(features_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


