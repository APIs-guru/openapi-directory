# Reference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the reference field. | [optional] 
**type** | **str** | Name of reference entity type. | [optional] 

## Example

```python
from openapi_client.models.reference import Reference

# TODO update the JSON string below
json = "{}"
# create an instance of Reference from a JSON string
reference_instance = Reference.from_json(json)
# print the JSON string representation of the object
print(Reference.to_json())

# convert the object into a dict
reference_dict = reference_instance.to_dict()
# create an instance of Reference from a dict
reference_from_dict = Reference.from_dict(reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


