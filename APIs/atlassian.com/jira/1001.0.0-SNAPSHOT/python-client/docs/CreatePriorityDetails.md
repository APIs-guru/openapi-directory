# CreatePriorityDetails

Details of an issue priority.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the priority. | [optional] 
**icon_url** | **str** | The URL of an icon for the priority. Accepted protocols are HTTP and HTTPS. Built in icons can also be used. | [optional] 
**name** | **str** | The name of the priority. Must be unique. | 
**status_color** | **str** | The status color of the priority in 3-digit or 6-digit hexadecimal format. | 

## Example

```python
from openapi_client.models.create_priority_details import CreatePriorityDetails

# TODO update the JSON string below
json = "{}"
# create an instance of CreatePriorityDetails from a JSON string
create_priority_details_instance = CreatePriorityDetails.from_json(json)
# print the JSON string representation of the object
print(CreatePriorityDetails.to_json())

# convert the object into a dict
create_priority_details_dict = create_priority_details_instance.to_dict()
# create an instance of CreatePriorityDetails from a dict
create_priority_details_from_dict = CreatePriorityDetails.from_dict(create_priority_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


