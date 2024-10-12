# UserDefinedFunctionResource

 This is used for defining User Defined Function (UDF) resources only when using legacy SQL. Users of GoogleSQL should leverage either DDL (e.g. CREATE [TEMPORARY] FUNCTION ... ) or the Routines API to define UDF resources. For additional information on migrating, see: https://cloud.google.com/bigquery/docs/reference/standard-sql/migrating-from-legacy-sql#differences_in_user-defined_javascript_functions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inline_code** | **str** | [Pick one] An inline resource that contains code for a user-defined function (UDF). Providing a inline code resource is equivalent to providing a URI for a file containing the same code. | [optional] 
**resource_uri** | **str** | [Pick one] A code resource to load from a Google Cloud Storage URI (gs://bucket/path). | [optional] 

## Example

```python
from openapi_client.models.user_defined_function_resource import UserDefinedFunctionResource

# TODO update the JSON string below
json = "{}"
# create an instance of UserDefinedFunctionResource from a JSON string
user_defined_function_resource_instance = UserDefinedFunctionResource.from_json(json)
# print the JSON string representation of the object
print(UserDefinedFunctionResource.to_json())

# convert the object into a dict
user_defined_function_resource_dict = user_defined_function_resource_instance.to_dict()
# create an instance of UserDefinedFunctionResource from a dict
user_defined_function_resource_from_dict = UserDefinedFunctionResource.from_dict(user_defined_function_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


