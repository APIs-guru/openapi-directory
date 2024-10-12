# SimpleErrorCollection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_messages** | **List[str]** | The list of error messages produced by this operation. For example, \&quot;input parameter &#39;key&#39; must be provided\&quot; | [optional] 
**errors** | **Dict[str, str]** | The list of errors by parameter returned by the operation. For example,\&quot;projectKey\&quot;: \&quot;Project keys must start with an uppercase letter, followed by one or more uppercase alphanumeric characters.\&quot; | [optional] 
**http_status_code** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.simple_error_collection import SimpleErrorCollection

# TODO update the JSON string below
json = "{}"
# create an instance of SimpleErrorCollection from a JSON string
simple_error_collection_instance = SimpleErrorCollection.from_json(json)
# print the JSON string representation of the object
print(SimpleErrorCollection.to_json())

# convert the object into a dict
simple_error_collection_dict = simple_error_collection_instance.to_dict()
# create an instance of SimpleErrorCollection from a dict
simple_error_collection_from_dict = SimpleErrorCollection.from_dict(simple_error_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


