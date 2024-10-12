# OutputMultiCollection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result1** | **List[str]** | First collection result | [optional] 
**result2** | **List[str]** | Second collection result | [optional] 

## Example

```python
from openapi_client.models.output_multi_collection import OutputMultiCollection

# TODO update the JSON string below
json = "{}"
# create an instance of OutputMultiCollection from a JSON string
output_multi_collection_instance = OutputMultiCollection.from_json(json)
# print the JSON string representation of the object
print(OutputMultiCollection.to_json())

# convert the object into a dict
output_multi_collection_dict = output_multi_collection_instance.to_dict()
# create an instance of OutputMultiCollection from a dict
output_multi_collection_from_dict = OutputMultiCollection.from_dict(output_multi_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


