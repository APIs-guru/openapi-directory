# PersonalAssistantsResponse

Response containing user's endpoint keys and the endpoint URLs of the prebuilt Cortana applications.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint_keys** | **List[str]** | An a array of GUIDs, comprised of Azure Endpoint Keys and the Authoring API key. | [optional] 
**endpoint_urls** | **Dict[str, str]** | Endpoint URLs for prebuilt Cortana applications. | [optional] 

## Example

```python
from openapi_client.models.personal_assistants_response import PersonalAssistantsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PersonalAssistantsResponse from a JSON string
personal_assistants_response_instance = PersonalAssistantsResponse.from_json(json)
# print the JSON string representation of the object
print(PersonalAssistantsResponse.to_json())

# convert the object into a dict
personal_assistants_response_dict = personal_assistants_response_instance.to_dict()
# create an instance of PersonalAssistantsResponse from a dict
personal_assistants_response_from_dict = PersonalAssistantsResponse.from_dict(personal_assistants_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


