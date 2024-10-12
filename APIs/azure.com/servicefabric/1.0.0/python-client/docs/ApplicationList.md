# ApplicationList

The list of the application

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continuation_token** | **str** |  | [optional] 
**items** | [**List[Application]**](Application.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_list import ApplicationList

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationList from a JSON string
application_list_instance = ApplicationList.from_json(json)
# print the JSON string representation of the object
print(ApplicationList.to_json())

# convert the object into a dict
application_list_dict = application_list_instance.to_dict()
# create an instance of ApplicationList from a dict
application_list_from_dict = ApplicationList.from_dict(application_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


