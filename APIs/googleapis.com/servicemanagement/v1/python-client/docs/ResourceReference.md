# ResourceReference

Defines a proto annotation that describes a string field that refers to an API resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**child_type** | **str** | The resource type of a child collection that the annotated field references. This is useful for annotating the &#x60;parent&#x60; field that doesn&#39;t have a fixed resource type. Example: message ListLogEntriesRequest { string parent &#x3D; 1 [(google.api.resource_reference) &#x3D; { child_type: \&quot;logging.googleapis.com/LogEntry\&quot; }; } | [optional] 
**type** | **str** | The resource type that the annotated field references. Example: message Subscription { string topic &#x3D; 2 [(google.api.resource_reference) &#x3D; { type: \&quot;pubsub.googleapis.com/Topic\&quot; }]; } Occasionally, a field may reference an arbitrary resource. In this case, APIs use the special value * in their resource reference. Example: message GetIamPolicyRequest { string resource &#x3D; 2 [(google.api.resource_reference) &#x3D; { type: \&quot;*\&quot; }]; } | [optional] 

## Example

```python
from openapi_client.models.resource_reference import ResourceReference

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceReference from a JSON string
resource_reference_instance = ResourceReference.from_json(json)
# print the JSON string representation of the object
print(ResourceReference.to_json())

# convert the object into a dict
resource_reference_dict = resource_reference_instance.to_dict()
# create an instance of ResourceReference from a dict
resource_reference_from_dict = ResourceReference.from_dict(resource_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


