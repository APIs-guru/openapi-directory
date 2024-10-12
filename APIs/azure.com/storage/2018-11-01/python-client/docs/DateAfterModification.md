# DateAfterModification

Object to define the number of days after last modification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**days_after_modification_greater_than** | **int** | Integer value indicating the age in days after last modification | 

## Example

```python
from openapi_client.models.date_after_modification import DateAfterModification

# TODO update the JSON string below
json = "{}"
# create an instance of DateAfterModification from a JSON string
date_after_modification_instance = DateAfterModification.from_json(json)
# print the JSON string representation of the object
print(DateAfterModification.to_json())

# convert the object into a dict
date_after_modification_dict = date_after_modification_instance.to_dict()
# create an instance of DateAfterModification from a dict
date_after_modification_from_dict = DateAfterModification.from_dict(date_after_modification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


