# RunOutputCollection

The result of List run outputs operation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The continuation token. | [optional] 
**value** | [**List[RunOutput]**](RunOutput.md) | An array of run outputs | [optional] 

## Example

```python
from openapi_client.models.run_output_collection import RunOutputCollection

# TODO update the JSON string below
json = "{}"
# create an instance of RunOutputCollection from a JSON string
run_output_collection_instance = RunOutputCollection.from_json(json)
# print the JSON string representation of the object
print(RunOutputCollection.to_json())

# convert the object into a dict
run_output_collection_dict = run_output_collection_instance.to_dict()
# create an instance of RunOutputCollection from a dict
run_output_collection_from_dict = RunOutputCollection.from_dict(run_output_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


