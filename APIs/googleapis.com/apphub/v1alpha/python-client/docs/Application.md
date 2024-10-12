# Application

Application defines the governance boundary for App Hub Entities that perform a logical end-to-end business function. App Hub supports application level IAM permission to align with governance requirements.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**Attributes**](Attributes.md) |  | [optional] 
**create_time** | **str** | Output only. Create time. | [optional] [readonly] 
**description** | **str** | Optional. User-defined description of an Application. Can have a maximum length of 2048 characters. | [optional] 
**display_name** | **str** | Optional. User-defined name for the Application. Can have a maximum length of 63 characters. | [optional] 
**name** | **str** | Identifier. The resource name of an Application. Format: \&quot;projects/{host-project-id}/locations/{location}/applications/{application-id}\&quot; | [optional] 
**scope** | [**Scope**](Scope.md) |  | [optional] 
**state** | **str** | Output only. Application state. | [optional] [readonly] 
**uid** | **str** | Output only. A universally unique identifier (in UUID4 format) for the &#x60;Application&#x60;. | [optional] [readonly] 
**update_time** | **str** | Output only. Update time. | [optional] [readonly] 

## Example

```python
from openapi_client.models.application import Application

# TODO update the JSON string below
json = "{}"
# create an instance of Application from a JSON string
application_instance = Application.from_json(json)
# print the JSON string representation of the object
print(Application.to_json())

# convert the object into a dict
application_dict = application_instance.to_dict()
# create an instance of Application from a dict
application_from_dict = Application.from_dict(application_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


