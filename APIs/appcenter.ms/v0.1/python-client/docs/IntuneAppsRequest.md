# IntuneAppsRequest

IntuneAppsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_month** | **str** | PartitionKey year-month | [optional] 

## Example

```python
from openapi_client.models.intune_apps_request import IntuneAppsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of IntuneAppsRequest from a JSON string
intune_apps_request_instance = IntuneAppsRequest.from_json(json)
# print the JSON string representation of the object
print(IntuneAppsRequest.to_json())

# convert the object into a dict
intune_apps_request_dict = intune_apps_request_instance.to_dict()
# create an instance of IntuneAppsRequest from a dict
intune_apps_request_from_dict = IntuneAppsRequest.from_dict(intune_apps_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


