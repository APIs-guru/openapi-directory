# FeatureSupportRequest

Base class for feature request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feature_type** | **str** | backup support feature type. | [optional] 

## Example

```python
from openapi_client.models.feature_support_request import FeatureSupportRequest

# TODO update the JSON string below
json = "{}"
# create an instance of FeatureSupportRequest from a JSON string
feature_support_request_instance = FeatureSupportRequest.from_json(json)
# print the JSON string representation of the object
print(FeatureSupportRequest.to_json())

# convert the object into a dict
feature_support_request_dict = feature_support_request_instance.to_dict()
# create an instance of FeatureSupportRequest from a dict
feature_support_request_from_dict = FeatureSupportRequest.from_dict(feature_support_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


