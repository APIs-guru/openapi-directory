# DeprecationWarning


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messages** | **List[str]** |  | 
**warnings** | **List[str]** |  | 

## Example

```python
from openapi_client.models.deprecation_warning import DeprecationWarning

# TODO update the JSON string below
json = "{}"
# create an instance of DeprecationWarning from a JSON string
deprecation_warning_instance = DeprecationWarning.from_json(json)
# print the JSON string representation of the object
print(DeprecationWarning.to_json())

# convert the object into a dict
deprecation_warning_dict = deprecation_warning_instance.to_dict()
# create an instance of DeprecationWarning from a dict
deprecation_warning_from_dict = DeprecationWarning.from_dict(deprecation_warning_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


