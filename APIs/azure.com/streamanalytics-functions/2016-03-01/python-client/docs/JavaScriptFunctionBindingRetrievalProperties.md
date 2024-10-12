# JavaScriptFunctionBindingRetrievalProperties

The binding retrieval properties associated with a JavaScript function.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**script** | **str** | The JavaScript code containing a single function definition. For example: &#39;function (x, y) { return x + y; }&#39;. | [optional] 
**udf_type** | [**UdfType**](UdfType.md) |  | [optional] 

## Example

```python
from openapi_client.models.java_script_function_binding_retrieval_properties import JavaScriptFunctionBindingRetrievalProperties

# TODO update the JSON string below
json = "{}"
# create an instance of JavaScriptFunctionBindingRetrievalProperties from a JSON string
java_script_function_binding_retrieval_properties_instance = JavaScriptFunctionBindingRetrievalProperties.from_json(json)
# print the JSON string representation of the object
print(JavaScriptFunctionBindingRetrievalProperties.to_json())

# convert the object into a dict
java_script_function_binding_retrieval_properties_dict = java_script_function_binding_retrieval_properties_instance.to_dict()
# create an instance of JavaScriptFunctionBindingRetrievalProperties from a dict
java_script_function_binding_retrieval_properties_from_dict = JavaScriptFunctionBindingRetrievalProperties.from_dict(java_script_function_binding_retrieval_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


