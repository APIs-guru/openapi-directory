# ApplicationStatusGet500Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployment** | **datetime** | The datetime of the deployment of the WeGA-WebApp | [optional] 
**status** | **str** | Status (healthy|unhealthy) of the currently running WeGA-WebApp | [optional] [default to 'unhealthy']
**svn_revision** | **int** | The Subversion revision of the currently installed WeGA-data | [optional] 
**version** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.application_status_get500_response import ApplicationStatusGet500Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationStatusGet500Response from a JSON string
application_status_get500_response_instance = ApplicationStatusGet500Response.from_json(json)
# print the JSON string representation of the object
print(ApplicationStatusGet500Response.to_json())

# convert the object into a dict
application_status_get500_response_dict = application_status_get500_response_instance.to_dict()
# create an instance of ApplicationStatusGet500Response from a dict
application_status_get500_response_from_dict = ApplicationStatusGet500Response.from_dict(application_status_get500_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


