# OutputCollectionString


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item** | **str** | First Value | [optional] 
**items** | **List[str]** | All Values | [optional] 
**status** | **bool** | Success | [optional] 

## Example

```python
from openapi_client.models.output_collection_string import OutputCollectionString

# TODO update the JSON string below
json = "{}"
# create an instance of OutputCollectionString from a JSON string
output_collection_string_instance = OutputCollectionString.from_json(json)
# print the JSON string representation of the object
print(OutputCollectionString.to_json())

# convert the object into a dict
output_collection_string_dict = output_collection_string_instance.to_dict()
# create an instance of OutputCollectionString from a dict
output_collection_string_from_dict = OutputCollectionString.from_dict(output_collection_string_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


