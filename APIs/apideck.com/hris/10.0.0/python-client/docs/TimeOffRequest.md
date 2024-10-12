# TimeOffRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | The amount of time off requested. | [optional] 
**approval_date** | **str** | The date the request was approved | [optional] 
**created_at** | **datetime** | The date and time when the object was created. | [optional] [readonly] 
**created_by** | **str** | The user who created the object. | [optional] [readonly] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**description** | **str** | Description of the time off request. | [optional] 
**employee_id** | **str** | ID of the employee | [optional] 
**end_date** | **str** | The end date of the time off request. | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**notes** | [**TimeOffRequestNotes**](TimeOffRequestNotes.md) |  | [optional] 
**policy_id** | **str** | ID of the policy | [optional] 
**request_date** | **str** | The date the request was made. | [optional] 
**request_type** | **str** | The type of request | [optional] 
**start_date** | **str** | The start date of the time off request. | [optional] 
**status** | **str** | The status of the time off request. | [optional] 
**units** | **str** | The unit of time off requested. Possible values include: &#x60;hours&#x60;, &#x60;days&#x60;, or &#x60;other&#x60;. | [optional] 
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 
**updated_by** | **str** | The user who last updated the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.time_off_request import TimeOffRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TimeOffRequest from a JSON string
time_off_request_instance = TimeOffRequest.from_json(json)
# print the JSON string representation of the object
print(TimeOffRequest.to_json())

# convert the object into a dict
time_off_request_dict = time_off_request_instance.to_dict()
# create an instance of TimeOffRequest from a dict
time_off_request_from_dict = TimeOffRequest.from_dict(time_off_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


