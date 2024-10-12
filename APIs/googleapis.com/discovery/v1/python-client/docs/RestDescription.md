# RestDescription


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth** | [**RestDescriptionAuth**](RestDescriptionAuth.md) |  | [optional] 
**base_path** | **str** | [DEPRECATED] The base path for REST requests. | [optional] 
**base_url** | **str** | [DEPRECATED] The base URL for REST requests. | [optional] 
**batch_path** | **str** | The path for REST batch requests. | [optional] 
**canonical_name** | **str** | Indicates how the API name should be capitalized and split into various parts. Useful for generating pretty class names. | [optional] 
**description** | **str** | The description of this API. | [optional] 
**discovery_version** | **str** | Indicate the version of the Discovery API used to generate this doc. | [optional] [default to 'v1']
**documentation_link** | **str** | A link to human readable documentation for the API. | [optional] 
**endpoints** | [**List[RestDescriptionEndpointsInner]**](RestDescriptionEndpointsInner.md) | A list of location-based endpoint objects for this API. Each object contains the endpoint URL, location, description and deprecation status. | [optional] 
**etag** | **str** | The ETag for this response. | [optional] [readonly] 
**exponential_backoff_default** | **bool** | Enable exponential backoff for suitable methods in the generated clients. | [optional] 
**features** | **List[str]** | A list of supported features for this API. | [optional] 
**icons** | [**DirectoryListItemsInnerIcons**](DirectoryListItemsInnerIcons.md) |  | [optional] 
**id** | **str** | The ID of this API. | [optional] 
**kind** | **str** | The kind for this response. | [optional] [default to 'discovery#restDescription']
**labels** | **List[str]** | Labels for the status of this API, such as labs or deprecated. | [optional] 
**methods** | [**Dict[str, RestMethod]**](RestMethod.md) | API-level methods for this API. | [optional] 
**name** | **str** | The name of this API. | [optional] 
**owner_domain** | **str** | The domain of the owner of this API. Together with the ownerName and a packagePath values, this can be used to generate a library for this API which would have a unique fully qualified name. | [optional] 
**owner_name** | **str** | The name of the owner of this API. See ownerDomain. | [optional] 
**package_path** | **str** | The package of the owner of this API. See ownerDomain. | [optional] 
**parameters** | [**Dict[str, JsonSchema]**](JsonSchema.md) | Common parameters that apply across all apis. | [optional] 
**protocol** | **str** | The protocol described by this document. | [optional] [default to 'rest']
**resources** | [**Dict[str, RestResource]**](RestResource.md) | The resources in this API. | [optional] 
**revision** | **str** | The version of this API. | [optional] 
**root_url** | **str** | The root URL under which all API services live. | [optional] 
**schemas** | [**Dict[str, JsonSchema]**](JsonSchema.md) | The schemas for this API. | [optional] 
**service_path** | **str** | The base path for all REST requests. | [optional] 
**title** | **str** | The title of this API. | [optional] 
**version** | **str** | The version of this API. | [optional] 
**version_module** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.rest_description import RestDescription

# TODO update the JSON string below
json = "{}"
# create an instance of RestDescription from a JSON string
rest_description_instance = RestDescription.from_json(json)
# print the JSON string representation of the object
print(RestDescription.to_json())

# convert the object into a dict
rest_description_dict = rest_description_instance.to_dict()
# create an instance of RestDescription from a dict
rest_description_from_dict = RestDescription.from_dict(rest_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


