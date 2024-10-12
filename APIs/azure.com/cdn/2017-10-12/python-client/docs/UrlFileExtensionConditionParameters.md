# UrlFileExtensionConditionParameters

Defines the parameters for the URL file extension condition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_type** | **str** |  | 
**extensions** | **List[str]** | A list of extensions for the condition of the delivery rule. | 

## Example

```python
from openapi_client.models.url_file_extension_condition_parameters import UrlFileExtensionConditionParameters

# TODO update the JSON string below
json = "{}"
# create an instance of UrlFileExtensionConditionParameters from a JSON string
url_file_extension_condition_parameters_instance = UrlFileExtensionConditionParameters.from_json(json)
# print the JSON string representation of the object
print(UrlFileExtensionConditionParameters.to_json())

# convert the object into a dict
url_file_extension_condition_parameters_dict = url_file_extension_condition_parameters_instance.to_dict()
# create an instance of UrlFileExtensionConditionParameters from a dict
url_file_extension_condition_parameters_from_dict = UrlFileExtensionConditionParameters.from_dict(url_file_extension_condition_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


