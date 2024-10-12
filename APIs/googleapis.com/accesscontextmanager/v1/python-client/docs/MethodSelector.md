# MethodSelector

An allowed method or permission of a service specified in ApiOperation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | **str** | A valid method name for the corresponding &#x60;service_name&#x60; in ApiOperation. If &#x60;*&#x60; is used as the value for the &#x60;method&#x60;, then ALL methods and permissions are allowed. | [optional] 
**permission** | **str** | A valid Cloud IAM permission for the corresponding &#x60;service_name&#x60; in ApiOperation. | [optional] 

## Example

```python
from openapi_client.models.method_selector import MethodSelector

# TODO update the JSON string below
json = "{}"
# create an instance of MethodSelector from a JSON string
method_selector_instance = MethodSelector.from_json(json)
# print the JSON string representation of the object
print(MethodSelector.to_json())

# convert the object into a dict
method_selector_dict = method_selector_instance.to_dict()
# create an instance of MethodSelector from a dict
method_selector_from_dict = MethodSelector.from_dict(method_selector_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


