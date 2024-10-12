# ConferenceParameters


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**add_on_parameters** | [**ConferenceParametersAddOnParameters**](ConferenceParametersAddOnParameters.md) |  | [optional] 

## Example

```python
from openapi_client.models.conference_parameters import ConferenceParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ConferenceParameters from a JSON string
conference_parameters_instance = ConferenceParameters.from_json(json)
# print the JSON string representation of the object
print(ConferenceParameters.to_json())

# convert the object into a dict
conference_parameters_dict = conference_parameters_instance.to_dict()
# create an instance of ConferenceParameters from a dict
conference_parameters_from_dict = ConferenceParameters.from_dict(conference_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


