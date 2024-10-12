# Assignment

An assignment allows a project to submit jobs of a certain type using slots from the specified reservation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignee** | **str** | The resource which will use the reservation. E.g. &#x60;projects/myproject&#x60;, &#x60;folders/123&#x60;, or &#x60;organizations/456&#x60;. | [optional] 
**job_type** | **str** | Which type of jobs will use the reservation. | [optional] 
**name** | **str** | Output only. Name of the resource. E.g.: &#x60;projects/myproject/locations/US/reservations/team1-prod/assignments/123&#x60;. The assignment_id must only contain lower case alphanumeric characters or dashes and the max length is 64 characters. | [optional] [readonly] 
**state** | **str** | Output only. State of the assignment. | [optional] [readonly] 

## Example

```python
from openapi_client.models.assignment import Assignment

# TODO update the JSON string below
json = "{}"
# create an instance of Assignment from a JSON string
assignment_instance = Assignment.from_json(json)
# print the JSON string representation of the object
print(Assignment.to_json())

# convert the object into a dict
assignment_dict = assignment_instance.to_dict()
# create an instance of Assignment from a dict
assignment_from_dict = Assignment.from_dict(assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


