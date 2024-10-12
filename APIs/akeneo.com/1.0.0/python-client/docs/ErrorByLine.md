# ErrorByLine


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Resource code, only filled when the resource is not a product | [optional] 
**identifier** | **str** | Resource identifier, only filled when the resource is a product | [optional] 
**line** | **int** | Line number | [optional] 
**message** | **str** | Message explaining the error | [optional] 
**status_code** | **int** | HTTP status code, see &lt;a href&#x3D;\&quot;/documentation/responses.html#client-errors\&quot;&gt;Client errors&lt;/a&gt; to understand the meaning of each code | [optional] 

## Example

```python
from openapi_client.models.error_by_line import ErrorByLine

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorByLine from a JSON string
error_by_line_instance = ErrorByLine.from_json(json)
# print the JSON string representation of the object
print(ErrorByLine.to_json())

# convert the object into a dict
error_by_line_dict = error_by_line_instance.to_dict()
# create an instance of ErrorByLine from a dict
error_by_line_from_dict = ErrorByLine.from_dict(error_by_line_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


