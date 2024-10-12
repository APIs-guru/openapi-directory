# Display


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The localized friendly description for the operation as shown to the user. This description should be thorough, yet concise. It will be used in tool-tips and detailed views. | [optional] 
**operation** | **str** | The localized friendly name for the operation as shown to the user. This name should be concise (to fit in drop downs), but clear (self-documenting). Use Title Casing and include the entity/resource to which it applies. | [optional] 
**origin** | **str** | The intended executor of the operation; governs the display of the operation in the RBAC UX and the audit logs UX. Default value is &#39;user,system&#39; | [optional] 
**provider** | **str** | The localized friendly form of the resource provider name. This form is also expected to include the publisher/company responsible. Use Title Casing. Begin with \&quot;Microsoft\&quot; for 1st party services. | [optional] 
**resource** | **str** | The localized friendly form of the resource type related to this action/operation. This form should match the public documentation for the resource provider. Use Title Casing. For examples, refer to the \&quot;name\&quot; section. | [optional] 

## Example

```python
from openapi_client.models.display import Display

# TODO update the JSON string below
json = "{}"
# create an instance of Display from a JSON string
display_instance = Display.from_json(json)
# print the JSON string representation of the object
print(Display.to_json())

# convert the object into a dict
display_dict = display_instance.to_dict()
# create an instance of Display from a dict
display_from_dict = Display.from_dict(display_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


