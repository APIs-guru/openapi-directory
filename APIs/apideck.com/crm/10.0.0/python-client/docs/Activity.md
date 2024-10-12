# Activity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The account related to the activity | [optional] 
**activity_date** | **str** | The date of the activity | [optional] 
**activity_datetime** | **str** | The date and time of the activity | [optional] 
**all_day_event** | **bool** | Whether the Activity is an all day event or not | [optional] 
**archived** | **bool** | Whether the activity is archived or not | [optional] 
**asset_id** | **str** | The asset related to the activity | [optional] 
**attendees** | [**List[ActivityAttendee]**](ActivityAttendee.md) |  | [optional] 
**campaign_id** | **str** | The campaign related to the activity | [optional] 
**case_id** | **str** | The case related to the activity | [optional] 
**child** | **bool** | Whether the activity is a child of another activity or not | [optional] 
**company_id** | **str** | The company related to the activity | [optional] 
**contact_id** | **str** | The contact related to the activity | [optional] 
**contract_id** | **str** | The contract related to the activity | [optional] 
**created_at** | **str** | The date and time when the activity was created | [optional] [readonly] 
**created_by** | **str** | The user who created the activity | [optional] [readonly] 
**custom_fields** | [**List[CustomField]**](CustomField.md) | Custom fields of the activity | [optional] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**custom_object_id** | **str** | The custom object related to the activity | [optional] 
**deleted** | **bool** | Whether the activity is deleted or not | [optional] 
**description** | **str** | A description of the activity | [optional] 
**done** | **bool** | Whether the Activity is done or not | [optional] 
**downstream_id** | **str** | The third-party API ID of original entity | [optional] [readonly] 
**duration_minutes** | **int** | The duration of the activity in minutes | [optional] [readonly] 
**duration_seconds** | **int** | The duration of the activity in seconds | [optional] 
**end_date** | **str** | The end date of the activity | [optional] 
**end_datetime** | **str** | The end date and time of the activity | [optional] 
**event_sub_type** | **str** | The sub type of the group event | [optional] 
**group_event** | **bool** | Whether the Activity is a group event or not | [optional] 
**group_event_type** | **str** | The type of the group event | [optional] 
**id** | **str** | The unique identifier of the activity | [optional] [readonly] 
**lead_id** | **str** | The lead related to the activity | [optional] 
**location** | **str** | The location of the activity | [optional] 
**location_address** | [**Address**](Address.md) |  | [optional] 
**note** | **str** | An internal note about the activity | [optional] 
**opportunity_id** | **str** | The opportunity related to the activity | [optional] 
**owner_id** | **str** | The owner of the activity | [optional] 
**private** | **bool** | Whether the Activity is private or not | [optional] 
**product_id** | **str** | The product related to the activity | [optional] 
**recurrent** | **bool** | Whether the activity is recurrent or not | [optional] 
**reminder_datetime** | **str** | The date and time of the reminder | [optional] 
**reminder_set** | **bool** | Whether the reminder is set or not | [optional] 
**show_as** | **str** |  | [optional] 
**solution_id** | **str** | The solution related to the activity | [optional] 
**start_datetime** | **str** | The start date and time of the activity | [optional] 
**title** | **str** | The title of the activity | [optional] 
**type** | **str** | The type of the activity | 
**updated_at** | **str** | The date and time when the activity was last updated | [optional] [readonly] 
**updated_by** | **str** | The user who last updated the activity | [optional] [readonly] 
**user_id** | **str** | The user related to the activity | [optional] 
**video_conference_id** | **str** | The ID of the video conference | [optional] 
**video_conference_url** | **str** | The URL of the video conference | [optional] 

## Example

```python
from openapi_client.models.activity import Activity

# TODO update the JSON string below
json = "{}"
# create an instance of Activity from a JSON string
activity_instance = Activity.from_json(json)
# print the JSON string representation of the object
print(Activity.to_json())

# convert the object into a dict
activity_dict = activity_instance.to_dict()
# create an instance of Activity from a dict
activity_from_dict = Activity.from_dict(activity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


