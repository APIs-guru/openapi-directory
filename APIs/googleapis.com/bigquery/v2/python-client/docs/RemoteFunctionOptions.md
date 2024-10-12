# RemoteFunctionOptions

Options for a remote user-defined function.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection** | **str** | Fully qualified name of the user-provided connection object which holds the authentication information to send requests to the remote service. Format: &#x60;&#x60;&#x60;\&quot;projects/{projectId}/locations/{locationId}/connections/{connectionId}\&quot;&#x60;&#x60;&#x60; | [optional] 
**endpoint** | **str** | Endpoint of the user-provided remote service, e.g. &#x60;&#x60;&#x60;https://us-east1-my_gcf_project.cloudfunctions.net/remote_add&#x60;&#x60;&#x60; | [optional] 
**max_batching_rows** | **str** | Max number of rows in each batch sent to the remote service. If absent or if 0, BigQuery dynamically decides the number of rows in a batch. | [optional] 
**user_defined_context** | **Dict[str, str]** | User-defined context as a set of key/value pairs, which will be sent as function invocation context together with batched arguments in the requests to the remote service. The total number of bytes of keys and values must be less than 8KB. | [optional] 

## Example

```python
from openapi_client.models.remote_function_options import RemoteFunctionOptions

# TODO update the JSON string below
json = "{}"
# create an instance of RemoteFunctionOptions from a JSON string
remote_function_options_instance = RemoteFunctionOptions.from_json(json)
# print the JSON string representation of the object
print(RemoteFunctionOptions.to_json())

# convert the object into a dict
remote_function_options_dict = remote_function_options_instance.to_dict()
# create an instance of RemoteFunctionOptions from a dict
remote_function_options_from_dict = RemoteFunctionOptions.from_dict(remote_function_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


