# OccurrenceReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**start_date** | **datetime** | Time when the event starts | [optional] 

## Example

```python
from openapi_client.models.occurrence_reference import OccurrenceReference

# TODO update the JSON string below
json = "{}"
# create an instance of OccurrenceReference from a JSON string
occurrence_reference_instance = OccurrenceReference.from_json(json)
# print the JSON string representation of the object
print(OccurrenceReference.to_json())

# convert the object into a dict
occurrence_reference_dict = occurrence_reference_instance.to_dict()
# create an instance of OccurrenceReference from a dict
occurrence_reference_from_dict = OccurrenceReference.from_dict(occurrence_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


