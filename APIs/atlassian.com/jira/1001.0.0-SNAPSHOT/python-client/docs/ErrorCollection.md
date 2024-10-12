# ErrorCollection

Error messages from an operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_messages** | **List[str]** | The list of error messages produced by this operation. For example, \&quot;input parameter &#39;key&#39; must be provided\&quot; | [optional] 
**errors** | **Dict[str, str]** | The list of errors by parameter returned by the operation. For example,\&quot;projectKey\&quot;: \&quot;Project keys must start with an uppercase letter, followed by one or more uppercase alphanumeric characters.\&quot; | [optional] 
**status** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.error_collection import ErrorCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorCollection from a JSON string
error_collection_instance = ErrorCollection.from_json(json)
# print the JSON string representation of the object
print(ErrorCollection.to_json())

# convert the object into a dict
error_collection_dict = error_collection_instance.to_dict()
# create an instance of ErrorCollection from a dict
error_collection_from_dict = ErrorCollection.from_dict(error_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


