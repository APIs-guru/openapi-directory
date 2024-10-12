# ApplicationNewIDGet403Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** |  | [optional] [default to 403]
**message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.application_new_id_get403_response import ApplicationNewIDGet403Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationNewIDGet403Response from a JSON string
application_new_id_get403_response_instance = ApplicationNewIDGet403Response.from_json(json)
# print the JSON string representation of the object
print(ApplicationNewIDGet403Response.to_json())

# convert the object into a dict
application_new_id_get403_response_dict = application_new_id_get403_response_instance.to_dict()
# create an instance of ApplicationNewIDGet403Response from a dict
application_new_id_get403_response_from_dict = ApplicationNewIDGet403Response.from_dict(application_new_id_get403_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


