# WebServiceProperties

The set of properties specific to the Azure ML web service resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assets** | [**Dict[str, AssetItem]**](AssetItem.md) | Contains user defined properties describing web service assets. Properties are expressed as Key/Value pairs. | [optional] 
**commitment_plan** | [**CommitmentPlan**](CommitmentPlan.md) |  | [optional] 
**created_on** | **datetime** | Read Only: The date and time when the web service was created. | [optional] [readonly] 
**description** | **str** | The description of the web service. | [optional] 
**diagnostics** | [**DiagnosticsConfiguration**](DiagnosticsConfiguration.md) |  | [optional] 
**example_request** | [**ExampleRequest**](ExampleRequest.md) |  | [optional] 
**expose_sample_data** | **bool** | When set to true, sample data is included in the web service&#39;s swagger definition. The default value is true. | [optional] 
**input** | [**ServiceInputOutputSpecification**](ServiceInputOutputSpecification.md) |  | [optional] 
**keys** | [**WebServiceKeys**](WebServiceKeys.md) |  | [optional] 
**machine_learning_workspace** | [**MachineLearningWorkspace**](MachineLearningWorkspace.md) |  | [optional] 
**modified_on** | **datetime** | Read Only: The date and time when the web service was last modified. | [optional] [readonly] 
**output** | [**ServiceInputOutputSpecification**](ServiceInputOutputSpecification.md) |  | [optional] 
**package_type** | **str** | Specifies the package type. Valid values are Graph (Specifies a web service published through the Machine Learning Studio) and Code (Specifies a web service published using code such as Python). Note: Code is not supported at this time. | 
**parameters** | [**Dict[str, WebServiceParameter]**](WebServiceParameter.md) | The set of global parameters values defined for the web service, given as a global parameter name to default value map. If no default value is specified, the parameter is considered to be required. | [optional] 
**payloads_in_blob_storage** | **bool** | When set to true, indicates that the payload size is larger than 3 MB. Otherwise false. If the payload size exceed 3 MB, the payload is stored in a blob and the PayloadsLocation parameter contains the URI of the blob. Otherwise, this will be set to false and Assets, Input, Output, Package, Parameters, ExampleRequest are inline. The Payload sizes is determined by adding the size of the Assets, Input, Output, Package, Parameters, and the ExampleRequest. | [optional] 
**payloads_location** | [**BlobLocation**](BlobLocation.md) |  | [optional] 
**provisioning_state** | **str** | Read Only: The provision state of the web service. Valid values are Unknown, Provisioning, Succeeded, and Failed. | [optional] [readonly] 
**read_only** | **bool** | When set to true, indicates that the web service is read-only and can no longer be updated or patched, only removed. Default, is false. Note: Once set to true, you cannot change its value. | [optional] 
**realtime_configuration** | [**RealtimeConfiguration**](RealtimeConfiguration.md) |  | [optional] 
**storage_account** | [**StorageAccount**](StorageAccount.md) |  | [optional] 
**swagger_location** | **str** | Read Only: Contains the URI of the swagger spec associated with this web service. | [optional] [readonly] 
**title** | **str** | The title of the web service. | [optional] 

## Example

```python
from openapi_client.models.web_service_properties import WebServiceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of WebServiceProperties from a JSON string
web_service_properties_instance = WebServiceProperties.from_json(json)
# print the JSON string representation of the object
print(WebServiceProperties.to_json())

# convert the object into a dict
web_service_properties_dict = web_service_properties_instance.to_dict()
# create an instance of WebServiceProperties from a dict
web_service_properties_from_dict = WebServiceProperties.from_dict(web_service_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


