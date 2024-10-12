# GeneratedIds

A list of generated IDs which can be provided in insert requests

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ids** | **List[str]** | The IDs generated for the requesting user in the specified space. | [optional] 
**kind** | **str** | This is always &#x60;drive#generatedIds&#x60; | [optional] [default to 'drive#generatedIds']
**space** | **str** | The type of file that can be created with these IDs. | [optional] 

## Example

```python
from openapi_client.models.generated_ids import GeneratedIds

# TODO update the JSON string below
json = "{}"
# create an instance of GeneratedIds from a JSON string
generated_ids_instance = GeneratedIds.from_json(json)
# print the JSON string representation of the object
print(GeneratedIds.to_json())

# convert the object into a dict
generated_ids_dict = generated_ids_instance.to_dict()
# create an instance of GeneratedIds from a dict
generated_ids_from_dict = GeneratedIds.from_dict(generated_ids_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


