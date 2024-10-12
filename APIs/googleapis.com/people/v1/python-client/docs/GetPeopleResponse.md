# GetPeopleResponse

The response to a get request for a list of people by resource name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**responses** | [**List[PersonResponse]**](PersonResponse.md) | The response for each requested resource name. | [optional] 

## Example

```python
from openapi_client.models.get_people_response import GetPeopleResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetPeopleResponse from a JSON string
get_people_response_instance = GetPeopleResponse.from_json(json)
# print the JSON string representation of the object
print(GetPeopleResponse.to_json())

# convert the object into a dict
get_people_response_dict = get_people_response_instance.to_dict()
# create an instance of GetPeopleResponse from a dict
get_people_response_from_dict = GetPeopleResponse.from_dict(get_people_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


