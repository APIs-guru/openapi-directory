# DateDetails

Details about a date column.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_time** | **bool** | Whether the date column includes time. | [optional] 

## Example

```python
from openapi_client.models.date_details import DateDetails

# TODO update the JSON string below
json = "{}"
# create an instance of DateDetails from a JSON string
date_details_instance = DateDetails.from_json(json)
# print the JSON string representation of the object
print(DateDetails.to_json())

# convert the object into a dict
date_details_dict = date_details_instance.to_dict()
# create an instance of DateDetails from a dict
date_details_from_dict = DateDetails.from_dict(date_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


