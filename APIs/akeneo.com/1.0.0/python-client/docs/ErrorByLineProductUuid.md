# ErrorByLineProductUuid


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**line** | **int** | Line number | [optional] 
**message** | **str** | Message explaining the error | [optional] 
**status_code** | **int** | HTTP status code, see &lt;a href&#x3D;\&quot;/documentation/responses.html#client-errors\&quot;&gt;Client errors&lt;/a&gt; to understand the meaning of each code | [optional] 
**uuid** | **str** | Product uuid | [optional] 

## Example

```python
from openapi_client.models.error_by_line_product_uuid import ErrorByLineProductUuid

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorByLineProductUuid from a JSON string
error_by_line_product_uuid_instance = ErrorByLineProductUuid.from_json(json)
# print the JSON string representation of the object
print(ErrorByLineProductUuid.to_json())

# convert the object into a dict
error_by_line_product_uuid_dict = error_by_line_product_uuid_instance.to_dict()
# create an instance of ErrorByLineProductUuid from a dict
error_by_line_product_uuid_from_dict = ErrorByLineProductUuid.from_dict(error_by_line_product_uuid_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


