# DateAfterCreation

Object to define the number of days after creation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**days_after_creation_greater_than** | **int** | Integer value indicating the age in days after creation | 

## Example

```python
from openapi_client.models.date_after_creation import DateAfterCreation

# TODO update the JSON string below
json = "{}"
# create an instance of DateAfterCreation from a JSON string
date_after_creation_instance = DateAfterCreation.from_json(json)
# print the JSON string representation of the object
print(DateAfterCreation.to_json())

# convert the object into a dict
date_after_creation_dict = date_after_creation_instance.to_dict()
# create an instance of DateAfterCreation from a dict
date_after_creation_from_dict = DateAfterCreation.from_dict(date_after_creation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


