# Document

A Firestore document. Must not exceed 1 MiB - 4 bytes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time at which the document was created. This value increases monotonically when a document is deleted then recreated. It can also be compared to values from other documents and the &#x60;read_time&#x60; of a query. | [optional] 
**fields** | [**Dict[str, Value]**](Value.md) | The document&#39;s fields. The map keys represent field names. Field names matching the regular expression &#x60;__.*__&#x60; are reserved. Reserved field names are forbidden except in certain documented contexts. The field names, represented as UTF-8, must not exceed 1,500 bytes and cannot be empty. Field paths may be used in other contexts to refer to structured fields defined here. For &#x60;map_value&#x60;, the field path is represented by a dot-delimited (&#x60;.&#x60;) string of segments. Each segment is either a simple field name (defined below) or a quoted field name. For example, the structured field &#x60;\&quot;foo\&quot; : { map_value: { \&quot;x&amp;y\&quot; : { string_value: \&quot;hello\&quot; }}}&#x60; would be represented by the field path &#x60;&#x60; foo.&#x60;x&amp;y&#x60; &#x60;&#x60;. A simple field name contains only characters &#x60;a&#x60; to &#x60;z&#x60;, &#x60;A&#x60; to &#x60;Z&#x60;, &#x60;0&#x60; to &#x60;9&#x60;, or &#x60;_&#x60;, and must not start with &#x60;0&#x60; to &#x60;9&#x60;. For example, &#x60;foo_bar_17&#x60;. A quoted field name starts and ends with &#x60;&#x60; &#x60; &#x60;&#x60; and may contain any character. Some characters, including &#x60;&#x60; &#x60; &#x60;&#x60;, must be escaped using a &#x60;\\&#x60;. For example, &#x60;&#x60; &#x60;x&amp;y&#x60; &#x60;&#x60; represents &#x60;x&amp;y&#x60; and &#x60;&#x60; &#x60;bak\\&#x60;tik&#x60; &#x60;&#x60; represents &#x60;&#x60; bak&#x60;tik &#x60;&#x60;. | [optional] 
**name** | **str** | The resource name of the document, for example &#x60;projects/{project_id}/databases/{database_id}/documents/{document_path}&#x60;. | [optional] 
**update_time** | **str** | Output only. The time at which the document was last changed. This value is initially set to the &#x60;create_time&#x60; then increases monotonically with each change to the document. It can also be compared to values from other documents and the &#x60;read_time&#x60; of a query. | [optional] 

## Example

```python
from openapi_client.models.document import Document

# TODO update the JSON string below
json = "{}"
# create an instance of Document from a JSON string
document_instance = Document.from_json(json)
# print the JSON string representation of the object
print(Document.to_json())

# convert the object into a dict
document_dict = document_instance.to_dict()
# create an instance of Document from a dict
document_from_dict = Document.from_dict(document_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


