# Holiday

A Canadian holiday. Includes a name, the literal date of the holiday, the observed date of the holiday (ie, accommodating for weekends), and a list of regions that observe this holiday.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **date** | ISO date: the literal date of the holiday | 
**federal** | **int** | Whether this holiday is observed by federally-regulated industries. | 
**id** | **int** | Primary key for a holiday | 
**name_en** | **str** | English name | 
**name_fr** | **str** | French name | 
**observed_date** | **date** | ISO date: when this holiday is observed | 
**optional** | **int** | Whether this is a province-wide statutory holiday, or one that is optional for employers. | [optional] 
**provinces** | [**List[Province]**](Province.md) |  | [optional] 

## Example

```python
from openapi_client.models.holiday import Holiday

# TODO update the JSON string below
json = "{}"
# create an instance of Holiday from a JSON string
holiday_instance = Holiday.from_json(json)
# print the JSON string representation of the object
print(Holiday.to_json())

# convert the object into a dict
holiday_dict = holiday_instance.to_dict()
# create an instance of Holiday from a dict
holiday_from_dict = Holiday.from_dict(holiday_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


