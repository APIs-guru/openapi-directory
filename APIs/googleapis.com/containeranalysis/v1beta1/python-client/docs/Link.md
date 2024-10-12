# Link

This corresponds to an in-toto link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**byproducts** | [**ByProducts**](ByProducts.md) |  | [optional] 
**command** | **List[str]** | This field contains the full command executed for the step. This can also be empty if links are generated for operations that aren&#39;t directly mapped to a specific command. Each term in the command is an independent string in the list. An example of a command in the in-toto metadata field is: \&quot;command\&quot;: [\&quot;git\&quot;, \&quot;clone\&quot;, \&quot;https://github.com/in-toto/demo-project.git\&quot;] | [optional] 
**environment** | [**Environment**](Environment.md) |  | [optional] 
**materials** | [**List[GrafeasV1beta1IntotoArtifact]**](GrafeasV1beta1IntotoArtifact.md) | Materials are the supply chain artifacts that go into the step and are used for the operation performed. The key of the map is the path of the artifact and the structure contains the recorded hash information. An example is: \&quot;materials\&quot;: [ { \&quot;resource_uri\&quot;: \&quot;foo/bar\&quot;, \&quot;hashes\&quot;: { \&quot;sha256\&quot;: \&quot;ebebf...\&quot;, : } } ] | [optional] 
**products** | [**List[GrafeasV1beta1IntotoArtifact]**](GrafeasV1beta1IntotoArtifact.md) | Products are the supply chain artifacts generated as a result of the step. The structure is identical to that of materials. | [optional] 

## Example

```python
from openapi_client.models.link import Link

# TODO update the JSON string below
json = "{}"
# create an instance of Link from a JSON string
link_instance = Link.from_json(json)
# print the JSON string representation of the object
print(Link.to_json())

# convert the object into a dict
link_dict = link_instance.to_dict()
# create an instance of Link from a dict
link_from_dict = Link.from_dict(link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


