# Availability

Event availability information when environment contains events. Contains time range of events and approximate distribution of events over time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**distribution** | **object** |  | [optional] 
**interval_size** | **str** | Interval size for the returned distribution of the events. Returned interval is selected to return a reasonable number of points. All intervals are the same size. On the wire interval is specified in ISO-8601 duration format. One month is always converted to 30 days, and one year is always 365 days. Examples: 1 minute is \&quot;PT1M\&quot;, 1 millisecond is \&quot;PT0.001S\&quot;. For more information, see https://www.w3.org/TR/xmlschema-2/#duration | [optional] [readonly] 
**range** | [**DateTimeRange**](DateTimeRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.availability import Availability

# TODO update the JSON string below
json = "{}"
# create an instance of Availability from a JSON string
availability_instance = Availability.from_json(json)
# print the JSON string representation of the object
print(Availability.to_json())

# convert the object into a dict
availability_dict = availability_instance.to_dict()
# create an instance of Availability from a dict
availability_from_dict = Availability.from_dict(availability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


