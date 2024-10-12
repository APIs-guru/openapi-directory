# BusinessHours

Represents the time periods that this location is open for business. Holds a collection of TimePeriod instances.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**periods** | [**List[TimePeriod]**](TimePeriod.md) | Required. A collection of times that this location is open for business. Each period represents a range of hours when the location is open during the week. | [optional] 

## Example

```python
from openapi_client.models.business_hours import BusinessHours

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessHours from a JSON string
business_hours_instance = BusinessHours.from_json(json)
# print the JSON string representation of the object
print(BusinessHours.to_json())

# convert the object into a dict
business_hours_dict = business_hours_instance.to_dict()
# create an instance of BusinessHours from a dict
business_hours_from_dict = BusinessHours.from_dict(business_hours_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


