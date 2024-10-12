# AppDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_email** | **str** | The user-visible support email for this app. | [optional] 
**contact_phone** | **str** | The user-visible support telephone number for this app. | [optional] 
**contact_website** | **str** | The user-visible website for this app. | [optional] 
**default_language** | **str** | Default language code, in BCP 47 format (eg \&quot;en-US\&quot;). | [optional] 

## Example

```python
from openapi_client.models.app_details import AppDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AppDetails from a JSON string
app_details_instance = AppDetails.from_json(json)
# print the JSON string representation of the object
print(AppDetails.to_json())

# convert the object into a dict
app_details_dict = app_details_instance.to_dict()
# create an instance of AppDetails from a dict
app_details_from_dict = AppDetails.from_dict(app_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


