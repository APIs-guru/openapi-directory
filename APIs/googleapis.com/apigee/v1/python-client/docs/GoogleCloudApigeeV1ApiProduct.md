# GoogleCloudApigeeV1ApiProduct


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_resources** | **List[str]** | Comma-separated list of API resources to be bundled in the API product. By default, the resource paths are mapped from the &#x60;proxy.pathsuffix&#x60; variable. The proxy path suffix is defined as the URI fragment following the ProxyEndpoint base path. For example, if the &#x60;apiResources&#x60; element is defined to be &#x60;/forecastrss&#x60; and the base path defined for the API proxy is &#x60;/weather&#x60;, then only requests to &#x60;/weather/forecastrss&#x60; are permitted by the API product. You can select a specific path, or you can select all subpaths with the following wildcard: - &#x60;/**&#x60;: Indicates that all sub-URIs are included. - &#x60;/*&#x60; : Indicates that only URIs one level down are included. By default, / supports the same resources as /** as well as the base path defined by the API proxy. For example, if the base path of the API proxy is &#x60;/v1/weatherapikey&#x60;, then the API product supports requests to &#x60;/v1/weatherapikey&#x60; and to any sub-URIs, such as &#x60;/v1/weatherapikey/forecastrss&#x60;, &#x60;/v1/weatherapikey/region/CA&#x60;, and so on. For more information, see Managing API products. | [optional] 
**approval_type** | **str** | Flag that specifies how API keys are approved to access the APIs defined by the API product. If set to &#x60;manual&#x60;, the consumer key is generated and returned in \&quot;pending\&quot; state. In this case, the API keys won&#39;t work until they have been explicitly approved. If set to &#x60;auto&#x60;, the consumer key is generated and returned in \&quot;approved\&quot; state and can be used immediately. **Note:** Typically, &#x60;auto&#x60; is used to provide access to free or trial API products that provide limited quota or capabilities. | [optional] 
**attributes** | [**List[GoogleCloudApigeeV1Attribute]**](GoogleCloudApigeeV1Attribute.md) | Array of attributes that may be used to extend the default API product profile with customer-specific metadata. You can specify a maximum of 18 attributes. Use this property to specify the access level of the API product as either &#x60;public&#x60;, &#x60;private&#x60;, or &#x60;internal&#x60;. Only products marked &#x60;public&#x60; are available to developers in the Apigee developer portal. For example, you can set a product to &#x60;internal&#x60; while it is in development and then change access to &#x60;public&#x60; when it is ready to release on the portal. API products marked as &#x60;private&#x60; do not appear on the portal, but can be accessed by external developers. | [optional] 
**created_at** | **str** | Response only. Creation time of this environment as milliseconds since epoch. | [optional] 
**description** | **str** | Description of the API product. Include key information about the API product that is not captured by other fields. | [optional] 
**display_name** | **str** | Name displayed in the UI or developer portal to developers registering for API access. | [optional] 
**environments** | **List[str]** | Comma-separated list of environment names to which the API product is bound. Requests to environments that are not listed are rejected. By specifying one or more environments, you can bind the resources listed in the API product to a specific environment, preventing developers from accessing those resources through API proxies deployed in another environment. This setting is used, for example, to prevent resources associated with API proxies in &#x60;prod&#x60; from being accessed by API proxies deployed in &#x60;test&#x60;. | [optional] 
**graphql_operation_group** | [**GoogleCloudApigeeV1GraphQLOperationGroup**](GoogleCloudApigeeV1GraphQLOperationGroup.md) |  | [optional] 
**grpc_operation_group** | [**GoogleCloudApigeeV1GrpcOperationGroup**](GoogleCloudApigeeV1GrpcOperationGroup.md) |  | [optional] 
**last_modified_at** | **str** | Response only. Modified time of this environment as milliseconds since epoch. | [optional] 
**name** | **str** | Internal name of the API product. Characters you can use in the name are restricted to: &#x60;A-Z0-9._\\-$ %&#x60;. **Note:** The internal name cannot be edited when updating the API product. | [optional] 
**operation_group** | [**GoogleCloudApigeeV1OperationGroup**](GoogleCloudApigeeV1OperationGroup.md) |  | [optional] 
**proxies** | **List[str]** | Comma-separated list of API proxy names to which this API product is bound. By specifying API proxies, you can associate resources in the API product with specific API proxies, preventing developers from accessing those resources through other API proxies. Apigee rejects requests to API proxies that are not listed. **Note:** The API proxy names must already exist in the specified environment as they will be validated upon creation. | [optional] 
**quota** | **str** | Number of request messages permitted per app by this API product for the specified &#x60;quotaInterval&#x60; and &#x60;quotaTimeUnit&#x60;. For example, a &#x60;quota&#x60; of 50, for a &#x60;quotaInterval&#x60; of 12 and a &#x60;quotaTimeUnit&#x60; of hours means 50 requests are allowed every 12 hours. | [optional] 
**quota_counter_scope** | **str** | Scope of the quota decides how the quota counter gets applied and evaluate for quota violation. If the Scope is set as PROXY, then all the operations defined for the APIproduct that are associated with the same proxy will share the same quota counter set at the APIproduct level, making it a global counter at a proxy level. If the Scope is set as OPERATION, then each operations get the counter set at the API product dedicated, making it a local counter. Note that, the QuotaCounterScope applies only when an operation does not have dedicated quota set for itself. | [optional] 
**quota_interval** | **str** | Time interval over which the number of request messages is calculated. | [optional] 
**quota_time_unit** | **str** | Time unit defined for the &#x60;quotaInterval&#x60;. Valid values include &#x60;minute&#x60;, &#x60;hour&#x60;, &#x60;day&#x60;, or &#x60;month&#x60;. | [optional] 
**scopes** | **List[str]** | Comma-separated list of OAuth scopes that are validated at runtime. Apigee validates that the scopes in any access token presented match the scopes defined in the OAuth policy associated with the API product. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_api_product import GoogleCloudApigeeV1ApiProduct

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ApiProduct from a JSON string
google_cloud_apigee_v1_api_product_instance = GoogleCloudApigeeV1ApiProduct.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ApiProduct.to_json())

# convert the object into a dict
google_cloud_apigee_v1_api_product_dict = google_cloud_apigee_v1_api_product_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ApiProduct from a dict
google_cloud_apigee_v1_api_product_from_dict = GoogleCloudApigeeV1ApiProduct.from_dict(google_cloud_apigee_v1_api_product_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


