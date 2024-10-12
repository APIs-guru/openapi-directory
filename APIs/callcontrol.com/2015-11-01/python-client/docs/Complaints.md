# Complaints

Free service (with registration) which serves Government Do Not Call data via API   Search via phone number returns available data, reported name, total complaints

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**complaints_by_entity** | **Dict[str, int]** |  | [optional] 
**last_complaint_date** | **datetime** |  | [optional] 
**reported_caller_name** | **str** | Reported Caller Name | [optional] 
**tags** | **List[str]** |  | [optional] 
**total_number_of_complaints** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.complaints import Complaints

# TODO update the JSON string below
json = "{}"
# create an instance of Complaints from a JSON string
complaints_instance = Complaints.from_json(json)
# print the JSON string representation of the object
print(Complaints.to_json())

# convert the object into a dict
complaints_dict = complaints_instance.to_dict()
# create an instance of Complaints from a dict
complaints_from_dict = Complaints.from_dict(complaints_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


