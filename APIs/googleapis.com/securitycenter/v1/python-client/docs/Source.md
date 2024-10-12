# Source

Security Command Center finding source. A finding source is an entity or a mechanism that can produce a finding. A source is like a container of findings that come from the same scanner, logger, monitor, and other tools.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**canonical_name** | **str** | The canonical name of the finding source. It&#39;s either \&quot;organizations/{organization_id}/sources/{source_id}\&quot;, \&quot;folders/{folder_id}/sources/{source_id}\&quot;, or \&quot;projects/{project_number}/sources/{source_id}\&quot;, depending on the closest CRM ancestor of the resource associated with the finding. | [optional] 
**description** | **str** | The description of the source (max of 1024 characters). Example: \&quot;Web Security Scanner is a web security scanner for common vulnerabilities in App Engine applications. It can automatically scan and detect four common vulnerabilities, including cross-site-scripting (XSS), Flash injection, mixed content (HTTP in HTTPS), and outdated or insecure libraries.\&quot; | [optional] 
**display_name** | **str** | The source&#39;s display name. A source&#39;s display name must be unique amongst its siblings, for example, two sources with the same parent can&#39;t share the same display name. The display name must have a length between 1 and 64 characters (inclusive). | [optional] 
**name** | **str** | The relative resource name of this source. See: https://cloud.google.com/apis/design/resource_names#relative_resource_name Example: \&quot;organizations/{organization_id}/sources/{source_id}\&quot; | [optional] 

## Example

```python
from openapi_client.models.source import Source

# TODO update the JSON string below
json = "{}"
# create an instance of Source from a JSON string
source_instance = Source.from_json(json)
# print the JSON string representation of the object
print(Source.to_json())

# convert the object into a dict
source_dict = source_instance.to_dict()
# create an instance of Source from a dict
source_from_dict = Source.from_dict(source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


