# ConferenceProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_conference_solution_types** | **List[str]** | The types of conference solutions that are supported for this calendar. The possible values are:   - \&quot;eventHangout\&quot;  - \&quot;eventNamedHangout\&quot;  - \&quot;hangoutsMeet\&quot;  Optional. | [optional] 

## Example

```python
from openapi_client.models.conference_properties import ConferenceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ConferenceProperties from a JSON string
conference_properties_instance = ConferenceProperties.from_json(json)
# print the JSON string representation of the object
print(ConferenceProperties.to_json())

# convert the object into a dict
conference_properties_dict = conference_properties_instance.to_dict()
# create an instance of ConferenceProperties from a dict
conference_properties_from_dict = ConferenceProperties.from_dict(conference_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


