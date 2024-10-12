# EndpointMatcher

A definition of a matcher that selects endpoints to which the policies should be applied.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata_label_matcher** | [**MetadataLabelMatcher**](MetadataLabelMatcher.md) |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_matcher import EndpointMatcher

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointMatcher from a JSON string
endpoint_matcher_instance = EndpointMatcher.from_json(json)
# print the JSON string representation of the object
print(EndpointMatcher.to_json())

# convert the object into a dict
endpoint_matcher_dict = endpoint_matcher_instance.to_dict()
# create an instance of EndpointMatcher from a dict
endpoint_matcher_from_dict = EndpointMatcher.from_dict(endpoint_matcher_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


