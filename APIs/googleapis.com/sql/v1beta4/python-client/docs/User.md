# User

A Cloud SQL user resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dual_password_type** | **str** | Dual password status for the user. | [optional] 
**etag** | **str** | This field is deprecated and will be removed from a future version of the API. | [optional] 
**host** | **str** | Optional. The host from which the user can connect. For &#x60;insert&#x60; operations, host defaults to an empty string. For &#x60;update&#x60; operations, host is specified as part of the request URL. The host name cannot be updated after insertion. For a MySQL instance, it&#39;s required; for a PostgreSQL or SQL Server instance, it&#39;s optional. | [optional] 
**instance** | **str** | The name of the Cloud SQL instance. This does not include the project ID. Can be omitted for *update* because it is already specified on the URL. | [optional] 
**kind** | **str** | This is always &#x60;sql#user&#x60;. | [optional] 
**name** | **str** | The name of the user in the Cloud SQL instance. Can be omitted for &#x60;update&#x60; because it is already specified in the URL. | [optional] 
**password** | **str** | The password for the user. | [optional] 
**password_policy** | [**UserPasswordValidationPolicy**](UserPasswordValidationPolicy.md) |  | [optional] 
**project** | **str** | The project ID of the project containing the Cloud SQL database. The Google apps domain is prefixed if applicable. Can be omitted for *update* because it is already specified on the URL. | [optional] 
**sqlserver_user_details** | [**SqlServerUserDetails**](SqlServerUserDetails.md) |  | [optional] 
**type** | **str** | The user type. It determines the method to authenticate the user during login. The default is the database&#39;s built-in user type. | [optional] 

## Example

```python
from openapi_client.models.user import User

# TODO update the JSON string below
json = "{}"
# create an instance of User from a JSON string
user_instance = User.from_json(json)
# print the JSON string representation of the object
print(User.to_json())

# convert the object into a dict
user_dict = user_instance.to_dict()
# create an instance of User from a dict
user_from_dict = User.from_dict(user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


