# SecurityContext

Not supported by Cloud Run. SecurityContext holds security configuration that will be applied to a container. Some fields are present in both SecurityContext and PodSecurityContext. When both are set, the values in SecurityContext take precedence.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**run_as_user** | **int** | The UID to run the entrypoint of the container process. Defaults to user specified in image metadata if unspecified. May also be set in PodSecurityContext. If set in both SecurityContext and PodSecurityContext, the value specified in SecurityContext takes precedence. | [optional] 

## Example

```python
from openapi_client.models.security_context import SecurityContext

# TODO update the JSON string below
json = "{}"
# create an instance of SecurityContext from a JSON string
security_context_instance = SecurityContext.from_json(json)
# print the JSON string representation of the object
print(SecurityContext.to_json())

# convert the object into a dict
security_context_dict = security_context_instance.to_dict()
# create an instance of SecurityContext from a dict
security_context_from_dict = SecurityContext.from_dict(security_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


