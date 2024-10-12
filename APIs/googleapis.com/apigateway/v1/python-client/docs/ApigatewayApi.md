# ApigatewayApi

An API that can be served by one or more Gateways.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Created time. | [optional] [readonly] 
**display_name** | **str** | Optional. Display name. | [optional] 
**labels** | **Dict[str, str]** | Optional. Resource labels to represent user-provided metadata. Refer to cloud documentation on labels for more details. https://cloud.google.com/compute/docs/labeling-resources | [optional] 
**managed_service** | **str** | Optional. Immutable. The name of a Google Managed Service ( https://cloud.google.com/service-infrastructure/docs/glossary#managed). If not specified, a new Service will automatically be created in the same project as this API. | [optional] 
**name** | **str** | Output only. Resource name of the API. Format: projects/{project}/locations/global/apis/{api} | [optional] [readonly] 
**state** | **str** | Output only. State of the API. | [optional] [readonly] 
**update_time** | **str** | Output only. Updated time. | [optional] [readonly] 

## Example

```python
from openapi_client.models.apigateway_api import ApigatewayApi

# TODO update the JSON string below
json = "{}"
# create an instance of ApigatewayApi from a JSON string
apigateway_api_instance = ApigatewayApi.from_json(json)
# print the JSON string representation of the object
print(ApigatewayApi.to_json())

# convert the object into a dict
apigateway_api_dict = apigateway_api_instance.to_dict()
# create an instance of ApigatewayApi from a dict
apigateway_api_from_dict = ApigatewayApi.from_dict(apigateway_api_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


