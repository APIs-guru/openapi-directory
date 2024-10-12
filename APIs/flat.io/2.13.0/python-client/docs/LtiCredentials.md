# LtiCredentials

A couple of LTI 1.x OAuth credentials

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_key** | **str** | OAuth 1 Consumer Key | [optional] 
**consumer_secret** | **str** | OAuth 1 Consumer Secret | [optional] 
**creation_date** | **datetime** | The creation date of thse credentials | [optional] 
**creator** | **str** | Unique identifier of the user who created these credentials | [optional] 
**id** | **str** | The unique identifier of this couple of credentials | [optional] 
**last_usage** | **datetime** | The last time these credentials were used | [optional] 
**lms** | [**LmsName**](LmsName.md) |  | [optional] 
**name** | **str** | Name of the couple of credentials | [optional] 
**organization** | **str** | The unique identifier of the Organization associated to these credentials | [optional] 

## Example

```python
from openapi_client.models.lti_credentials import LtiCredentials

# TODO update the JSON string below
json = "{}"
# create an instance of LtiCredentials from a JSON string
lti_credentials_instance = LtiCredentials.from_json(json)
# print the JSON string representation of the object
print(LtiCredentials.to_json())

# convert the object into a dict
lti_credentials_dict = lti_credentials_instance.to_dict()
# create an instance of LtiCredentials from a dict
lti_credentials_from_dict = LtiCredentials.from_dict(lti_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


