# Feature

The type of Google Cloud Vision API detection to perform, and the maximum number of results to return for that type. Multiple `Feature` objects can be specified in the `features` list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_results** | **int** | Maximum number of results of this type. Does not apply to &#x60;TEXT_DETECTION&#x60;, &#x60;DOCUMENT_TEXT_DETECTION&#x60;, or &#x60;CROP_HINTS&#x60;. | [optional] 
**model** | **str** | Model to use for the feature. Supported values: \&quot;builtin/stable\&quot; (the default if unset) and \&quot;builtin/latest\&quot;. &#x60;DOCUMENT_TEXT_DETECTION&#x60; and &#x60;TEXT_DETECTION&#x60; also support \&quot;builtin/weekly\&quot; for the bleeding edge release updated weekly. | [optional] 
**type** | **str** | The feature type. | [optional] 

## Example

```python
from openapi_client.models.feature import Feature

# TODO update the JSON string below
json = "{}"
# create an instance of Feature from a JSON string
feature_instance = Feature.from_json(json)
# print the JSON string representation of the object
print(Feature.to_json())

# convert the object into a dict
feature_dict = feature_instance.to_dict()
# create an instance of Feature from a dict
feature_from_dict = Feature.from_dict(feature_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


