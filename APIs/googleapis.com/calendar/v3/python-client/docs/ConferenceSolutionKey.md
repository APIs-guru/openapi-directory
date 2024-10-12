# ConferenceSolutionKey


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The conference solution type. If a client encounters an unfamiliar or empty type, it should still be able to display the entry points. However, it should disallow modifications. The possible values are:   - \&quot;eventHangout\&quot; for Hangouts for consumers (deprecated; existing events may show this conference solution type but new conferences cannot be created) - \&quot;eventNamedHangout\&quot; for classic Hangouts for Google Workspace users (deprecated; existing events may show this conference solution type but new conferences cannot be created) - \&quot;hangoutsMeet\&quot; for Google Meet (http://meet.google.com) - \&quot;addOn\&quot; for 3P conference providers | [optional] 

## Example

```python
from openapi_client.models.conference_solution_key import ConferenceSolutionKey

# TODO update the JSON string below
json = "{}"
# create an instance of ConferenceSolutionKey from a JSON string
conference_solution_key_instance = ConferenceSolutionKey.from_json(json)
# print the JSON string representation of the object
print(ConferenceSolutionKey.to_json())

# convert the object into a dict
conference_solution_key_dict = conference_solution_key_instance.to_dict()
# create an instance of ConferenceSolutionKey from a dict
conference_solution_key_from_dict = ConferenceSolutionKey.from_dict(conference_solution_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


