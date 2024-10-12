# UpdatePriorityDetails

Details of an issue priority.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the priority. | [optional] 
**icon_url** | **str** | The URL of an icon for the priority. Accepted protocols are HTTP and HTTPS. Built in icons can also be used. | [optional] 
**name** | **str** | The name of the priority. Must be unique. | [optional] 
**status_color** | **str** | The status color of the priority in 3-digit or 6-digit hexadecimal format. | [optional] 

## Example

```python
from openapi_client.models.update_priority_details import UpdatePriorityDetails

# TODO update the JSON string below
json = "{}"
# create an instance of UpdatePriorityDetails from a JSON string
update_priority_details_instance = UpdatePriorityDetails.from_json(json)
# print the JSON string representation of the object
print(UpdatePriorityDetails.to_json())

# convert the object into a dict
update_priority_details_dict = update_priority_details_instance.to_dict()
# create an instance of UpdatePriorityDetails from a dict
update_priority_details_from_dict = UpdatePriorityDetails.from_dict(update_priority_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


