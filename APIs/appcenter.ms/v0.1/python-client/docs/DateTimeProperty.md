# DateTimeProperty

Date and time property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **datetime** | Date time property value. | 
**name** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.date_time_property import DateTimeProperty

# TODO update the JSON string below
json = "{}"
# create an instance of DateTimeProperty from a JSON string
date_time_property_instance = DateTimeProperty.from_json(json)
# print the JSON string representation of the object
print(DateTimeProperty.to_json())

# convert the object into a dict
date_time_property_dict = date_time_property_instance.to_dict()
# create an instance of DateTimeProperty from a dict
date_time_property_from_dict = DateTimeProperty.from_dict(date_time_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


