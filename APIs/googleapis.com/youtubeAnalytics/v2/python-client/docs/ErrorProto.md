# ErrorProto

Describes one specific error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**argument** | **List[str]** | Error arguments, to be used when building user-friendly error messages given the error domain and code. Different error codes require different arguments. | [optional] 
**code** | **str** | Error code in the error domain. This should correspond to a value of the enum type whose name is in domain. See the core error domain in error_domain.proto. | [optional] 
**debug_info** | **str** | Debugging information, which should not be shared externally. | [optional] 
**domain** | **str** | Error domain. RoSy services can define their own domain and error codes. This should normally be the name of an enum type, such as: gdata.CoreErrorDomain | [optional] 
**external_error_message** | **str** | A short explanation for the error, which can be shared outside Google. Please set domain, code and arguments whenever possible instead of this error message so that external APIs can build safe error messages themselves. External messages built in a RoSy interface will most likely refer to information and concepts that are not available externally and should not be exposed. It is safer if external APIs can understand the errors and decide what the error message should look like. | [optional] 
**location** | **str** | Location of the error, as specified by the location type. If location_type is PATH, this should be a path to a field that&#39;s relative to the request, using FieldPath notation (net/proto2/util/public/field_path.h). Examples: authenticated_user.gaia_id resource.address[2].country | [optional] 
**location_type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.error_proto import ErrorProto

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorProto from a JSON string
error_proto_instance = ErrorProto.from_json(json)
# print the JSON string representation of the object
print(ErrorProto.to_json())

# convert the object into a dict
error_proto_dict = error_proto_instance.to_dict()
# create an instance of ErrorProto from a dict
error_proto_from_dict = ErrorProto.from_dict(error_proto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


