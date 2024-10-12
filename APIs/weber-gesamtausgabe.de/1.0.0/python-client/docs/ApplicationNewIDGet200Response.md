# ApplicationNewIDGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**doc_id** | **str** | The WeGA ID | [optional] 
**doc_type** | **str** | The WeGA document type | [optional] 

## Example

```python
from openapi_client.models.application_new_id_get200_response import ApplicationNewIDGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationNewIDGet200Response from a JSON string
application_new_id_get200_response_instance = ApplicationNewIDGet200Response.from_json(json)
# print the JSON string representation of the object
print(ApplicationNewIDGet200Response.to_json())

# convert the object into a dict
application_new_id_get200_response_dict = application_new_id_get200_response_instance.to_dict()
# create an instance of ApplicationNewIDGet200Response from a dict
application_new_id_get200_response_from_dict = ApplicationNewIDGet200Response.from_dict(application_new_id_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


