# Explanation

Explanation for a single feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribution** | **float** | Attribution of feature. | [optional] 
**feature_name** | **str** | The full feature name. For non-numerical features, will be formatted like &#x60;.&#x60;. Overall size of feature name will always be truncated to first 120 characters. | [optional] 

## Example

```python
from openapi_client.models.explanation import Explanation

# TODO update the JSON string below
json = "{}"
# create an instance of Explanation from a JSON string
explanation_instance = Explanation.from_json(json)
# print the JSON string representation of the object
print(Explanation.to_json())

# convert the object into a dict
explanation_dict = explanation_instance.to_dict()
# create an instance of Explanation from a dict
explanation_from_dict = Explanation.from_dict(explanation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


