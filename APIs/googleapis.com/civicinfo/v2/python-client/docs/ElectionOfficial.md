# ElectionOfficial

Information about individual election officials.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_address** | **str** | The email address of the election official. | [optional] 
**fax_number** | **str** | The fax number of the election official. | [optional] 
**name** | **str** | The full name of the election official. | [optional] 
**office_phone_number** | **str** | The office phone number of the election official. | [optional] 
**title** | **str** | The title of the election official. | [optional] 

## Example

```python
from openapi_client.models.election_official import ElectionOfficial

# TODO update the JSON string below
json = "{}"
# create an instance of ElectionOfficial from a JSON string
election_official_instance = ElectionOfficial.from_json(json)
# print the JSON string representation of the object
print(ElectionOfficial.to_json())

# convert the object into a dict
election_official_dict = election_official_instance.to_dict()
# create an instance of ElectionOfficial from a dict
election_official_from_dict = ElectionOfficial.from_dict(election_official_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


