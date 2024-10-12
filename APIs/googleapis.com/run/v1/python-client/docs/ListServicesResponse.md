# ListServicesResponse

A list of Service resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_version** | **str** | The API version for this call; returns \&quot;serving.knative.dev/v1\&quot;. | [optional] 
**items** | [**List[Service]**](Service.md) | List of Services. | [optional] 
**kind** | **str** | The kind of this resource; returns \&quot;ServiceList\&quot;. | [optional] 
**metadata** | [**ListMeta**](ListMeta.md) |  | [optional] 
**unreachable** | **List[str]** | For calls against the global endpoint, returns the list of Cloud locations that could not be reached. For regional calls, this field is not used. | [optional] 

## Example

```python
from openapi_client.models.list_services_response import ListServicesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListServicesResponse from a JSON string
list_services_response_instance = ListServicesResponse.from_json(json)
# print the JSON string representation of the object
print(ListServicesResponse.to_json())

# convert the object into a dict
list_services_response_dict = list_services_response_instance.to_dict()
# create an instance of ListServicesResponse from a dict
list_services_response_from_dict = ListServicesResponse.from_dict(list_services_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


