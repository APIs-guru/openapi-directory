# Birthday

A person's birthday. At least one of the `date` and `text` fields are specified. The `date` and `text` fields typically represent the same date, but are not guaranteed to. Clients should always set the `date` field when mutating birthdays.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**metadata** | [**FieldMetadata**](FieldMetadata.md) |  | [optional] 
**text** | **str** | Prefer to use the &#x60;date&#x60; field if set. A free-form string representing the user&#39;s birthday. This value is not validated. | [optional] 

## Example

```python
from openapi_client.models.birthday import Birthday

# TODO update the JSON string below
json = "{}"
# create an instance of Birthday from a JSON string
birthday_instance = Birthday.from_json(json)
# print the JSON string representation of the object
print(Birthday.to_json())

# convert the object into a dict
birthday_dict = birthday_instance.to_dict()
# create an instance of Birthday from a dict
birthday_from_dict = Birthday.from_dict(birthday_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


