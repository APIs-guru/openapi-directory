# FieldPolicy

Google API Policy Annotation This message defines a simple API policy annotation that can be used to annotate API request and response message fields with applicable policies. One field may have multiple applicable policies that must all be satisfied before a request can be processed. This policy annotation is used to generate the overall policy that will be used for automatic runtime policy enforcement and documentation generation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_permission** | **str** | Specifies the required permission(s) for the resource referred to by the field. It requires the field contains a valid resource reference, and the request must pass the permission checks to proceed. For example, \&quot;resourcemanager.projects.get\&quot;. | [optional] 
**resource_type** | **str** | Specifies the resource type for the resource referred to by the field. | [optional] 
**selector** | **str** | Selects one or more request or response message fields to apply this &#x60;FieldPolicy&#x60;. When a &#x60;FieldPolicy&#x60; is used in proto annotation, the selector must be left as empty. The service config generator will automatically fill the correct value. When a &#x60;FieldPolicy&#x60; is used in service config, the selector must be a comma-separated string with valid request or response field paths, such as \&quot;foo.bar\&quot; or \&quot;foo.bar,foo.baz\&quot;. | [optional] 

## Example

```python
from openapi_client.models.field_policy import FieldPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of FieldPolicy from a JSON string
field_policy_instance = FieldPolicy.from_json(json)
# print the JSON string representation of the object
print(FieldPolicy.to_json())

# convert the object into a dict
field_policy_dict = field_policy_instance.to_dict()
# create an instance of FieldPolicy from a dict
field_policy_from_dict = FieldPolicy.from_dict(field_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


