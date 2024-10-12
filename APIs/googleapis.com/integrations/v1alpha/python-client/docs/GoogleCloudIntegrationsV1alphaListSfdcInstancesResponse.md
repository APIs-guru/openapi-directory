# GoogleCloudIntegrationsV1alphaListSfdcInstancesResponse

Response to list SfdcInstances.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The token used to retrieve the next page of results. | [optional] 
**sfdc_instances** | [**List[GoogleCloudIntegrationsV1alphaSfdcInstance]**](GoogleCloudIntegrationsV1alphaSfdcInstance.md) | The list of SfdcInstances retrieved. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_integrations_v1alpha_list_sfdc_instances_response import GoogleCloudIntegrationsV1alphaListSfdcInstancesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudIntegrationsV1alphaListSfdcInstancesResponse from a JSON string
google_cloud_integrations_v1alpha_list_sfdc_instances_response_instance = GoogleCloudIntegrationsV1alphaListSfdcInstancesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudIntegrationsV1alphaListSfdcInstancesResponse.to_json())

# convert the object into a dict
google_cloud_integrations_v1alpha_list_sfdc_instances_response_dict = google_cloud_integrations_v1alpha_list_sfdc_instances_response_instance.to_dict()
# create an instance of GoogleCloudIntegrationsV1alphaListSfdcInstancesResponse from a dict
google_cloud_integrations_v1alpha_list_sfdc_instances_response_from_dict = GoogleCloudIntegrationsV1alphaListSfdcInstancesResponse.from_dict(google_cloud_integrations_v1alpha_list_sfdc_instances_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


