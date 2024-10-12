# UrlPathConditionParameters

Defines the parameters for the URL path condition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_type** | **str** |  | 
**match_type** | **str** | The match type for the condition of the delivery rule | 
**path** | **str** | A URL path for the condition of the delivery rule | 

## Example

```python
from openapi_client.models.url_path_condition_parameters import UrlPathConditionParameters

# TODO update the JSON string below
json = "{}"
# create an instance of UrlPathConditionParameters from a JSON string
url_path_condition_parameters_instance = UrlPathConditionParameters.from_json(json)
# print the JSON string representation of the object
print(UrlPathConditionParameters.to_json())

# convert the object into a dict
url_path_condition_parameters_dict = url_path_condition_parameters_instance.to_dict()
# create an instance of UrlPathConditionParameters from a dict
url_path_condition_parameters_from_dict = UrlPathConditionParameters.from_dict(url_path_condition_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


