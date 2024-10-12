# ConferenceData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conference_id** | **str** | The ID of the conference. Can be used by developers to keep track of conferences, should not be displayed to users. The ID value is formed differently for each conference solution type:   - eventHangout: ID is not set. (This conference type is deprecated.) - eventNamedHangout: ID is the name of the Hangout. (This conference type is deprecated.) - hangoutsMeet: ID is the 10-letter meeting code, for example aaa-bbbb-ccc. - addOn: ID is defined by the third-party provider.  Optional. | [optional] 
**conference_solution** | [**ConferenceSolution**](ConferenceSolution.md) |  | [optional] 
**create_request** | [**CreateConferenceRequest**](CreateConferenceRequest.md) |  | [optional] 
**entry_points** | [**List[EntryPoint]**](EntryPoint.md) | Information about individual conference entry points, such as URLs or phone numbers. All of them must belong to the same conference. Either conferenceSolution and at least one entryPoint, or createRequest is required. | [optional] 
**notes** | **str** | Additional notes (such as instructions from the domain administrator, legal notices) to display to the user. Can contain HTML. The maximum length is 2048 characters. Optional. | [optional] 
**parameters** | [**ConferenceParameters**](ConferenceParameters.md) |  | [optional] 
**signature** | **str** | The signature of the conference data. Generated on server side. Unset for a conference with a failed create request. Optional for a conference with a pending create request. | [optional] 

## Example

```python
from openapi_client.models.conference_data import ConferenceData

# TODO update the JSON string below
json = "{}"
# create an instance of ConferenceData from a JSON string
conference_data_instance = ConferenceData.from_json(json)
# print the JSON string representation of the object
print(ConferenceData.to_json())

# convert the object into a dict
conference_data_dict = conference_data_instance.to_dict()
# create an instance of ConferenceData from a dict
conference_data_from_dict = ConferenceData.from_dict(conference_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


