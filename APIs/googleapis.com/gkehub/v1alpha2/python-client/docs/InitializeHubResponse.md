# InitializeHubResponse

Response message for the InitializeHub method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_identity** | **str** | Name of the Hub default service identity, in the format: service-@gcp-sa-gkehub.iam.gserviceaccount.com The service account has &#x60;roles/gkehub.serviceAgent&#x60; in the Hub project. | [optional] 
**workload_identity_pool** | **str** | The Workload Identity Pool used for Workload Identity-enabled clusters registered with this Hub. Format: &#x60;.hub.id.goog&#x60; | [optional] 

## Example

```python
from openapi_client.models.initialize_hub_response import InitializeHubResponse

# TODO update the JSON string below
json = "{}"
# create an instance of InitializeHubResponse from a JSON string
initialize_hub_response_instance = InitializeHubResponse.from_json(json)
# print the JSON string representation of the object
print(InitializeHubResponse.to_json())

# convert the object into a dict
initialize_hub_response_dict = initialize_hub_response_instance.to_dict()
# create an instance of InitializeHubResponse from a dict
initialize_hub_response_from_dict = InitializeHubResponse.from_dict(initialize_hub_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


