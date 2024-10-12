# InputCollectionConversion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input** | **List[str]** | Collection containing strings to convert | 
**name** | **str** | Collection name | 

## Example

```python
from openapi_client.models.input_collection_conversion import InputCollectionConversion

# TODO update the JSON string below
json = "{}"
# create an instance of InputCollectionConversion from a JSON string
input_collection_conversion_instance = InputCollectionConversion.from_json(json)
# print the JSON string representation of the object
print(InputCollectionConversion.to_json())

# convert the object into a dict
input_collection_conversion_dict = input_collection_conversion_instance.to_dict()
# create an instance of InputCollectionConversion from a dict
input_collection_conversion_from_dict = InputCollectionConversion.from_dict(input_collection_conversion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


