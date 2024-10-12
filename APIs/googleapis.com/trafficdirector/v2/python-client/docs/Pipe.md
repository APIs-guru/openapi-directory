# Pipe


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **int** | The mode for the Pipe. Not applicable for abstract sockets. | [optional] 
**path** | **str** | Unix Domain Socket path. On Linux, paths starting with &#39;@&#39; will use the abstract namespace. The starting &#39;@&#39; is replaced by a null byte by Envoy. Paths starting with &#39;@&#39; will result in an error in environments other than Linux. | [optional] 

## Example

```python
from openapi_client.models.pipe import Pipe

# TODO update the JSON string below
json = "{}"
# create an instance of Pipe from a JSON string
pipe_instance = Pipe.from_json(json)
# print the JSON string representation of the object
print(Pipe.to_json())

# convert the object into a dict
pipe_dict = pipe_instance.to_dict()
# create an instance of Pipe from a dict
pipe_from_dict = Pipe.from_dict(pipe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


