# Spec


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_path** | **str** | The base path on which the API is served, relative to the **host**. | [optional] 
**consumes** | **List[str]** | A list of MIME types that the API can consume. | [optional] 
**definitions** | **object** | The data types produced and consumed by operations. | [optional] 
**external_docs** | **object** | Links to and descriptions of related external documentation. | [optional] 
**host** | **str** | The host (domain name or IP address) serving the API. | [optional] 
**info** | **object** | Metadata about the API. | [optional] 
**paths** | **object** | The paths and operations available to the API. | [optional] 
**produces** | **List[str]** | A list of MIME types that the API can produce. | [optional] 
**schemes** | **List[str]** | The transfer protocol being used by the API. | [optional] 
**security** | **List[object]** | A list of the security schemes being used by the API. | [optional] 
**security_definitions** | **object** | The security scheme definitions being used by the API. | [optional] 
**swagger** | **str** | The version of the Swagger specification that&#39;s being used. | [optional] 
**tags** | **List[object]** | A list of tags used by the specification, with metadata. | [optional] 
**x_tag_groups** | **List[object]** | A list of the groups and tags used in the left column of the Swagger page. | [optional] 

## Example

```python
from openapi_client.models.spec import Spec

# TODO update the JSON string below
json = "{}"
# create an instance of Spec from a JSON string
spec_instance = Spec.from_json(json)
# print the JSON string representation of the object
print(Spec.to_json())

# convert the object into a dict
spec_dict = spec_instance.to_dict()
# create an instance of Spec from a dict
spec_from_dict = Spec.from_dict(spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


