# MoreHours

The time periods during which a location is open for certain types of business.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hours_type_id** | **str** | Required. Type of hours. Clients should call {#link businessCategories:BatchGet} to get supported hours types for categories of their locations. | [optional] 
**periods** | [**List[TimePeriod]**](TimePeriod.md) | Required. A collection of times that this location is open. Each period represents a range of hours when the location is open during the week. | [optional] 

## Example

```python
from openapi_client.models.more_hours import MoreHours

# TODO update the JSON string below
json = "{}"
# create an instance of MoreHours from a JSON string
more_hours_instance = MoreHours.from_json(json)
# print the JSON string representation of the object
print(MoreHours.to_json())

# convert the object into a dict
more_hours_dict = more_hours_instance.to_dict()
# create an instance of MoreHours from a dict
more_hours_from_dict = MoreHours.from_dict(more_hours_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


