# OutputCollectionNumber


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**item** | **float** | First Value | [optional] 
**items** | **List[float]** | All Values | [optional] 
**status** | **bool** | Success | [optional] 

## Example

```python
from openapi_client.models.output_collection_number import OutputCollectionNumber

# TODO update the JSON string below
json = "{}"
# create an instance of OutputCollectionNumber from a JSON string
output_collection_number_instance = OutputCollectionNumber.from_json(json)
# print the JSON string representation of the object
print(OutputCollectionNumber.to_json())

# convert the object into a dict
output_collection_number_dict = output_collection_number_instance.to_dict()
# create an instance of OutputCollectionNumber from a dict
output_collection_number_from_dict = OutputCollectionNumber.from_dict(output_collection_number_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


