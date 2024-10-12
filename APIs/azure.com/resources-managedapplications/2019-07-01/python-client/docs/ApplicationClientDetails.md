# ApplicationClientDetails

The application client details to track the entity creating/updating the managed app resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_id** | **str** | The client application Id. | [optional] 
**oid** | **str** | The client Oid. | [optional] 
**puid** | **str** | The client Puid | [optional] 

## Example

```python
from openapi_client.models.application_client_details import ApplicationClientDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationClientDetails from a JSON string
application_client_details_instance = ApplicationClientDetails.from_json(json)
# print the JSON string representation of the object
print(ApplicationClientDetails.to_json())

# convert the object into a dict
application_client_details_dict = application_client_details_instance.to_dict()
# create an instance of ApplicationClientDetails from a dict
application_client_details_from_dict = ApplicationClientDetails.from_dict(application_client_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


